import { renderToString } from 'react-dom/server';
import App from './App';
import { loadRoute } from './routes';
import { headCollector } from './components/SEOHead';
export { SITE } from './config/business';

export async function render(path: string) {
  const route = await loadRoute(path);
  headCollector.current = null;
  const html = renderToString(<App initialRoute={route} />);
  return { html, head: headCollector.current, moduleId: route.moduleId };
}
