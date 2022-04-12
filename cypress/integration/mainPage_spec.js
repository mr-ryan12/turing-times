describe('Main Page User Flow', () => {
  beforeEach(() => {
    cy.intercept('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=BsMhAbdp1Yr9AvsW1w7Iu8RUHTavOe32', {fixture: 'main-page-response.json'}).as('response')
      .visit('http://localhost:3000')
      .wait('@response')
  });

  it('Should have a heading', () => {
    cy.get('h1')
      .should('have.text', 'Turing Times')
  });

  it('Should have a form', () => {
    cy.get('form')
      .should('exist')
  });

  it('Should have article cards', () => {
    cy.get('.article-card')
      .should('have.length', 2)
  });

  it('Should have a submit button', () => {
    cy.get('.submit-button')
      .should('exist')
  });

  it('Should have a dropdown menu', () => {
    cy.get('select')
      .should('exist')
  });

  it('Should have a message to make a selection', () => {
    cy.get('label[for="dropdown-menu"]')
      .should('have.text', 'Please Make A Selection:')
  });
});