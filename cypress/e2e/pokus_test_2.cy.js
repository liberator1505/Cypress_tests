/// <reference types="cypress"/>

it('Google search',()=>{

cy.visit('https://google.com')
cy.contains('Přijmout vše').click()
cy.get('#APjFqb').type('letecka historie{enter}')
//cy.contains('Hledat Googlem').click()

})