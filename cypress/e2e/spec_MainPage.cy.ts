describe('MainPage Tests', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://www.rijksmuseum.nl/api/en/collection?key=Ac7mP6Ke&technique=painting&ps=25',
      { fixture: 'records.json' }
    ).as('getRecords')
    cy.visit('http://localhost:3000/')
  })

  it('should display the welcome message', () => {
    cy.contains('Welcome to Art Collector').should('be.visible')
  })

  it('should display the video and welcome message', () => {
    cy.get('.mainPageWrapper').should('exist');
    cy.get('.contentWrapper h1').should('contain', 'Welcome to Art Collector');
  });

  it('should have a looping video playing', () => {
    cy.get('#backgroundVideo').should('have.prop', 'loop', true)
    cy.get('#backgroundVideo').should('have.prop', 'muted', true)
    cy.get('#backgroundVideo').should('have.prop', 'autoplay', true)
  })
})
