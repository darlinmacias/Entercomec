import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));

const mime = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif'
};

createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);
    let pathname = decodeURIComponent(url.pathname);

    // Evita que una ruta termine con una barra innecesaria
    if (pathname.length > 1 && pathname.endsWith('/')) {
      pathname = pathname.slice(0, -1);
    }

    let file;

if (pathname.startsWith('/src/')) {
  file = join(root, pathname);
} else {
  file = join(root, 'public', pathname);
}

    // Si la ruta corresponde a una carpeta, intenta index.html
    try {
      const info = await stat(file);

      if (info.isDirectory()) {
        file = join(file, 'index.html');
      }
    } catch {
      // El archivo/ruta no existe todavía.
    }

    // Intentar servir el archivo solicitado
    try {
      const body = await readFile(file);

      res.writeHead(200, {
        'Content-Type': mime[extname(file)] || 'application/octet-stream'
      });

      return res.end(body);
    } catch {
      // Si no existe y es una ruta de la aplicación,
      // devolvemos index.html para que app.js maneje la navegación.
      const isAppRoute =
        !extname(pathname) &&
        (
          pathname === '/' ||
          pathname.startsWith('/producto/') ||
          pathname.startsWith('/productos') ||
          pathname.startsWith('/categoria/') ||
          pathname.startsWith('/marca/') ||
          pathname.startsWith('/ofertas') ||
          pathname.startsWith('/nuevos')
        );

      if (isAppRoute) {
        const body = await readFile(join(root, 'index.html'));

        res.writeHead(200, {
          'Content-Type': 'text/html; charset=utf-8'
        });

        return res.end(body);
      }

      res.writeHead(404, {
        'Content-Type': 'text/plain; charset=utf-8'
      });

      return res.end('Not found');
    }

  } catch (error) {
    console.error(error);

    res.writeHead(500, {
      'Content-Type': 'text/plain; charset=utf-8'
    });

    res.end('Internal Server Error');
  }

}).listen(process.env.PORT || 5173, () => {
  console.log('ENTERCOMEC at http://localhost:5173');
});
