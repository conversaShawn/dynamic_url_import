# Repro `cy.origin` failure to dynamically import URL when AUT is cross origin

Lines 4-9 of `origin.cy.ts` work as expected when hardcoded, however lines 10-17 throws intermittent `Cannot set property message of which has only a getter` error

Note: 

Install and run
```
yarn
yarn cy:open
```