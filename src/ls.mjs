import fs from 'fs/promises';
import path from 'path';
const ls = async () => {
    const arrayOfNames = [];
    try {
        const files = await fs.readdir(process.cwd(), { withFileTypes: true });
        if (files.length == 0) { throw new Error(`Operation failed`) }
        else {
            for (let file of files) {
              arrayOfNames.push(file['name']);
            }
            console.log(arrayOfNames);
        }
    }
    catch (err) {
        throw new Error(`Operation failed: ${err}`);
    }
};
export default ls;