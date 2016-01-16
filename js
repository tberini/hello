#!/usr/bin/env node

'use strict';
var c = require('skilstak-colors')

var  printPlain = function (message) {
  console.log(message);
}

var printMulti = function (message) {
  while(true) {
    console.log(c.multi(message))
  }
}

printPlain("Hello");
printMulti("Hello");
