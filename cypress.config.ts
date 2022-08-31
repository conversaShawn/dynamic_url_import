import { defineConfig } from "cypress";

export default defineConfig({
  experimentalModifyObstructiveThirdPartyCode: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalSessionAndOrigin: true
  },
});