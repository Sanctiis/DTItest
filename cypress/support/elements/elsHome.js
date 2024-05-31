const elsHome = {
    loginButton: () => cy.get('#SubmitLogin'),
    emailField: () => cy.get('#email'),
    passwordField: () => cy.get('#passwd'),
    errorMessage: (message) => cy.get('div.alert.alert-danger ol li').contains(message),

    errorMessages: {
        INVALID_EMAIL: 'Invalid email address.',
        INVALID_PASSWORD: 'Authentication failed.',
        EMAIL_REQUIRED: 'An email address required.',
        PASSWORD_REQUIRED: 'Password is required.'
      }
  };
  
  module.exports = elsHome;
  