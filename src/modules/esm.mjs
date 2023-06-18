import fs from 'fs';
import http from 'http';
import os from 'os';
import path from 'path';
import firstFile from './files/a.json' assert { type: 'json' };
import secondFile from './files/b.json' assert { type: 'json' };
import './files/c.js';

const random = Math.random();

let unknownObject;

unknownObject = random > 0.5 ? firstFile : secondFile;

console.log(`Release ${os.release()}`);
console.log(`Version ${os.version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${import.meta.url}`);
console.log(`Path to current directory is ${path.dirname(import.meta.url)}`);

const myServer = http.createServer((_, res) => {
  res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log('To terminate it, use Ctrl+C combination');
});

export { unknownObject, myServer };
