import React, { createContext, useContext, useEffect, ReactNode } from 'react';
import { isEsPath } from '../utils/locale';

export type Language = 'en' | 'es';

export interface Translations {
  [key: string]: {
    en: string;
    es: string;
  };
}

export const TRANSLATIONS: Translations = {
  // Navigation & Header
  'nav.home': { en: 'Home', es: 'Inicio' },
  'nav.services': { en: 'Services', es: 'Servicios' },
  'nav.serviceAreas': { en: 'Service Areas', es: 'Áreas de Servicio' },
  'nav.contact': { en: 'Contact', es: 'Contacto' },
  'nav.whyChooseUs': { en: 'Why Choose Us', es: 'Por Qué Elegirnos' },
  'nav.faq': { en: 'FAQ', es: 'Preguntas Frecuentes' },
  'nav.blog': { en: 'Blog & Articles', es: 'Artículos (en inglés)' },
  'nav.tips': { en: 'Locksmith Tips & Tricks', es: 'Consejos (en inglés)' },
  'nav.callNow': { en: 'Call Now', es: 'Llamar Ahora' },
  'nav.call': { en: 'Call', es: 'Llamar' },
  'nav.text': { en: 'Text', es: 'Texto' },
  'nav.textUs': { en: 'Text Us', es: 'Enviar Mensaje' },
  'header.topBanner': { 
    en: '24/7 Mobile Dispatch South Florida', 
    es: 'Despacho Móvil 24/7 en el Sur de la Florida' 
  },
  'header.serving': { 
    en: 'Broward · Miami-Dade · Palm Beach', 
    es: 'Broward · Miami-Dade · Palm Beach' 
  },
  'header.phoneLabel': {
    en: 'Call Now: (754) 261-6528',
    es: 'Llamar Ahora: (754) 261-6528'
  },
  'header.allServices': {
    en: 'All Services',
    es: 'Todos los Servicios'
  },
  'header.viewAll': {
    en: 'view all',
    es: 'ver todos'
  },
  'header.counties': {
    en: 'South Florida Counties',
    es: 'Condados del Sur de la Florida'
  },
  'header.viewDirectory': {
    en: 'view directory',
    es: 'ver directorio'
  },

  // Mobile Bottom Bar
  'bar.callNow': { en: 'CALL NOW', es: 'LLAMAR AHORA' },
  'bar.text': { en: 'TEXT', es: 'TEXTO' },
  'bar.available': { en: '24/7 Mobile Dispatch', es: 'Cerrajería Móvil 24/7' },
  'bar.weComeToYou': { en: 'We Come to You', es: 'Vamos a Donde Estés' },

  // Hero Section
  'hero.tag': { 
    en: '24/7 Mobile Locksmith Service — We Come to You', 
    es: 'Cerrajería Móvil 24/7 — Vamos Directamente a Donde Estés' 
  },
  'hero.title': { 
    en: '24/7 Mobile Locksmith Services in South Florida', 
    es: 'Servicios de Cerrajería Móvil 24/7 en el Sur de la Florida' 
  },
  'hero.subtitle': { 
    en: 'Locked out of your car, home, or business? Pro Locksmith Tech provides professional mobile locksmith services at your location across Broward, Miami-Dade, and Palm Beach counties.', 
    es: '¿Se quedó afuera de su auto, casa o negocio? Pro Locksmith Tech le brinda servicios profesionales de cerrajería móvil directamente en su ubicación en Broward, Miami-Dade y Palm Beach.' 
  },
  'hero.ctaCall': { 
    en: 'CALL NOW: (754) 261-6528', 
    es: 'LLAMAR AHORA: (754) 261-6528' 
  },
  'hero.ctaText': { 
    en: 'Text Service Location', 
    es: 'Enviar Ubicación por Texto' 
  },
  'hero.badge1': { en: '24/7 Emergency Service', es: 'Servicio de Emergencia 24/7' },
  'hero.badge2': { en: 'Mobile Service — We Come to You', es: 'Servicio Móvil — Vamos a su Ubicación' },
  'hero.badge3': { en: 'Same Day Services', es: 'Servicio el Mismo Día' },
  'hero.badge4': { en: 'Residential Locksmith', es: 'Cerrajería Residencial' },
  'hero.badge5': { en: 'Automotive Locksmith', es: 'Cerrajería Automotriz' },
  'hero.badge6': { en: 'Commercial Locksmith', es: 'Cerrajería Comercial' },

  // Mobile Locksmith - We Come to You Section
  'mobileSec.badge': { en: '100% Mobile Service', es: 'Servicio 100% Móvil' },
  'mobileSec.title': { 
    en: 'Mobile Locksmith Service — We Come to You', 
    es: 'Cerrajería Móvil — Vamos Directamente a Donde Estés' 
  },
  'mobileSec.desc1': { 
    en: 'Pro Locksmith Tech operates as an on-site mobile locksmith service throughout South Florida. We do not operate a customer-facing physical storefront because emergencies happen wherever you are.', 
    es: 'Pro Locksmith Tech opera como un servicio de cerrajería móvil a domicilio en todo el Sur de la Florida. No tenemos una tienda física porque las emergencias ocurren donde usted se encuentre.' 
  },
  'mobileSec.desc2': { 
    en: 'Our technicians travel in fully equipped mobile workshop vans stocked with computer-guided key cutters, laser transponder programmers, and commercial-grade deadbolts. Whether you are in a shopping plaza parking lot, driveway, condominium, or corporate office, professional assistance arrives at your exact location.', 
    es: 'Nuestros técnicos se desplazan en camionetas taller completamente equipadas con cortadoras de llaves computarizadas, programadores de controles/transponders y cerraduras de alta seguridad. Ya sea que esté en un estacionamiento, su casa, condominio u oficina, llegamos a su ubicación exacta.' 
  },
  'mobileSec.bullet1': { 
    en: 'No tow truck needed — car keys cut and programmed on the spot', 
    es: 'Sin necesidad de grúa — llaves de auto cortadas y programadas en el lugar' 
  },
  'mobileSec.bullet2': { 
    en: 'Door locks rekeyed and replaced at your residence or business', 
    es: 'Cerraduras cambiadas o con combinación nueva (rekey) en su casa o negocio' 
  },
  'mobileSec.bullet3': { 
    en: 'Direct dispatch across Broward, Miami-Dade, and Palm Beach', 
    es: 'Despacho directo en los condados de Broward, Miami-Dade y Palm Beach' 
  },

  // Services Section
  'services.badge': { en: 'Specialized Capabilities', es: 'Especialidades de Cerrajería' },
  'services.title': { en: 'Locksmith Services', es: 'Nuestros Servicios de Cerrajería' },
  'services.subtitle': { 
    en: 'Professional mobile locksmith services categorized for quick scanning. We provide on-site solutions for vehicles, residences, and commercial facilities.', 
    es: 'Servicios profesionales de cerrajería móvil organizados para su comodidad. Brindamos soluciones en el sitio para vehículos, residencias y comercios.' 
  },
  'services.autoTitle': { en: 'AUTOMOTIVE LOCKSMITH', es: 'CERRAJERÍA AUTOMOTRIZ' },
  'services.autoDesc': { 
    en: 'Emergency vehicle unlocks, replacement keys, transponder and key fob programming on-site.', 
    es: 'Apertura de autos cerrados, llaves de repuesto, programación de chips y controles remotos.' 
  },
  'services.resTitle': { en: 'RESIDENTIAL LOCKSMITH', es: 'CERRAJERÍA RESIDENCIAL' },
  'services.resDesc': { 
    en: 'Complete home lock rekeying, lock replacement, deadbolt installations, and smart locks.', 
    es: 'Cambio de combinación (rekey), reemplazo de cerraduras, cerrojos de seguridad y cerraduras inteligentes.' 
  },
  'services.comTitle': { en: 'COMMERCIAL LOCKSMITH', es: 'CERRAJERÍA COMERCIAL' },
  'services.comDesc': { 
    en: 'Business security hardware, storefront mortise locks, master key systems, and panic exit bars.', 
    es: 'Seguridad para empresas, cerraduras de embutir, sistemas de llave maestra y barras antipánico.' 
  },
  'services.emTitle': { en: 'EMERGENCY LOCKSMITH', es: 'CERRAJERÍA DE EMERGENCIA' },
  'services.emDesc': { 
    en: '24/7 fast mobile dispatch for urgent lockouts, broken key extractions, and lock changes.', 
    es: 'Despacho móvil rápido las 24 horas para aperturas de urgencia, llaves rotas y cambios de cerradura.' 
  },

  // Why Choose Us
  'why.badge': { en: 'Reliable & Dependable', es: 'Confiable y Profesional' },
  'why.title': { en: 'Why Choose Pro Locksmith Tech', es: 'Por Qué Elegir a Pro Locksmith Tech' },
  'why.subtitle': { 
    en: 'When you call for locksmith assistance, you need a responsive, professional mobile team that respects your time and property.', 
    es: 'Cuando necesita un cerrajero, necesita un equipo móvil confiable, puntual y respetuoso de su tiempo y propiedad.' 
  },

  // How It Works
  'how.badge': { en: 'Simple 3-Step Process', es: 'Proceso Sencillo de 3 Pasos' },
  'how.title': { en: 'How It Works', es: 'Cómo Funciona' },
  'how.subtitle': { 
    en: 'Getting mobile locksmith service in South Florida is straightforward. Here is what to expect when you contact us:', 
    es: 'Recibir servicio de cerrajería móvil en el Sur de la Florida es muy fácil. Este es el proceso:' 
  },
  'how.step1Title': { en: '1. CALL FOR IMMEDIATE DISPATCH', es: '1. LLAME PARA DESPACHO INMEDIATO' },
  'how.step1Desc': { 
    en: 'Call our dispatch line at +1 754-261-6528 or send a text.', 
    es: 'Llame a nuestra línea de despacho al +1 754-261-6528 o envíe un texto.' 
  },
  'how.step2Title': { en: '2. TELL US YOUR LOCATION & SERVICE NEEDED', es: '2. INDÍQUENOS SU UBICACIÓN Y SERVICIO' },
  'how.step2Desc': { 
    en: 'Share your address or intersection, whether you are locked out, need replacement car keys, or want locks rekeyed.', 
    es: 'Comparta su dirección o cruce de calles, si se quedó afuera, si necesita llaves para su auto o cambiar la combinación de sus cerraduras.' 
  },
  'how.step3Title': { en: '3. A MOBILE LOCKSMITH COMES TO YOU', es: '3. UN CERRAJERO MÓVIL LLEGA A USTED' },
  'how.step3Desc': { 
    en: 'An equipped mobile workshop van arrives directly at your vehicle, home, or business to complete the service on-site.', 
    es: 'Una unidad móvil equipada llega directamente a su auto, casa o negocio para realizar el trabajo en el acto.' 
  },

  // Service Areas
  'areas.badge': { en: 'Tri-County Mobile Dispatch', es: 'Despacho en 3 Condados' },
  'areas.title': { en: 'South Florida Service Areas', es: 'Áreas de Cobertura en el Sur de la Florida' },
  'areas.subtitle': { 
    en: 'We travel to your location across Broward County, Miami-Dade County, and Palm Beach County. Select any city below to explore local service coverage.', 
    es: 'Viajamos a su ubicación en los condados de Broward, Miami-Dade y Palm Beach. Seleccione cualquier ciudad para ver la cobertura local.' 
  },

  // FAQ
  'faq.badge': { en: 'Helpful Answers', es: 'Respuestas Claras' },
  'faq.title': { en: 'Frequently Asked Questions', es: 'Preguntas Frecuentes' },
  'faq.subtitle': { 
    en: 'Clear, factual answers about our South Florida mobile locksmith services.', 
    es: 'Respuestas claras y directas sobre nuestros servicios de cerrajería móvil en el Sur de la Florida.' 
  },

  // Final CTA
  'final.title': { en: 'Need a Locksmith Right Now?', es: '¿Necesita un Cerrajero Ahora Mismo?' },
  'final.subtitle': { 
    en: 'Call Pro Locksmith Tech for fast, professional mobile locksmith service in South Florida. We come directly to you 24/7.', 
    es: 'Llame a Pro Locksmith Tech para servicio de cerrajería móvil rápido y profesional en el Sur de la Florida. Vamos directamente a donde esté las 24 horas.' 
  },
  'final.callBtn': { en: 'CALL NOW: (754) 261-6528', es: 'LLAMAR AHORA: (754) 261-6528' },

  // Footer
  'footer.about': { 
    en: 'Pro Locksmith Tech is a 24/7 mobile locksmith service. We do not operate a customer-facing physical storefront — we bring fully equipped mobile workshop vans directly to your vehicle, home, or business across Broward, Miami-Dade, and Palm Beach counties.', 
    es: 'Pro Locksmith Tech es un servicio de cerrajería móvil 24/7. No operamos una tienda física abierta al público: llevamos camionetas taller completamente equipadas directamente a su vehículo, hogar o negocio en los condados de Broward, Miami-Dade y Palm Beach.' 
  },
  'footer.availableHours': { 
    en: 'Available 24 Hours / 7 Days a Week', 
    es: 'Disponible las 24 Horas / 7 Días a la Semana' 
  },
  'footer.servingNotice': { 
    en: 'Serving South Florida (Broward · Miami-Dade · Palm Beach)', 
    es: 'Atendiendo el Sur de la Florida (Broward · Miami-Dade · Palm Beach)' 
  },
  'footer.rights': { 
    en: 'All rights reserved. 24/7 Mobile Locksmith in South Florida.', 
    es: 'Todos los derechos reservados. Cerrajería Móvil 24/7 en el Sur de la Florida.' 
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string, fallback?: string) => string;
  isSpanish: boolean;
  /** Current address, e.g. /es/services */
  path: string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
  /** Current address. The language comes from it: /es/... is Spanish, everything else English. */
  path: string;
  /** Called when the visitor picks the other language; the app moves to the matching address. */
  onSwitch: (lang: Language) => void;
}

export function LanguageProvider({ children, path, onSwitch }: LanguageProviderProps) {
  const language: Language = isEsPath(path) ? 'es' : 'en';

  const setLanguage = (lang: Language) => {
    if (lang !== language) onSwitch(lang);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
    }
  }, [language]);

  const t = (key: string, fallback?: string): string => {
    const entry = TRANSLATIONS[key];
    if (entry && entry[language]) {
      return entry[language];
    }
    return fallback || key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t,
        isSpanish: language === 'es',
        path
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
