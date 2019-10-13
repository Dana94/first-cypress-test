describe('My First Test', function() {
    it('Visits the Kitchen Sink', function() {
      cy.visit('https://example.cypress.io') // visit this url

      cy.contains('type').click() // look if the work 'type' exists, then click on it

      cy.url().should('include', '/commands/actions') // check if the page you clicked to is correct, assert it includes the '/commands/actions'

      cy.get('.action-email') // get input with this class
      .type('fake@email.com') // enter this string
      .should('have.value', 'fake@email.com') // check if input value is the same as the email entered
    })
  })
