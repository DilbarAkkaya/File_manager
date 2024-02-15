import fs from 'fs/promises';
import path from 'path';
const rename = async (filePath, newFileName) => {
  const fileDirectory = path.dirname(path.resolve(filePath));
  try {
    await fs.access(path.resolve(filePath));
    await fs.rename(path.resolve(filePath), path.resolve(fileDirectory, newFileName));
    console.log(`\x1b[95mFile ${filePath} renamed to ${newFileName} successfully \x1b[0m`);
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log(`\x1b[95mFile ${filePath} does not exist \x1b[0m`);
    } else {
      console.error(`Operation failed: ${err}`)
    }
  }
};
export default rename;
