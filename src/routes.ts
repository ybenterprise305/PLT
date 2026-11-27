import type { ComponentType } from 'react';
import { stripLocale } from './utils/locale';
import { pathKey } from './utils/paths';
import { clients } from './generated/routeData';

export interface RouteProps {
  path: string;
  slug: string;
  onNavigate: (path: string) => void;
}

const pages = import.meta.glob<Record<string, ComponentType<RouteProps>>>([
  './pages/*Page.tsx',
  '!./pages/AdLandingHubPage.tsx',
]);

export function matchRoute(pathname: string) {
  const fullPath = pathKey(pathname);
  const path = stripLocale(fullPath);
  const [name, slug] = Object.hasOwn(clients, fullPath) ? clients[fullPath] : ['NotFoundPage', ''];
  return { name, fullPath, path, slug };
}

export async function loadRoute(pathname: string) {
  const match = matchRoute(pathname);
  const file = `./pages/${match.name}.tsx`;
  const module = await pages[file]();
  return {
    ...match,
    moduleId: `src/${file.slice(2)}`,
    Component: module[match.name],
  };
}

export type LoadedRoute = Awaited<ReturnType<typeof loadRoute>>;
