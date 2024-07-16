const { defineConfig } = require('cypress')

module.exports = defineConfig({
  defaultCommandTimeout: 75000,
  pageLoadTimeout: 70000,
  fixturesFolder: 'cypress/data-files',
  requestTimeout: 10000,
  responseTimeout: 10000,
  video: false,
  chromeWebSecurity: false,
  viewportWidth: 1700,
  viewportHeight: 1200,
  trashAssetsBeforeRuns: true,
  experimentalSessionAndOrigin: false,
  numTestsKeptInMemory: 40,
  retries: {
    runMode: 2,
  },
  env: {},
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'tests/test-output-[hash].xml',
    toConsole: true,
    attachments: true,
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.feature',
    supportFile: 'cypress/common',
  },
})
