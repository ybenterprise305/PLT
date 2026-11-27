import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Menu, Phone, X } from 'lucide-react';
import { PHONE, TEL } from '../config/business';
import { useLanguage } from '../context/LanguageContext';
import { trackPhoneClick } from '../utils/analytics';
import { LanguageToggle } from './LanguageToggle';
import { LocalizedA } from './LocalizedA';
import { Logo } from './Logo';

const navigation = [
  ['/services', 'Services', 'Servicios'],
  ['/service-areas', 'Service areas', 'Cobertura'],
  ['/completed-work', 'Our work', 'Trabajos'],
  ['/tips', 'Guides', 'Guías'],
  ['/contact', 'Contact', 'Contacto'],
] as const;

export function Header({ currentPath }: { currentPath: string }) {
  const { isSpanish } = useLanguage();
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLDialogElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const restoreFocus = useRef(false);
  const [drawerTop, setDrawerTop] = useState(68);
  const label = isSpanish ? 'Navegación principal' : 'Main navigation';

  function dismiss(restore = false) {
    restoreFocus.current = restore;
    setOpen(false);
  }

  useEffect(() => setOpen(false), [currentPath]);

  useEffect(() => {
    const drawer = drawerRef.current;
    if (!open || !drawer) return;
    const previous = document.body.style.overflow;
    const desktop = window.matchMedia('(min-width: 64rem)');
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };
    document.body.style.overflow = 'hidden';
    desktop.addEventListener('change', closeOnDesktop);
    drawer.showModal();
    return () => {
      document.body.style.overflow = previous;
      desktop.removeEventListener('change', closeOnDesktop);
      drawer.close();
      if (restoreFocus.current) toggleRef.current?.focus();
      restoreFocus.current = false;
    };
  }, [open]);

  const track = (location: string) => trackPhoneClick({ ctaLocation: location, pagePath: currentPath });
  const links = (mobile: boolean) => navigation.map(([href, en, es]) => (
    <LocalizedA key={href} href={href}
      aria-current={currentPath === href || currentPath === href + '/' ? 'page' : undefined}
      onClick={mobile ? () => dismiss() : undefined}>
      {isSpanish ? es : en}
    </LocalizedA>
  ));

  return (
    <header className="plt-header">
      <div className="plt-wrap plt-header-row">
        <LocalizedA href="/" className="plt-brand" aria-label="Pro Locksmith Tech">
          <Logo size="sm" />
        </LocalizedA>
        <nav className="plt-desktop-nav" aria-label={label}>{links(false)}</nav>
        <div className="plt-header-actions">
          <LanguageToggle variant="compact" className="plt-languages" />
          <LocalizedA href={TEL} className="plt-header-phone"
            aria-label={isSpanish ? 'Llamar al ' + PHONE : 'Call ' + PHONE}
            onClick={() => track('header_main_btn')}>
            <Phone size={17} aria-hidden="true" /><span>{PHONE}</span>
          </LocalizedA>
          <button type="button" className="plt-menu-toggle" ref={toggleRef} onClick={() => {
            setDrawerTop(Math.round(toggleRef.current?.closest('header')?.getBoundingClientRect().bottom ?? 68));
            setOpen(true);
          }} aria-expanded={open} aria-controls="mobile-site-navigation"
            aria-label={isSpanish ? 'Abrir menú' : 'Open menu'}>
            <Menu size={23} aria-hidden="true" />
          </button>
        </div>
      </div>
      {open && typeof document !== 'undefined' && createPortal(
        <dialog ref={drawerRef} className="plt-drawer" id="mobile-site-navigation" aria-labelledby="mobile-menu-title"
          style={{ top: drawerTop, maxHeight: `calc(100dvh - ${drawerTop}px)` }}
          onCancel={event => { event.preventDefault(); dismiss(true); }}>
          <div className="plt-drawer-heading">
            <h2 id="mobile-menu-title">{isSpanish ? 'Menú del sitio' : 'Site navigation'}</h2>
            <button type="button" onClick={() => dismiss(true)} aria-label={isSpanish ? 'Cerrar menú' : 'Close menu'}>
              <X size={23} aria-hidden="true" />
            </button>
          </div>
          <nav aria-label={label}>{links(true)}</nav>
          <LocalizedA href={TEL} className="plt-cta mt-5" onClick={() => track('header_drawer_call_btn')}>
            <Phone size={17} aria-hidden="true" /> {isSpanish ? 'Llamar al' : 'Call'} {PHONE}
          </LocalizedA>
        </dialog>, document.body)}
    </header>
  );
}
