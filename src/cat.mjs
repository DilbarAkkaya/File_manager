import fs from 'fs';
import path from "path";

const cat = (inputPath) => {
  return new Promise((resolve, reject) => {
    const readStream = fs.createReadStream(path.resolve(inputPath));
    readStream.on("data", (chunk) => {
        process.stdout.write(`${chunk.toString()}\n`);
    });
    readStream.on("error", (error) => {
      reject(`Operation failed: ${error}`);
    });
    readStream.on("end", () => {
      resolve(("\x1b[95mSuccessful file reading operation. \x1b[0m"));
    });
  })
    
};
 export default cat;