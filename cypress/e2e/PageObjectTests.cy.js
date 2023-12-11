import homePage from '../e2e/pages/HomePage'
import playlistPage from '../e2e/pages/PlaylistPage'

describe('Page Object Test Suite', ()=>{

    it('Page Object Test1', ()=>{

        // Open youtube
        homePage.visit();

        //search in youtube
        homePage.searchInYoutube();

        //Go to playlist
        playlistPage.clickOnChannel();

    })

})