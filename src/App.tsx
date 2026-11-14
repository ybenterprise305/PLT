/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileCallBar } from './components/MobileCallBar';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ServiceAreasPage } from './pages/ServiceAreasPage';
import { LocationDetailPage } from './pages/LocationDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { SitemapPage } from './pages/SitemapPage';
import { FAQPage } from './pages/FAQPage';
import { BlogListPage } from './pages/BlogListPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { AdLandingPage } from './pages/AdLandingPage';
import { SpanishContentPage } from './pages/SpanishContentPage';
import { AdLandingHubPage } from './pages/AdLandingHubPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { LocksmithTipsPage } from './pages/LocksmithTipsPage';
import { TipDetailPage } from './pages/TipDetailPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { LanguageProvider, type Language } from './context/LanguageContext';
import { isEsPath, stripLocale, localizePath, switchPath } from './utils/locale';

import { LocalizedA } from './components/LocalizedA';
interface AppProps {
  /** Path to render. Used when pre-rendering at build time; in the browser the address bar decides. */
  initialPath?: string;
}

export default function App({ initialPath }: AppProps) {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (initialPath) return initialPath;
    return (typeof window !== 'undefined' && window.location.pathname) || '/';
  });

  const navigate = useCallback((href: string) => {
    // Spanish visitors stay on the Spanish version of pages that have one
    const lang = isEsPath(window.location.pathname) ? 'es' : 'en';
    const url = new URL(localizePath(href, lang), window.location.origin);
    const next = url.pathname + url.search + url.hash;
    const current = window.location.pathname + window.location.search + window.location.hash;
    if (current !== next) {
      window.history.pushState({}, '', next);
    }
    setCurrentPath(url.pathname);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const switchLanguage = useCallback((lang: Language) => {
    const here = window.location.pathname + window.location.search + window.location.hash;
    const next = switchPath(here, lang);
    window.history.pushState({}, '', next);
    setCurrentPath(new URL(next, window.location.origin).pathname);
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Real <LocalizedA href="/..."> links work without JavaScript (and for search engines); with
  // JavaScript, this turns an ordinary click into a fast in-page navigation.
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const target = event.target as Element | null;
      const anchor = target && 'closest' in target ? (target.closest('a[href]') as HTMLAnchorElement | null) : null;
      if (!anchor) return;
      if (anchor.target && anchor.target !== '_self') return;
      if (anchor.hasAttribute('download')) return;
      const href = anchor.getAttribute('href') || '';
      if (!href.startsWith('/') || href.startsWith('//')) return;
      event.preventDefault();
      navigate(href);
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [navigate]);

  // Route matching
  const fullPath = currentPath.replace(/\/+$/, '') || '/';
  const normalizedPath = stripLocale(fullPath); // '/es/services' is matched as '/services'

  // Render full Spanish copy on every indexable /es page, not mixed English templates.
  // Keep the bilingual homepage separate and let the shared layout translate its navigation.
  if (isEsPath(fullPath) && normalizedPath !== '/' && (
    ['/services', '/service-areas', '/about', '/contact', '/faq'].includes(normalizedPath) ||
    normalizedPath.startsWith('/services/') || normalizedPath.startsWith('/service-areas/')
  )) {
    return (
      <LanguageProvider path={fullPath} onSwitch={switchLanguage}>
        <div className="flex min-h-screen w-full flex-col overflow-x-clip bg-slate-950 text-slate-100">
          <Header currentPath={normalizedPath} onNavigate={navigate} />
          <main className="flex-1 pb-24 lg:pb-0"><SpanishContentPage path={normalizedPath} /></main>
          <Footer onNavigate={navigate} />
          <MobileCallBar />
        </div>
      </LanguageProvider>
    );
  }


  // Check for dedicated standalone Ad Landing Pages (/lp/:slug or /landing/:slug or /ad/:slug)
  if (normalizedPath.startsWith('/lp/') || normalizedPath.startsWith('/landing/') || normalizedPath.startsWith('/ad/')) {
    const slug = normalizedPath.replace(/^\/(lp|landing|ad)\//, '');
    return (
      <LanguageProvider path={fullPath} onSwitch={switchLanguage}>
        <AdLandingPage slug={slug} onNavigate={navigate} />
      </LanguageProvider>
    );
  }

  let pageContent = null;

  if (normalizedPath === '/') {
    pageContent = <HomePage onNavigate={navigate} />;
  } else if (normalizedPath === '/services') {
    pageContent = <ServicesPage onNavigate={navigate} />;
  } else if (normalizedPath.startsWith('/services/')) {
    const slug = normalizedPath.replace('/services/', '');
    pageContent = <ServiceDetailPage slug={slug} onNavigate={navigate} />;
  } else if (normalizedPath === '/service-areas') {
    pageContent = <ServiceAreasPage onNavigate={navigate} />;
  } else if (normalizedPath.startsWith('/service-areas/')) {
    const slug = normalizedPath.replace('/service-areas/', '');
    pageContent = <LocationDetailPage slug={slug} onNavigate={navigate} />;
  } else if (normalizedPath === '/blog') {
    pageContent = <BlogListPage onNavigate={navigate} />;
  } else if (normalizedPath.startsWith('/blog/')) {
    const slug = normalizedPath.replace('/blog/', '');
    pageContent = <BlogPostPage slug={slug} onNavigate={navigate} />;
  } else if (normalizedPath === '/about') {
    pageContent = <AboutPage onNavigate={navigate} />;
  } else if (normalizedPath === '/contact') {
    pageContent = <ContactPage onNavigate={navigate} />;
  } else if (normalizedPath === '/faq') {
    pageContent = <FAQPage onNavigate={navigate} />;
  } else if (normalizedPath === '/tips') {
    pageContent = <LocksmithTipsPage onNavigate={navigate} />;
  } else if (normalizedPath.startsWith('/tips/')) {
    const slug = normalizedPath.replace('/tips/', '');
    pageContent = <TipDetailPage slug={slug} onNavigate={navigate} />;
  } else if (normalizedPath === '/privacy') {
    pageContent = <PrivacyPolicyPage onNavigate={navigate} />;
  } else if (normalizedPath === '/terms') {
    pageContent = <TermsPage onNavigate={navigate} />;
  } else if (normalizedPath === '/lp' || normalizedPath === '/advertising') {
    pageContent = <AdLandingHubPage onNavigate={navigate} />;
  } else if (normalizedPath === '/sitemap') {
    pageContent = <SitemapPage onNavigate={navigate} />;
  } else {
    pageContent = <NotFoundPage onNavigate={navigate} />;
  }

  return (
    <LanguageProvider path={fullPath} onSwitch={switchLanguage}>
      <div className="flex flex-col min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 overflow-x-clip w-full">
        {/* Header with Call box, Text box, Language Toggle, and full phone number */}
        <Header
          currentPath={normalizedPath}
          onNavigate={navigate}
        />

        {/* Main Page Area with generous smartphone bottom clearance for the sticky call bar */}
        <main className="flex-1 pb-24 sm:pb-28 lg:pb-0 w-full">
          {pageContent}
        </main>

        {/* Footer */}
        <Footer onNavigate={navigate} />

        {/* Sticky Mobile Tap-To-Call Bottom Bar */}
        <MobileCallBar />
      </div>
    </LanguageProvider>
  );
}
