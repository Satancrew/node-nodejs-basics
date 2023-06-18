const parseEnv = () => {
  Object.keys(process.env).forEach(key => {
    if (key.startsWith('RSS_')) {
      const value = process.env[key];
      console.log(`${key}=${value}`);
    }
  });
};

parseEnv();
