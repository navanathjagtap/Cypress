const jsonData = require('../fixtures/datadriventesting2.json')

describe('Data Driven Test Suite2',()=>{

    jsonData.forEach((testData) => {

        it('Data Driven Test2',()=>{

            cy.visit('https://google.com/');
            cy.log(testData.skill1);
            cy.log(testData.channel);
    
        })
        
    });

})