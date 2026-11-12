/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
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
import { AdLandingHubPage } from './pages/AdLandingHubPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { LocksmithTipsPage } from './pages/LocksmithTipsPage';
import { TipDetailPage } from './pages/TipDetailPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Route matching
  const normalizedPath = currentPath.replace(/\/+$/, '') || '/';

  // Check for dedicated standalone Ad Landing Pages (/lp/:slug or /landing/:slug or /ad/:slug)
  if (normalizedPath.startsWith('/lp/') || normalizedPath.startsWith('/landing/') || normalizedPath.startsWith('/ad/')) {
    const slug = normalizedPath.replace(/^\/(lp|landing|ad)\//, '');
    return (
      <LanguageProvider>
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
    <LanguageProvider>
      <div className="flex flex-col min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 overflow-x-hidden w-full">
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
