import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(filename);

const rename = async () => {
    const pathToFile = path.join(__dirname, 'files', 'wrongFilename.txt');
    const pathToRenamedFile = path.join(__dirname, 'files', 'properFilename.md');
  try {
    await fs.promises.rename(pathToFile, pathToRenamedFile);
    console.log('File renamed successfully.');
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await rename();
