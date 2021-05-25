#! /usr/local/bin/node
const yargs = require('yargs');
const chalk = require('chalk');
const documentGenerator = require('cpf-cnpj-validator');
const clipboardy = require('clipboardy');

const options = yargs
  .usage('gen -d cpf')
  .option('d', {
    alias: 'doc',
    describe: 'The document type you want to generate',
    choices: ['cpf', 'cnpj']
  })
  .option('stripe', {
    describe: 'Flag to stripe separators',
    type: 'boolean'
  })
  .option('cp', {
    describe: 'Copy the generated value to clipboard',
    type: 'boolean'
  })
  .argv;


let document = '';
switch (options.doc) {
  case 'cpf':
    document = documentGenerator.cpf.generate();
    if (!options.stripe) {
      document = documentGenerator.cpf.format(document);
    }
    break;
  case 'cnpj':
    document = documentGenerator.cnpj.generate();
    if (!options.stripe) {
      document = documentGenerator.cnpj.format(document);
    }
    break;
}

console.log(chalk.green(document));

if (options.cp) {
  clipboardy.writeSync(document);
}