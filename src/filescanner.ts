import { pathToFileURL } from 'url';

const fs = require('fs');
const readline = require('readline');
const resolve = require('path').resolve;

/**
 * This function opens the file and scans for "TODO" string
 *
 * @param {string}  filename The filename to scan
 * @return {type} Returns the absolute path of the file
 */
const processFile = async filename => {
  const fileStream = fs.createReadStream(filename);
  const readLineStream = readline.createInterface({
    input: fileStream
  });

  let arr = [];
  let path = null;

  await readLineStream.on('line', line => {
    let strLine = line.toUpperCase();

    if (strLine.includes('TODO')) {
      path = resolve(filename); // will get the absolute path of the file
      fileStream.destroy();
      //console.log(path);
    }
  });

  return path;
};

module.exports = processFile;
