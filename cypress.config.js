const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    //baseUrl: '', // seta a config de url que será testada -> "cy.visit('/')"
    testIsolation: false // não vai limpar o estado da tela após cada IT
  },
});
