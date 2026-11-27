import { useCallback, useEffect, useRef, useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileCallBar } from './components/MobileCallBar';
import { LanguageProvider, type Language } from './context/LanguageContext';
import { isEsPath, localizePath, switchPath } from './utils/locale';
import { loadRoute, matchRoute, type LoadedRoute } from './routes';

export default function App({ initialRoute }: { initialRoute: LoadedRoute }) {
  const [route, setRoute] = useState(initialRoute);
  const navigation = useRef(0);

  const openRoute = useCallback(async (url: URL, mode: 'push' | 'pop', scroll: boolean) => {
    const id = ++navigation.current;
    try {
      const next = await loadRoute(url.pathname);
      if (id !== navigation.current) return;
      if (mode === 'push' && url.href !== window.location.href) {
        window.history.pushState({}, '', url.href);
      }
      setRoute(next);
      if (scroll) window.scrollTo({ top: 0, behavior: 'instant' });
    } catch {
      // The static document remains available when an older tab requests a retired chunk.
      if (id === navigation.current) window.location.assign(url.href);
    }
  }, []);

  const navigate = useCallback((href: string) => {
    const lang = isEsPath(window.location.pathname) ? 'es' : 'en';
    const url = new URL(localizePath(href, lang), window.location.origin);
    openRoute(url, 'push', true);
  }, [openRoute]);

  const switchLanguage = useCallback((lang: Language) => {
    const here = window.location.pathname + window.location.search + window.location.hash;
    const next = new URL(switchPath(here, lang), window.location.origin);
    openRoute(next, 'push', false);
  }, [openRoute]);

  useEffect(() => {
    const handlePopState = () => openRoute(new URL(window.location.href), 'pop', false);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [openRoute]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = (event.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null;
      if (!anchor || (anchor.target && anchor.target !== '_self') || anchor.hasAttribute('download')) return;
      const href = anchor.getAttribute('href') || '';
      if (!href.startsWith('/') || href.startsWith('//')) return;
      const pathname = new URL(href, location.origin).pathname;
      if (pathname.includes('.') || matchRoute(pathname).name === 'NotFoundPage') return;
      event.preventDefault();
      navigate(href);
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [navigate]);

  const { Component } = route;
  const content = <Component key={route.fullPath} path={route.path} slug={route.slug} onNavigate={navigate} />;
  const spanishContent = route.name === 'SpanishContentPage';

  if (route.name === 'AdLandingPage') {
    return <LanguageProvider path={route.fullPath} onSwitch={switchLanguage}>{content}</LanguageProvider>;
  }

  return (
    <LanguageProvider path={route.fullPath} onSwitch={switchLanguage}>
      <div className={spanishContent
        ? 'flex min-h-screen w-full flex-col overflow-x-clip bg-slate-950 text-slate-100'
        : 'flex flex-col min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 overflow-x-clip w-full'}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:bg-slate-950 focus:p-3 focus:text-white">{isEsPath(route.fullPath) ? "Ir al contenido" : "Skip to main content"}</a>
        {/* Header with call-to-phone links, language toggle, and full phone number */}
        <Header
          currentPath={route.path}
          onNavigate={navigate}
        />

        {/* Main Page Area with generous smartphone bottom clearance for the sticky call bar */}
        <main id="main-content" className={spanishContent ? "flex-1 pb-24 lg:pb-0" : "flex-1 pb-24 sm:pb-28 lg:pb-0 w-full"}>
          {content}
        </main>

        {/* Footer */}
        <Footer onNavigate={navigate} />

        {/* Sticky Mobile Tap-To-Call Bottom Bar */}
        <MobileCallBar />
      </div>
    </LanguageProvider>
  );
}
