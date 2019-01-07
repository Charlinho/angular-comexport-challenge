describe('Primeira Lição', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('deve verificar se a URL esta correta', () => {
    cy.url().should('include', 'personagens');
  });

  it('deve verificar se o título esta correto', () => {
    cy.get('h2').contains('Personagens');
  });

  it('deve verificar se o card com os personagens foi renderizado', () => {
    cy.wait(3000).then(() => cy.get('co-ex-character-card').should('have.length', 7));
  });
});
