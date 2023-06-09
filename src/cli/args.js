const parseArgs = () => {
  const args = process.argv.slice(2);
  let answer = '';
  for (let i = 0; i < args.length; i += 2) {
    const argsName = args[i].replace('--', '');
    const value = args[i + 1];
    answer += `${argsName} is ${value}, `;
  }
  console.log(answer);
};

parseArgs();
