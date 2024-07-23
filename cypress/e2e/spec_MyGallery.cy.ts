describe('My Gallery Tests', () => {
    beforeEach(() => {
      cy.intercept('GET', 'https://www.rijksmuseum.nl/api/en/collection?key=Ac7mP6Ke&technique=painting&ps=25',
        { fixture: 'records.json' }
      ).as('getRecords')
      cy.visit('http://localhost:3000/')
    })

    it('should navigate from the Main Page to My Gallery when the My Gallery link is clicked', () => {
        cy.get('.MyGallery-button').click()
        cy.url().should('include', '/MyGallery')
    })

    it('should navigate from the Main Galley to My Gallery when the My Gallery link is clicked', () => {
        cy.visit('http://localhost:3000/MainGallery')
        cy.get('.MyGallery-button').click()
        cy.url().should('include', '/MyGallery')
    })

    it('should only display a navigation bar with logo and two links, a title, a message, and a footer if the user has not favorited any art', () => {
        cy.visit('http://localhost:3000/MyGallery')
        cy.get('.Header').should('exist')
        cy.get('.main-logo').should('exist')
        cy.get('.Links').should('exist')
        cy.get('.MainGallery-button').should('contain', 'Main Gallery')
        cy.get('.MyGallery-button').should('contain', 'My Gallery')
        cy.get('.MyGallery-Title').should('contain', 'My Gallery')
        // add in test for No favorites yet!
        cy.get('.footer').should('exist')
    })

    it('should display an art card in My Gallery when a user favorites it from the Main Gallery', () => {
        cy.visit('http://localhost:3000/MainGallery')
        cy.get(':nth-child(1) > .art-card').should('exist')
        cy.get(':nth-child(2) > .art-card').should('exist')
        cy.get(':nth-child(2) > .art-card > .favorite-button').click()
        cy.get('.MyGallery-button').click()
        cy.url().should('include', '/MyGallery')
        cy.get('.favorite-art-card').should('exist')
        cy.get('h3').should('contain', 'Diorama of Government Square in Paramaribo, Gerrit Schouten, 1812')
        cy.get('.favorite-art-card > img').should('exist')
    })

    it('should continue to display the favorited art card in My Gallery when a user navigates away from My Gallery and returns to My Gallery later  ', () => {
        cy.visit('http://localhost:3000/MainGallery')
        cy.get(':nth-child(2) > .art-card > .favorite-button').click()
        cy.get('.MyGallery-button').click()
        cy.url().should('include', '/MyGallery')
        cy.get('.favorite-art-card').should('exist')
        cy.get('h3').should('contain', 'Diorama of Government Square in Paramaribo, Gerrit Schouten, 1812')
        cy.get('.favorite-art-card > img').should('exist')
        cy.get('.MainGallery-button').click()
        cy.url().should('include', '/MainGallery')
        cy.get('.MyGallery-button').click()
        cy.url().should('include', '/MyGallery')
        cy.get('.favorite-art-card').should('exist')
        cy.get('h3').should('contain', 'Diorama of Government Square in Paramaribo, Gerrit Schouten, 1812')
        cy.get('.favorite-art-card > img').should('exist')
    })
})