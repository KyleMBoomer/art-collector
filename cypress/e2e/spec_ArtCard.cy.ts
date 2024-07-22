describe('Art Card Component', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://www.rijksmuseum.nl/api/en/collection?key=Ac7mP6Ke&technique=painting&ps=25',
      { fixture: 'records.json' }
    ).as('getRecords')
    cy.visit('http://localhost:3000/')
  })

  it('should pass correct data to each ArtCard', () => {
    cy.visit('https://localost:3000/MainGallery');
    cy.wait('@getRecords');
    cy.fixture('records.json').then((artRecords) => {
      cy.get('.main-gallery .ArtCard').each(($el, index) => {
        cy.wrap($el).should('contain', artRecords.artObjects[index].title);
      });
    })
  })
})