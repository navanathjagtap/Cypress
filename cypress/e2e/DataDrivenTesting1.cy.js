describe('Data Driven Test Suite',()=>{

    let testData;

    before('Run Before All Test',()=>{
        cy.fixture('datadriventesting1.json').then((jsonData)=>{
            testData = jsonData;
        })
    })

    it('Data Driven Test1',()=>{

        cy.visit('https://google.com/');

        cy.log(testData.skill1);
        cy.log(testData.channel);
    })

})