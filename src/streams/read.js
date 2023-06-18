import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(filename);

const read = async () => {
  const pathToFile = path.join(__dirname, 'files', 'fileToRead.txt');
  try {
    const readableStream = fs
      .createReadStream(pathToFile)
      .on('data', text => process.stdout.write(text))
      .on('error', () => {
        throw new Error('You got some error');
      });
  } catch (error) {
    throw new Error('Some another error: ', error);
  }
};

await read();
