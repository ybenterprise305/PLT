import { useLanguage } from '../context/LanguageContext';
import { completedWorkLinks, WORK_PATH } from '../data/completedWork';
import { LocalizedA } from './LocalizedA';

export function CompletedWorkLink({ topic }: { topic?: string }) {
  const { isSpanish } = useLanguage();
  const example = topic && completedWorkLinks[topic];
  if (topic && !example) return null;
  return (
    <LocalizedA href={WORK_PATH + (example ? '#' + example : '')}
      className="inline-flex min-h-11 items-center font-semibold text-amber-300 underline underline-offset-4 hover:text-amber-200">
      {isSpanish ? 'Conozca nuestro trabajo de cerrajería' : 'Explore our locksmith work'}
    </LocalizedA>
  );
}
