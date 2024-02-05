import fs from 'fs/promises';
import path from 'path';
const ls = async () => {
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
                arrayOfFolders.push({'Name': file.name, 'Type': 'directory'})
              } else if (stats.isFile()) {
                arrayOfFiles.push({'Name': file.name, 'Type': 'file'})
              }
            }
            arrayOfFolders.sort();
            arrayOfFiles.sort();
            const data = [...arrayOfFolders, ...arrayOfFiles]
            console.table(data, ['Name', 'Type']);
        }
    }
    catch (err) {
        console.error(`Operation failed: ${err}`);
    }
};
export default ls;