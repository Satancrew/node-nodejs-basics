import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(filename);

const write = async () => {
  const pathToFile = path.join(__dirname, 'files', 'fileToWrite.txt');
  try {

    if (!fs.existsSync(pathToFile)) {
      throw new Error('File didnt exist');
    }

    const writableStream = fs.createWriteStream(pathToFile);
    process.stdin.on('data', (text) => {
      writableStream.write(text);
    });
    process.stdin.on('end', () => {
      writableStream.end();
    });
  } catch (error) {
    throw new Error('File didnt exist');
  }
};

await write();
