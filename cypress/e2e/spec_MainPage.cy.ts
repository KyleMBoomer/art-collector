describe('Main Page Tests', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://www.rijksmuseum.nl/api/en/collection?key=Ac7mP6Ke&technique=brush&ps=25',
      { fixture: 'records.json' }
    ).as('getRecords')
    cy.visit('http://localhost:3000/')
  })

  it('should display a navigation bar with a logo and two links, a video, a welcome message, and a footer. ', () => {
    cy.get('.Header').should('exist')
    cy.get('.main-logo').should('exist')
    cy.get('.Links').should('exist')
    cy.get('.MainGallery-button').should('contain', 'Main Gallery')
    cy.get('.MyGallery-button').should('contain', 'My Gallery')
    cy.get('.mainPageWrapper').should('exist')
    cy.get('.contentWrapper h1').should('contain', 'Welcome to Art Collector')
    cy.get('.footer').should('exist')
  })

  it('should have a looping video playing', () => {
    cy.get('#backgroundVideo').should('have.prop', 'loop', true)
    cy.get('#backgroundVideo').should('have.prop', 'muted', true)
    cy.get('#backgroundVideo').should('have.prop', 'autoplay', true)
  })
})
