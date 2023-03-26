/**
 * Prometheus metrics for Express and Node.
 */
const promBundle = require('express-prom-bundle');

/**
 * Add Prometheus client to the application, available in /metrics
 *
 * Default metrics collection is enabled
 * https://github.com/siimon/prom-client#default-metrics
 *
 * Custom metrics can be created
 * https://github.com/siimon/prom-client#custom-metrics
 *
 * @param {Application} app - Express application
 */
function addMetricsMiddleware(app) {
  app.use(
    promBundle({
      // Remove default lower buckets, add 0.5, 0.7 and 1
      buckets: [0.3, 0.5, 0.7, 1, 1.5, 10],
      includeMethod: true,
      includePath: true,
      normalizePath: getNormalizedPaths(),
      promClient: {
        collectDefaultMetrics: {
          timeout: 1000,
        },
      },
    }),
  );
}

/**
 * Aggregate statistics by path, normalizing variable parts of req.path
 * e.g. a path containing an ID, like /user/1234, becomes /user/#val
 *
 * express-prom-bundle already tries to figure out which parts of the path are
 * values or IDs
 * We can provide extra rules or override the default normalization behavior
 *
 * https://github.com/jochen-schweizer/express-prom-bundle#more-details-on-includepath-option
 */
function getNormalizedPaths() {
  return [];
}

module.exports = {
  addMetricsMiddleware,
  getNormalizedPaths,
};
