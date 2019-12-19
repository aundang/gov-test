"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
/**
 * This function recursively returns all files from a given root directory and its subdirectories
 *
 * @param {string}  rootDir Root of the directory
 * @param {string}  arrayOfFilenames array storage for returned files inside the directory
 * @return {type} Returns array of files
 */
exports.getAllFiles = function (rootDir, arrayOfFilenames) {
    var files = fs_1.default.readdirSync(rootDir);
    arrayOfFilenames = arrayOfFilenames || [];
    files.forEach(function (file) {
        if (fs_1.default.statSync(rootDir + '/' + file).isDirectory()) {
            arrayOfFilenames = exports.getAllFiles(rootDir + '/' + file, arrayOfFilenames);
        }
        else {
            arrayOfFilenames.push(path_1.default.join(__dirname, rootDir, '/', file));
        }
    });
    return arrayOfFilenames;
};
