import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(filename);

const remove = async () => {
  const pathToFile = path.join(__dirname, 'files', 'fileToRemove.txt');
  try {
    await fs.promises.unlink(pathToFile);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await remove();
