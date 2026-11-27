import type { ResourceLink } from '../data/locksmithTipsData';
import { LocalizedA } from './LocalizedA';

export function ResourceLinks({ title, links }: { title: string; links: readonly ResourceLink[] }) {
  return (
    <nav aria-label={title} className="space-y-3">
      <h2 className="font-heading text-xl font-bold text-white">{title}</h2>
      <ul className="space-y-2">
        {links.map(([label, href]) => (
          <li key={href}><LocalizedA className="text-amber-300 underline underline-offset-4" href={href}>{label}</LocalizedA></li>
        ))}
      </ul>
    </nav>
  );
}
