const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      VALID_EMAIL: "paiva.721@gmail.com",
      VALID_PASSWORD: "123412",
    }
  },
});
