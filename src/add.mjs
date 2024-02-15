import fs from 'fs/promises';
import path from 'path';
const add = async (fileName) => {
  try {
    await fs.writeFile(path.join(process.cwd(), fileName), '',{ flag: 'wx' });
    console.log(`File ${fileName} created successfully in ${process.cwd()}`);
  }
  catch (err) {
    console.error(`Operation failed: ${err}`);
  }
}
export default add;