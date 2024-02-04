import fs from 'fs/promises';
import path from 'path';
import { createWriteStream, createReadStream } from 'fs';

const copy = async (filePath, targetDirectory) => {
  try {
    await fs.access(filePath, fs.constants.R_OK);
    const absoluteFilePath = path.resolve(filePath);
    const fileName = path.basename(absoluteFilePath);
    const targetPath = path.join(path.resolve(targetDirectory), fileName);
    await fs.access(targetDirectory, fs.constants.W_OK);
    try {
      await fs.access(targetPath, fs.constants.F_OK);
      console.error(`File ${fileName} already exists in ${path.resolve(targetDirectory)}`);
      return;
    } catch (err) {
      const readStream = createReadStream(absoluteFilePath);
      const writeStream = createWriteStream(targetPath);
      writeStream.on('error', (err) => {
        console.error('File writing error:', err);
      });
      readStream.pipe(writeStream);
      await new Promise((resolve, reject) => {
        readStream.on('end', () => {
          console.log(`File ${fileName} copied from ${path.resolve(filePath)} to ${targetPath} successfully `);
          resolve();
        });
        readStream.on('error', (err) => {
          console.error('File reading error:', err);
          reject(err);
        });
      });
    }
  } catch (err) {
    console.error('Error accessing source file:', err);
  }
};

export default copy;