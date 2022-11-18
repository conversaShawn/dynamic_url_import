import { defineConfig } from "cypress";

export default defineConfig({
  experimentalModifyObstructiveThirdPartyCode: true,
  env: {
    AAD_USER_ONE_ORG: "YOUR_MS_USERNAME",
    AAD_PASSWORD_ONE_ORG: "YOUR_MS_PASSWORD",
  },
  retries: 2,
  e2e: {
    setupNodeEvents() {
    },
    experimentalSessionAndOrigin: true,
  },
});
