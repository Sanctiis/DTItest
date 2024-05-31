const intHome = require('../../support/interactions/intHome');
const elsHome = require('../../support/elements/elsHome');
const intAccount = require('../../support/interactions/intAccount');

describe('Dado que estou na página de login', () => {
  beforeEach(() => {
    intHome.visitHome();
  });

  context('Quando o usuário tem credenciais válidas', () => {
    it('Então deve logar com sucesso e ver "My account"', () => {
      intHome.fillEmail(Cypress.env('VALID_EMAIL'));
      intHome.fillPassword(Cypress.env('VALID_PASSWORD'));
      intHome.clickLoginButton();
      intAccount.checkLabelMyAccount();
    });
  });

  context('Quando o email é inválido', () => {
    it('Então deve mostrar mensagem de erro', () => {
      intHome.fillEmail('invalid_email');
      intHome.fillPassword(Cypress.env('VALID_PASSWORD'));
      intHome.clickLoginButton();
      intHome.checkErrorMessage(elsHome.errorMessages.INVALID_EMAIL);
    });
  });

  context('Quando a senha é inválida', () => {
    it('Então deve mostrar mensagem de erro', () => {
      intHome.fillEmail(Cypress.env('VALID_EMAIL'));
      intHome.fillPassword('invalid_password');
      intHome.clickLoginButton();
      intHome.checkErrorMessage(elsHome.errorMessages.INVALID_EMAIL);
    });
  });

  context('Quando o email está ausente', () => {
    it('Então deve mostrar mensagem de erro', () => {
      intHome.fillEmail(' ').clear();
      intHome.fillPassword(Cypress.env('VALID_PASSWORD'));
      intHome.clickLoginButton();
      intHome.checkErrorMessage(elsHome.errorMessages.EMAIL_REQUIRED);
    });
  });

  context('Quando a senha está ausente', () => {
    it('Então deve mostrar mensagem de erro', () => {
      intHome.fillEmail(Cypress.env('VALID_EMAIL'));
      intHome.fillPassword(' ').clear();
      intHome.clickLoginButton();
      intHome.checkErrorMessage(elsHome.errorMessages.PASSWORD_REQUIRED);
    });
  });
});