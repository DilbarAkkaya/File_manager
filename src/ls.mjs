import fs from 'fs/promises';
import path from 'path';
const ls = async () => {
    //const arrayOfNames = [];
    const arrayOfFiles = [];
    const arrayOfFolders = [];
    try {
        const files = await fs.readdir(process.cwd(), { withFileTypes: true });
        if (files.length == 0) { throw new Error(`Operation failed`) }
        else {
            for (let file of files) {
              console.log(file)
              const stats = await fs.stat(path.join((process.cwd(), file.name)));
              if (stats.isDirectory()) {
                arrayOfFolders.push(file.name)
              } else if (stats.isFile()) {
                arrayOfFiles.push(file.name)
              }
            }
            arrayOfFolders.sort();
            arrayOfFiles.sort();
            const data = [...arrayOfFolders, ...arrayOfFiles]
            console.table(data);
        }
    }
    catch (err) {
        throw new Error(`Operation failed: ${err}`);
    }
};
export default ls;