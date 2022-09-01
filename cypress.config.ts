import { defineConfig } from "cypress";

export default defineConfig({
  experimentalModifyObstructiveThirdPartyCode: true,
  env: {
    AAD_USER_ONE_ORG: 'YOUR_USERNAME_HERE',
    AAD_PASSWORD_ONE_ORG: 'YOUR_PASSWORD_HERE'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalSessionAndOrigin: true
  },
});