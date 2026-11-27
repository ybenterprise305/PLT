export function canonicalSitePath(path: string): string {
  const rooted = path.startsWith('/') ? path : '/' + path;
  return rooted.replace(/\/+$/, '') + '/';
}

export function pathKey(path: string): string {
  return path.replace(/\/+$/, '') || '/';
}
