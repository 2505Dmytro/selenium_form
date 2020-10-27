// Open https://the-internet.herokuapp.com/login

// Please automate next test cases:
// 1. Login with valid creds (tomsmith/SuperSecretPassword!) and assert you successfully logged in
// 2. Login with invalid creds and check validation error
// 3. Logout from app and assert you successfully logged out

it('Valid data', () => {
  cy.visit('https://the-internet.herokuapp.com/login')
  cy.get('[name="username"]').type('tomsmith')
  cy.get('[name="password"]').type('SuperSecretPassword!')
  cy.get('[type="submit"]').click()
  cy.get('.flash.success').contains('You logged into a secure area!').should('exist')
})

it('Invalid data', () => {
  cy.visit('https://the-internet.herokuapp.com/login')
  cy.get('[name="username"]').type('tomsmith1')
  cy.get('[name="password"]').type('SuperSecretPassword!!')
  cy.get('[type="submit"]').click()
  cy.get('.flash.error').contains('Your username is invalid!').should('exist')
})
it('Logout', () => {
  cy.visit('https://the-internet.herokuapp.com/login')
  cy.get('[name="username"]').type('tomsmith')
  cy.get('[name="password"]').type('SuperSecretPassword!')
  cy.get('[type="submit"]').click()
  cy.get('.button.secondary.radius').click()
  cy.get('.flash.success').contains('You logged out of the secure area!').should('exist')
});

