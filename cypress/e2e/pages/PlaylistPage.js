class PlaylistPage {

    elements = {
        playlistTitle : () => cy.get(':nth-child(1) > #content-section > #info-section > #main-link > #info'),
    }

    clickOnChannel() {
        this.elements.playlistTitle().click();
    }

}

module.exports = new PlaylistPage();