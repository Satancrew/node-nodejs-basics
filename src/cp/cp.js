import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { spawn } from 'child_process';

const filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(filename);
const pathToFile = path.join(__dirname, 'files', 'script.js');

const spawnChildProcess = async args => {
  const child = spawn('node', [pathToFile, ...args]);
  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);

  child.stdout.on('data', data => {
    process.stdout.write(data.toString());
  });
};

spawnChildProcess(['testArgFirst', 'testArgSecond', 'testArgThird']);
