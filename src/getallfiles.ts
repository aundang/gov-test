import fileSystem from 'fs';
import path from 'path';

/**
 * This function recursively returns all files from a given root directory and its subdirectories
 *
 * @param {string}  rootDir Root of the directory
 * @param {string}  arrayOfFilenames array storage for returned files inside the directory
 * @return {type} Returns array of files
 */
export const getAllFiles = (
  rootDir: string,
  arrayOfFilenames: string[]
): string[] => {
  let files = fileSystem.readdirSync(rootDir);

  arrayOfFilenames = arrayOfFilenames || [];

  files.forEach(file => {
    if (fileSystem.statSync(rootDir + '/' + file).isDirectory()) {
      arrayOfFilenames = getAllFiles(rootDir + '/' + file, arrayOfFilenames);
    } else {
      arrayOfFilenames.push(path.join(__dirname, rootDir, '/', file));
    }
  });

  return arrayOfFilenames;
};
