import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(filename);
const pathToFile = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
  try {
    const fileData = await fs.promises.readFile(pathToFile, 'utf8');
    console.log(fileData);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await read();
