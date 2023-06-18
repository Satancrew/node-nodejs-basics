import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import zlib from 'zlib';
import { pipeline } from 'stream';

const filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(filename);

const compress = async () => {
  try {
    const pathToFile = path.join(__dirname, 'files', 'fileToCompress.txt');
    const pathToZippedFile = path.join(__dirname, 'files', 'archive.gz');
    const readStream = fs.createReadStream(pathToFile);
    const writeStream = fs.createWriteStream(pathToZippedFile);

    const zipFile = zlib.createGzip();

    await pipeline(readStream, zipFile, writeStream, error => {
      if (error) {
        throw new Error('You got error: ', error)
      } else {
        console.log('File compressed successfully');
      }
    });
  } catch (error) {
    throw new Error('You got error: ', error)
  }
};

await compress();
