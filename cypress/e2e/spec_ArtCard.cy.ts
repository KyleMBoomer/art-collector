describe('Art Card Tests', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://www.rijksmuseum.nl/api/en/collection?key=Ac7mP6Ke&technique=brush&ps=30', {
      statusCode: 200,
      fixture: 'records.json'
    }
    )
    cy.visit('http://localhost:3000/')
  });

  it('should pass correct title to each ArtCard', () => {
    cy.visit('http://localhost:3000/MainGallery')
    cy.fixture('records.json').then((artRecords) => {
      cy.get('.main-gallery .art-card').each(($el, index) => {
        cy.wrap($el).should('contain', artRecords.artObjects[index].title)
      });
    });
  });

  it('Should contain an image', () => {
    cy.visit('http://localhost:3000/MainGallery')
    cy.get('.main-gallery .art-card img').should('exist')
  });

  it('Should contain an image with a valid url', () => {
    cy.visit('http://localhost:3000/MainGallery')
    cy.get('.main-gallery .art-card').each(($el) => {
      cy.wrap($el).find('img').should('have.attr', 'src')
    });
  });

  it('Should have an add button', () => {
    cy.visit('http://localhost:3000/MainGallery')
    cy.get('.main-gallery .art-card button').should('exist')
  });

  it('Should be able to hover over the button', () => {
    cy.visit('http://localhost:3000/MainGallery');
    cy.get('.main-gallery .art-card .favorite-button').each(($btn) => {
      cy.wrap($btn).trigger('mouseover');
      cy.wrap($btn).trigger('mouseout')
    });
  });
})