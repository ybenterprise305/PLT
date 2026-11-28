import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ChevronDown, Menu, Phone, X } from 'lucide-react';
import { PHONE, TEL } from '../config/business';
import { useLanguage } from '../context/LanguageContext';
import { trackPhoneClick } from '../utils/analytics';
import { LanguageToggle } from './LanguageToggle';
import { LocalizedA } from './LocalizedA';
import { Logo } from './Logo';

const navigation = [
  ['/service-areas', 'Service areas', 'Cobertura'],
  ['/completed-work', 'Our work', 'Trabajos'],
  ['/contact', 'Contact', 'Contacto'],
] as const;

const services = [
  ['/services', 'All services', 'Todos los servicios'],
  ['/services/automotive-locksmith', 'Automotive', 'Automotriz'],
  ['/services/residential-locksmith', 'Residential', 'Residencial'],
  ['/services/commercial-locksmith', 'Commercial', 'Comercial'],
  ['/services/emergency-locksmith-service', 'Emergency', 'Emergencias'],
] as const;

export function Header({ currentPath }: { currentPath: string }) {
  const { isSpanish } = useLanguage();
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLDialogElement>(null);
  const servicesRef = useRef<HTMLDetailsElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const restoreFocus = useRef(false);
  const [drawerTop, setDrawerTop] = useState(68);
  const label = isSpanish ? 'Navegación principal' : 'Main navigation';

  function dismiss(restore = false) {
    restoreFocus.current = restore;
    setOpen(false);
  }

  useEffect(() => {
    setOpen(false);
    servicesRef.current?.removeAttribute('open');
  }, [currentPath]);

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
          <Logo size="md" compactHeader />
        </LocalizedA>
        <nav className="plt-desktop-nav" aria-label={label}>
          <details ref={servicesRef} className="plt-services-disclosure" onKeyDown={event => {
            if (event.key === 'Escape' && event.currentTarget.open) {
              event.currentTarget.open = false;
              event.currentTarget.querySelector('summary')?.focus();
            }
          }} onBlur={event => {
            if (!event.currentTarget.contains(event.relatedTarget)) event.currentTarget.open = false;
          }}>
            <summary>{isSpanish ? 'Servicios' : 'Services'} <ChevronDown size={15} aria-hidden="true" /></summary>
            <ul>{services.map(([href, en, es]) => <li key={href}><LocalizedA href={href}>{isSpanish ? es : en}</LocalizedA></li>)}</ul>
          </details>
          {links(false)}
        </nav>
        <div className="plt-header-actions">
          <LanguageToggle variant="compact" className="plt-languages" />
          <LocalizedA href={TEL} className="plt-header-phone"
            aria-label={isSpanish ? 'Llamar al ' + PHONE : 'Call ' + PHONE}
            onClick={() => track(window.matchMedia('(min-width: 64rem)').matches ? 'header_main_btn' : 'header_mobile_top_btn')}>
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
          <nav aria-label={label} className="plt-drawer-nav">
            <section>
              <h3 className="plt-label">{isSpanish ? 'Servicios' : 'Services'}</h3>
              <div>{services.map(([href, en, es]) => <LocalizedA key={href} href={href} onClick={() => dismiss()}>{isSpanish ? es : en}</LocalizedA>)}</div>
            </section>
            <section>
              <h3 className="plt-label">{isSpanish ? 'Cobertura y contacto' : 'Coverage and contact'}</h3>
              <div>{links(true)}</div>
            </section>
          </nav>
          <LocalizedA href={TEL} className="plt-cta mt-5" onClick={() => track('header_drawer_call_btn')}>
            <Phone size={17} aria-hidden="true" /> {isSpanish ? 'Llamar al' : 'Call'} {PHONE}
          </LocalizedA>
        </dialog>, document.body)}
    </header>
  );
}
