import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(filename);
const pathToFile = path.join(__dirname, 'files', 'fresh.txt');

const create = async () => {
  try {
    await fs.promises.writeFile(pathToFile, 'I am fresh and young', {
      flag: 'wx',
    });
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await create();
