#!/usr/bin/env node
'use strict';
const meow = require('meow');
const orderup = require('./orderup');
const updateNotifier = require('update-notifier');

const cli = meow([
  'Usage',
  '  $ orderup [path/to/project]',
  '',
  'Examples',
  '  $orderup C:/Users/UserName/Documents/Programs/javascript/orderup'
]);

updateNotifier({pkg: cli.pkg}).notify();

orderup(cli.input || '.');
