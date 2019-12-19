import { getAllFiles } from './getallfiles';
const rootDir = './';
const allfiles = getAllFiles(rootDir, []);

console.log(allfiles);
