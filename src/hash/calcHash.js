import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import crypto from 'crypto';

const filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(filename);

const calculateHash = async () => {
  try {
    const pathToFile = path.join(
      __dirname,
      'files',
      'fileToCalculateHashFor.txt',
    );
    const data = await fs.promises.readFile(pathToFile);
    const hash = crypto.createHash('sha256');

    hash.update(data);
    const answer = hash.digest('hex');
    
    console.log(answer);
  } catch (error) {
    throw new Error('You got some error');
  }
};

await calculateHash();
