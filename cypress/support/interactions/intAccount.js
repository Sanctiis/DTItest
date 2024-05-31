const elsAccount = require("../elements/elsAccount");

const intAccount = {
    checkLabelMyAccount: () => elsAccount.labelMyAccount().should('be.visible'),
  };
  
  module.exports = intAccount;