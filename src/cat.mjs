import fs from 'fs';
import path from "path";

const cat = (inputPath) => {
  return new Promise((resolve, reject) => {
    let isEmpty = true;
    // const stats = fs.stat(path.join((process.cwd(), file.name)));
    const readStream = fs.createReadStream(path.resolve(inputPath));
    readStream.on("data", (chunk) => {
      isEmpty = false;
      process.stdout.write(`${chunk.toString()}\n`);
    });
    readStream.on("error", (error) => {
      reject(`Operation failed: ${error}`);
    });
    readStream.on("end", () => {
      if (isEmpty) {
        console.log(("\x1b[95mThis file is empty \x1b[0m"));
        resolve();
      } else {
        console.log(("\x1b[95mSuccessful file reading operation. \x1b[0m"));
        resolve();
      }
    });
  })

};
export default cat;