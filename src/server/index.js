/**
 * Custom server with Next.js + Express.
 *
 * From the official example:
 * https://github.com/vercel/next.js/blob/canary/examples/custom-server-express
 */

const { setupMonitoring } = require('./monitoring');
setupMonitoring(); // Must come first

const express = require('express');
const next = require('next');

const { addMetricsMiddleware } = require('./metrics');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';

const nextApp = next({ dev });
const nextHandle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const server = express();

  addMetricsMiddleware(server);

  server.all('*', (req, res) => nextHandle(req, res));

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
