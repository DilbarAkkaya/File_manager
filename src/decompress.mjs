import { createBrotliDecompress } from 'zlib';
import path from 'path';
import fs from 'fs/promises';
import { createWriteStream, createReadStream } from 'fs';
const decompress = async (filePath, targetPath) => {
  const absolutePath = path.resolve(filePath);
  const targetDirectory = path.dirname(path.resolve(targetPath));
  const targetFile = path.resolve(targetPath);

  try {
    console.log(path.extname(absolutePath))
    await fs.access(absolutePath);
    await fs.access(targetDirectory);
    const statsFilePath = await fs.stat(absolutePath);

    if (!statsFilePath.isFile()) {
      console.error(`${absolutePath} is not a file`);
      return;
    }
    try {
      await fs.access(targetFile);
      console.log(`\x1b[95mFile ${targetFile} in path ${targetDirectory} already exists \x1b[0m`)
    } catch (err) {
      if (err.code === 'ENOENT') {
        const readStream = createReadStream(absolutePath);
        const writeStream = createWriteStream(targetFile)
        readStream.pipe(createBrotliDecompress()).pipe(writeStream);
        console.log(`\x1b[95mFile ${path.basename(absolutePath)} from path ${absolutePath} decomressed to ${targetFile} \x1b[0m`);
      }
    }
  } catch (err) {
    console.error(`Operation failed: ${err}`);
  }
};

export default decompress;