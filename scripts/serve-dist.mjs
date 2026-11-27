// Serve the pre-rendered output for browser regression tests.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const dist = path.resolve('dist');
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.avif': 'image/avif', '.woff2': 'font/woff2', '.json': 'application/json', '.webmanifest': 'application/manifest+json', '.xml': 'application/xml', '.txt': 'text/plain' };

http.createServer((req, res) => {
  let urlPath;
  try {
    urlPath = decodeURIComponent(new URL(req.url, 'http://local').pathname);
  } catch {
    res.writeHead(400).end();
    return;
  }
  const candidates = [urlPath, path.join(urlPath, 'index.html')];
  for (const c of candidates) {
    const file = path.join(dist, c);
    if (file.startsWith(dist + path.sep) && fs.existsSync(file) && fs.statSync(file).isFile()) {
      res.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream' });
      return fs.createReadStream(file).pipe(res);
    }
  }
  res.writeHead(404, { 'Content-Type': types['.html'] });
  fs.createReadStream(path.join(dist, '404.html')).pipe(res);
}).listen(Number(process.env.PORT || 4173), '127.0.0.1');
