#!/usr/bin/env node
'use strict';
const meow = require('meow');
const orderup = require('./orderup');
const updateNotifier = require('update-notifier');

const cli = meow([
  'Usage',
  '  $ orderup [path/to/project]'
]);

updateNotifier({pkg: cli.pkg}).notify();

orderup(cli.input);
