describe('Main Page User Flow', () => {
  beforeEach(() => {
    cy.intercept('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=BsMhAbdp1Yr9AvsW1w7Iu8RUHTavOe32', {fixture: 'main-page-response.json'})
      .visit('http://localhost:3000')
  });

  it('should be true', () => {
    expect(true).to.equal(true)
  });
});