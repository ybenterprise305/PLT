import { useLanguage } from '../context/LanguageContext';
import { completedWorkLinks, WORK_PATH } from '../data/completedWork';
import { LocalizedA } from './LocalizedA';

export function CompletedWorkLink({ topic }: { topic?: string }) {
  const { isSpanish } = useLanguage();
  const job = topic && completedWorkLinks[topic];
  if (topic && !job) return null;
  return (
    <LocalizedA href={WORK_PATH + (job ? '#' + job : '')}
      className="inline-flex min-h-11 items-center font-semibold text-amber-300 underline underline-offset-4 hover:text-amber-200">
      {isSpanish ? 'Ver trabajos realizados por nuestros técnicos' : 'See work completed by our technicians'}
    </LocalizedA>
  );
}
