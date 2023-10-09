

it('assertion tests', () => {


    cy.visit('https://example.cypress.io')
    cy.wait(3000)
    cy.contains('get').click()
    cy.get('#query-btn')
          .should('contain','Button')
          .and('have.class','query-btn')
          .and('be.visible')
    expect(true).to.be.true
    
    assert.equal(4, 5,'NOT EQUAL')
  })