describe('MainPage Tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display the welcome message', () => {
    cy.contains('Welcome to Art Collector').should('be.visible')
  })

  it('should have a looping video playing', () => {
    cy.get('video').should('have.prop', 'loop', true)
    cy.get('video').should('have.prop', 'muted', true)
    cy.get('video').should('have.prop', 'autoplay', true)
  })
})
