const elsHome = require('../elements/elsHome');

const intHome = {
  visitHome: () => cy.visit('http://automationpractice.pl/index.php?controller=authentication&back=my-account'),
  clickLoginButton: () => elsHome.loginButton().should('be.visible').click(),
  fillEmail: (email) => elsHome.emailField().should('be.visible').type(email),
  fillPassword: (password) => elsHome.passwordField().should('be.visible').type(password),
  checkErrorMessage: (message) => elsHome.errorMessage(message).should('be.visible')
};

module.exports = intHome;
