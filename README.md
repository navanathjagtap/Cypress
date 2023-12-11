# Setting Up Cypress Framework:
## 1.Node install
C:\CypressActual>node -v
v18.16.0

## 2.Cypress Installation:
cmd-> npm install cypress --save-dev
cms-> npm run cypress:open
will get error->
add this to package .json

  "scripts": {
    "cypress:open": "cypress open"
  }

for record video : add this to into cypress.config.js
experimentalStudio: true,

## 3.Run cypress Test on different browser
 3.1 using cypress runner
 3.2 using commend prompt use chrome and any other browser
   - npx cypress run --browser edge --headed --spec ".js path" 
eg.path---> cypress\e2e\RecordAndPlayTest.cy.js

 3.3. headless browser mode:
npx cypress run --browser edge --spec ".js path"

## 4.Prevent Auto Rerun: test cypress when we chanegs something in code
add this in config.js
watchForFilechanges:false

## 5.add this to e2e.js
//disable fetch and xhr  
const app = window.top;
if (!app.document.head.querySelector("[data-hide-command-log-request]")) {
 const style = app.document.createElement("style");
 style.innerHTML =".command-name-request, .command-name-xhr { display: none }";
 style.setAttribute("data-hide-command-log-request", "");
 app.document.head.appendChild(style); 
}

//xpath
require('cypress-xpath')

//mochawesome reporting
import 'cypress-mochawesome-reporter/register'


for ide intellegens add this for suggestion in ide:
on root level folder jsconfig.json
{
    "include": ["./node_modules/cypress", "cypress/**/*.js"]
}
  

## 6.Assertion :
should('contain', 'expectedText')
should('have.length', expectedLength)
url().should('eq', 'expectedUrl')
should('have.value', 'expectedValue')
should('be.enabled')
should('be.disabled')
should('have.attr', 'attributeName', 'expectedValue')
should('be.visible')
should('have.text', 'expectedText')

## 7. XPath
step1. add install cypress -xpath plugin,using below cmd
- npm install -D cypress-xpath
step2. Add require('cypress-xpath') line in e2e.js file
setp3. start using -cy.xpath('locator')


## 8. Dropdown list
select dropdown 3 ways
index
visibal text
value

## 9. How to handle Ifrane in cypress?
Step1: install plugin - npm install -D cypress-iframe
step2 : Add import as import 'cypress-iframe'
step3: Load the frame using id or names , perform actions


## 10. for scroll use scrollltoview

## 11 Hooks ,Retry,Repeat,ReportGenaration
Hooks.
-- before and after
-- beforeEach & afterEach

## 12. Repeat and retry
Repeattest:
Cypress._.times(2,(k)+>{ test})

Retry/Rerun Test:
{ retries : count }

## 13. How to generate HTML Report
1.install below pluging
- npm i --save-dev cypress-mochawesome-reporter
2.add below lines of code in cypress,config.js file
reporter: 'cypress-mochawesome-reporter',
require('cypress-mochawesome-reporter/plugin')(on);


## 14. data driven testing using json

4.page object model design
5.for video config.js file
video: false,
