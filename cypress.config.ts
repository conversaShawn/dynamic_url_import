import { defineConfig } from "cypress";

export default defineConfig({
  experimentalModifyObstructiveThirdPartyCode: true,
  env: {
    AAD_USER_ONE_ORG: 'autotest4@squaredup.cloud',
    AAD_PASSWORD_ONE_ORG: 'Ee3O2WaLl6Ax'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalSessionAndOrigin: true
  },
});