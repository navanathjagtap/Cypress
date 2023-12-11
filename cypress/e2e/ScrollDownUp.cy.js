
describe('Scroll Up Down Suite', () => {

    it('Scroll Test', () => {
  
      cy.visit('https://commons.wikimedia.org/wiki/Main_Page')

      cy.wait(5000);

      cy.contains('Participating')
        .scrollIntoView().should('be.visible').click();
   
    })
  
  })