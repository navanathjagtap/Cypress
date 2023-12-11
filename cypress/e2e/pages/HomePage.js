class HomePage {

    elements = {
        searchTextbox : () => cy.get('[name="search_query"]'),
        searchIcon : () => cy.get('#search-icon-legacy > yt-icon')
    }

    visit() {
        cy.visit('https://www.youtube.com/');
    }

    searchInYoutube() {
        this.elements.searchTextbox().type('@TechNavnath');
        this.elements.searchIcon().click();
    }

}

module.exports = new HomePage();