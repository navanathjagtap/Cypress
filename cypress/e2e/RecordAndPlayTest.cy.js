describe('Record and Play Suite', () => {
  // it('Test1', () => {
  //   /* ==== Generated with Cypress Studio ==== */
  //   cy.visit('https://www.youtube.com/');
  //   // cy.log("navnath-------------------")
  //   // cy.get('#search-input > #search').clear();
  //   // cy.get('#search-input > #search').type('@TechNavnath{enter}');
  //   // cy.get(':nth-child(1) > #content-section > #info-section > #main-link > #info').click();
  //   // cy.log("end-------------------")
  //   /* ==== End Cypress Studio ==== */
  // })

  it.skip('Test2', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://www.youtube.com/');
    cy.log("navnath-------------------    end");
    
    /* ==== End Cypress Studio ==== */
  })


  it('Test3', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://navanathjagtap.github.io/automation/');

    cy.get("section[id='welcome'] h1").then((element)=>{
      
      expect(element.text()).to.equal("Automation Testing");
    })

    
    cy.xpath("//h1//b[contains(text(),'Automation Testing')]").then((element)=>{
      
      expect(element.text()).to.equal("Automation Testing");
    })


      cy.get("section[id='welcome'] h1").should("have.text","Automation Testing");
      cy.get("section[id='welcome'] h1").should("contain","Automation");
      cy.get("section[id='welcome'] h1").should("be.visible");

      cy.get("section[id='welcome'] h1 b").should("have.html","Automation Testing")
   
      // cy.get("section[id='welcome'] h1").should("have.html","Automation Testing")
      // .and("have.attr","value")

      // cy.get("section[id='welcome'] h1").should("have.html","Automation Testing")
      // .and("have.attr","value").and("include","Automation Testing")


      cy.get("section[id='welcome'] h1").then((element)=>{
        expect(element.text()).to.have.length(18);
    })
    
  
    /* ==== End Cypress Studio ==== */
  })

})