// Tiny static server that behaves like Cloudflare: /services -> dist/services/index.html,
// and unknown paths fall back to dist/index.html.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const dist = path.resolve('dist');
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.json': 'application/json', '.webmanifest': 'application/manifest+json', '.xml': 'application/xml', '.txt': 'text/plain' };

http.createServer((req, res) => {
  const urlPath = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  const candidates = [urlPath, path.join(urlPath, 'index.html')];
  for (const c of candidates) {
    const file = path.join(dist, c);
    if (file.startsWith(dist) && fs.existsSync(file) && fs.statSync(file).isFile()) {
      res.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream' });
      return fs.createReadStream(file).pipe(res);
    }
  }
  res.writeHead(200, { 'Content-Type': types['.html'] });
  fs.createReadStream(path.join(dist, 'index.html')).pipe(res);
}).listen(4173, () => console.log('serving dist on 4173'));
