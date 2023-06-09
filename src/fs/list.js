import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(filename);
const pathToFolder = path.join(__dirname, 'files');

const list = async () => {
  try {
    const files = await fs.promises.readdir(pathToFolder);
    console.log(files);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await list();
