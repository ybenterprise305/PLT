import { StructuredData } from './StructuredData';
import { breadcrumbData } from '../utils/structuredData';
import { LocalizedA } from './LocalizedA';
import { useLanguage } from '../context/LanguageContext';

export function Breadcrumbs({ trail }: { trail: [string, string][] }) {
  const { isSpanish, language, t } = useLanguage();
  const items: [string, string][] = [[t('nav.home'), '/'], ...trail];
  return (
    <nav aria-label={isSpanish ? 'Ruta de navegación' : 'Breadcrumb'}>
      <StructuredData data={breadcrumbData(items, language)} />
      <ol className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
        {items.map(([name, href], index) => (
          <li key={href} className="flex items-center gap-2">
            {index > 0 && <span aria-hidden="true">/</span>}
            {index < items.length - 1
              ? <LocalizedA href={href} className="hover:text-amber-400 hover:underline">{name}</LocalizedA>
              : <span aria-current="page" className="font-semibold text-amber-400">{name}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
