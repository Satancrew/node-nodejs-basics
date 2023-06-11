import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import zlib from 'zlib';
import { pipeline } from 'stream';

const filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(filename);

const decompress = async () => {
  try {
    const pathToZippedFile = path.join(__dirname, 'files', 'archive.gz');
    const pathToFile = path.join(__dirname, 'files', 'fileToCompress.txt');
    const readStream = fs.createReadStream(pathToZippedFile);
    const writeStream = fs.createWriteStream(pathToFile);

    const zipFile = zlib.createGunzip();

    await pipeline(readStream, zipFile, writeStream, error => {
      if (error) {
        throw new Error('You got error: ', error);
      } else {
        console.log('File decompressed successfully');
      }
    });
  } catch (error) {
    throw new Error('You got error: ', error);
  }
};

await decompress();
