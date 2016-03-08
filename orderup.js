'use strict';

var attr = [];
var prompt = require('prompt');
var outs = require('./chalkDefaults.js');
var chalk = require('chalk');
var fs = require('fs');
var opn = require('opn');
var shell = require('shelljs');
var remove = require('remove_index');
var lib = '';
var j;

// ==============================================================================

function checkForInit() {
  fs.stat(lib + '/orderup.md', function (err) {
    if (err === null) {
      openFile();
    } else if (err.code === 'ENOENT') {
      fs.writeFile(lib + '/orderup.md', '');
      init();
    } else {
      console.log('Some other error: ', err.code);
    }
  });
}

// ==============================================================================

function openFile() {
  fs.readFile(lib + '/orderup.md', 'utf8', function read(err, data) {
    if (err) {
			throw err;
		}

    var files = data.split(',');
    checkForFiles(files, 1);
  });
}

// ==============================================================================

function checkForFiles(files, i) {
  if (i >= files.length) {
    if (process.platform === 'win32') {
      for (j = 1; j < files.length; j++) {
        shell.exec(files[0] + ' ' + lib + '/' + files[j]);
      }
    } else {
      for (j = 1; j < files.length; j++) {
        opn(lib + '/' + files[j], {app: files[0]});
      }
    }
  } else {
    fs.stat(lib + '/' + files[i], function (err) {
      if (err === null) {
        checkForFiles(files, i + 1);
      } else if (err.code === 'ENOENT') {
        console.log(files[i].replace('\n', '') + ' Could not be found.');
        files = remove(files, i);
        checkForFiles(files, i);
      } else {
        console.log('Some other error: ', err.code);
      }
    });
  }
}

// ==============================================================================

function init() {
  prompt.get(['Open With'], function (err, res) {
		if (err) {
			throw (err);
		}

    if (res['Open With'] === '') {
      console.log(chalk.red('You must provide a program to use.'));
      init();
    } else {
      attr.push(res['Open With']);
      console.log('What files do you want to always open?');
      getFiles();
    }
  });
}

// ==============================================================================

function getFiles() {
  prompt.get(["File"], function (err, res) {
		if (err) {
			throw (err);
		}

    if (res.File === '') {
      console.log('');
      for (var i = 0; i < attr.length; i++) {
        console.log(attr[i]);
      }
      console.log('');
      prompt.get(['Does This Look Right yes/no'], function (err, res) {
				if (err) {
					throw (err);
				}

				if (res['Does This Look Right yes/no'].toLowerCase() === 'no') {
          attr = [];
          init();
        } else if (res['Does This Look Right yes/no'].toLowerCase() === 'yes') {
          writeToFile();
        }
      });
    } else {
      attr.push(res.File);
      getFiles();
    }
  });
}

// ==============================================================================

function writeToFile() {
  fs.writeFile(lib + '/orderup.md', attr.join(','), {flags: 'w'}, function (error) {
		if (error) {
      outs.error('Error writing to orderup.md');
      process.exit(1);
    }
    outs.success('orderup located at ' + lib + '/orderup.md !');
  });
}

// ==============================================================================

module.exports = function (args) {
  if (args[0] === undefined) {
    throw new Error(`Orderup expected a directory, recieved nothing`);
  }

  if (typeof args[0] !== 'string') {
    throw new TypeError(`Orderup expected type string, got ${typeof args[0]}`);
  }

  lib = args;
  checkForInit();
};
