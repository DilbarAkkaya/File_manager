const welcome = (username = 'Guest') => {
  const args = process.argv.slice(2);
  for (let i = 0; i < args.length; i++) {
    if (args[i].slice(0, 11) === '--username=') {
      username = args[i].slice(11);
    }
  }
  return username;
  //console.log(`Welcome to the File Manager, ${username}!`);
}

export default welcome;