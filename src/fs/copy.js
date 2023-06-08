import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(filename);

const copy = async () => {
  const startFolder = path.join(__dirname, 'files');
  const newFolder = path.join(__dirname, 'files_copy');
  try {
    await fs.promises.mkdir(newFolder);
    const files = await fs.promises.readdir(startFolder);
    for (const file of files) {
      const copyFrom = path.join(startFolder, file);
      const copyTo = path.join(newFolder, file);
      await fs.promises.copyFile(copyFrom, copyTo);
    }
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await copy();
