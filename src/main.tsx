import {StrictMode} from 'react';
import {createRoot, hydrateRoot} from 'react-dom/client';
import App from './App.tsx';
import { loadRoute } from './routes';
import '@fontsource-variable/plus-jakarta-sans/wght.css';
import '@fontsource-variable/space-grotesk/wght.css';
import './index.css';
import {initAnalytics} from './utils/analytics';

initAnalytics();

const container = document.getElementById('root')!;
loadRoute(window.location.pathname).then(initialRoute => {
  const app = (
    <StrictMode>
      <App initialRoute={initialRoute} />
    </StrictMode>
  );

  // Attach to generated HTML. The development shell renders in the browser.
  if (container.hasChildNodes()) {
    hydrateRoot(container, app);
  } else {
    createRoot(container).render(app);
  }
}).catch(error => {
  // Leave the full pre-rendered document and native links usable on load failure.
  console.error('Unable to activate page navigation', error);
});
