const chalk = require('chalk');
const cpfCnpj = require('cpf-cnpj-validator');
const clipboardy = require('clipboardy');

module.exports = ({ type, stripe, cp }) => {
  const document = cpfCnpj[type].generate(!stripe);
  if (cp) {
    clipboardy.writeSync(document);
  }
  console.log(chalk.green(document));
};