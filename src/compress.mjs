import { createBrotliCompress } from 'zlib';
import path from 'path';
import fs from 'fs/promises';
import { createWriteStream, createReadStream } from 'fs';
const compress = async (filePath, targetPath) => {
  const absolutePath = path.resolve(filePath);
  const targetDirectory = path.dirname(path.resolve(targetPath));
  const targetFile = path.resolve(targetPath);

  try {
    await fs.access(absolutePath);
    await fs.access(targetDirectory);
    const statsFilePath = await fs.stat(absolutePath);
    if (!statsFilePath.isFile()) {
      console.error(`${absolutePath} is not a file`);
      return;
    }
    if (path.extname(absolutePath) === '.br') {
      console.error(`\x1b[95m$File {absolutePath} is already compressed \x1b[0m`);
      return;
    }
    try {
      await fs.access(targetFile);
      console.log(`\x1b[95mFile ${targetFile} in path ${targetDirectory} already exists \x1b[0m`)
    } catch (err) {
      if (err.code === 'ENOENT') {
        const readStream = createReadStream(absolutePath);
        const writeStream = createWriteStream(`${targetFile}.br`);
        readStream.pipe(createBrotliCompress()).pipe(writeStream);
        console.log(`\x1b[95mFile ${absolutePath} comressed to ${targetFile}.br \x1b[0m`);
      }
    }
  } catch (err) {
    console.error(`Operation failed: ${err}`);
  }
};

export default compress;