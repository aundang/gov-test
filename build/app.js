"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getallfiles_1 = require("./getallfiles");
var rootDir = './';
var allfiles = getallfiles_1.getAllFiles(rootDir, []);
console.log(allfiles);
