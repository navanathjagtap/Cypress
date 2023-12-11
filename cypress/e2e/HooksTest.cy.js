describe('Hooks Test Suite',()=>{

    before('Running Before All Test', ()=>{
        cy.log('Running before all test!')
    })

    after('Running After All Test', ()=>{
        cy.log('Running after all test!')
    })

    beforeEach('Running Before Each Test',()=>{
        cy.log('Running before each test!')

        cy.visit('https://navanathjagtap.github.io/automation/')
    })

    afterEach('Running After Each Test',()=>{
        cy.log('Running after each test!')
    })



    it('Hooks Test1',()=>{
      cy.log("test1 --------------")
    })

    it('Hooks Test2',()=>{
        cy.log("test2 --------------")
     
    })

    it('Hooks Test3',{retries:2},()=>{
        cy.log("Repeats failures --------------")
        cy.get("section[id='welcome'] h1").then((element)=>{
  
            expect(element.text()).to.equal("Automation Testing");
          })
     
    })

    Cypress._.times(3, (k)=>{

        it('Hooks Test4',()=>{
            cy.log("Repeats failures --------------")
            cy.get("section[id='welcome'] h1").then((element)=>{
      
                expect(element.text()).to.equal("Automation Testing");
              })
         
        })
    })

})