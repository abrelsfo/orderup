## OrderUp (Windows only for the moment, having formatting issues)

[![npm version](https://img.shields.io/npm/v/orderup.svg)](https://www.npmjs.com/package/orderup)
[![npm download count](http://img.shields.io/npm/dm/orderup.svg?style=flat)](http://npmjs.org/orderup)

> Makes opening your files for a project quick and easy. Just run the one time setup per project and then from there just navigate to your project file and run orderup


![demo](orderup.PNG)

* To initialize ```orderup.md``` run ```orderup path/to/project or . ``` if in project directory

* ```Open with:``` program you want your files to open with

* ```File:``` file you want opened (press enter to specify another one, leave blank when done)

* Double check you added all the files you want (You can manually edit this later)

* Files will be added to ```orderup.md``` and ```orderup.md``` will be added to ```.gitignore``` if it exists

* Run ```orderup path/to/project or . ``` again to open the files

<br>

# CLI

## Installation

```$ npm install -g orderup```

## Usage

```js
orderup C:/Users/UserName/Documents/Programs/Javascript/project
//=>Tries to open the orderup.md file inside project folder

orderup .
//=>Tries to open the orderup.md file inside current directory

orderup
//=>Tries to open the orderup.md file inside current directory
```
<br>

More help
```
orderup --help

  Usage
    $ orderup [path/to/project]

  Examples
    $ orderup C:/Users/UserName/Documents/Programs/Javascript/project
    //=>opens the files in the orderup.md file for project
```

<br>

---
# Package

## Install

```npm install --save orderup```

<br>

## Usage

```js
var orderup = require('orderup');

orderup('path/to/project');
```
<br>

## API

### orderup(target)

##### target

Type: `string`
Default: '.'

Opens all files that are in the orderup.md file located in target

<br>

## License

MIT © [Alex Brelsford](abrelsfo.github.io)
