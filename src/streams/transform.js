import { Transform } from 'stream';

const transform = async () => {
  const reverseStream = new Transform({
    transform(chunk, encoding, callback) {
      const reverseText = chunk.toString().split('').reverse().join('');
      this.push(reverseText);
      callback();
    },
  });
  process.stdin.pipe(reverseStream);
  reverseStream.pipe(process.stdout);
};

await transform();
