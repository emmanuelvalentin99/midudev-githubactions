const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      console.log(on,config)
    },
  }
})