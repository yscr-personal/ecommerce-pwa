const instana = require('@instana/collector');

/**
 * Initialize the Instana collector.
 *
 * ATTENTION:
 * All other require statements must be done after the collector is initialized.
 *
 * https://www.ibm.com/docs/de/obi/current?topic=nodejs-collector-installation
 */
function setupMonitoring() {
  if (process.env.APP_ENV === 'production') {
    instana();
  }
}

module.exports = {
  setupMonitoring,
};
