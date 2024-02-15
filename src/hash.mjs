import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
const calculateHash = async (filePath) => {
  const hash = crypto.createHash('sha256');
  const stream = fs.createReadStream((path.resolve(filePath)));
  return new Promise((resolve, reject) => {
    stream.on('data', (data) => {
      hash.update(data);
    });
    stream.on('end', () => {
      const valueHexFormat = hash.digest('hex');
      console.log(`\x1b[95mHash of file ${path.basename(path.resolve(filePath))} from path ${filePath}: ${valueHexFormat} \x1b[0m`);
      resolve(valueHexFormat);
    });
    stream.on('error', (error) => {
      console.error(`Operation failed: ${error}`);
      reject(error);
    })
  })
};
export default calculateHash;