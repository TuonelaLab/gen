#! /usr/local/bin/node
const yargs = require('yargs');
const generateDocument = require('./generate_document');

yargs
  .usage('$0 <cmd> [args]')
  .command('doc', 'Generates a document', () => {
    yargs.option('type', {
      alias: 't',
      choices: ['cpf', 'cnpj'],
      require: true
    }).option('stripe', {
      alias: 's',
      describe: 'Flag to stripe separators',
      type: 'boolean',
      default: false
    })
    .option('cp', {
      alias: 'c',
      describe: 'Copy the generated value to clipboard',
      type: 'boolean',
      default: false
    })
  }, generateDocument)
  .demandCommand()
  .argv;