#!/usr/bin/env node
'use strict';
const meow = require('meow');
const orderup = require('./orderup');
const updateNotifier = require('update-notifier');

const cli = meow([
  'Usage',
  '  $ orderup [path/to/project]',
  '  Default: .',
  '',
  'Examples',
  '  $orderup C:/Users/UserName/Documents/Programs/javascript/orderup'
]);

updateNotifier({pkg: cli.pkg}).notify();

if (cli.input.length > 1) {
  console.error('Specify one directory')
  console.log(cli.help);
  process.exit(1);
}

orderup(cli.input[0] || '.');
