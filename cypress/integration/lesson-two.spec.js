describe('Segunda Lição', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
    cy.get('.nav-link:last-child').click();
  });

  it('deve verificar se a URL esta correta', () => {
    cy.url().should('include', 'estatisticas');
  });

  it('deve verificar se o título esta correto', () => {
    cy.get('h2').contains('Estatísticas');
  });

  it('deve verificar se o card de filmes foi renderizado', () => {
    cy.wait(2000).then(() => cy.get('co-ex-statistic-card').should('have.length', 7));
  });
});
