/// <reference types='cypress' />
describe('Counter Tests', () =>{
    it('should open in browser', () => {
        cy.visit('http://localhost:3000')
        cy.get('.counterBtn').should('exist')
        cy.get('.doesnotexists').should('not.exist')
    })
})