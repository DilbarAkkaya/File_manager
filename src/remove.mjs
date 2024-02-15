import fs from 'fs/promises';
import path from 'path';
const remove = async (filePath) => {
    try {
        await fs.unlink(path.join(path.resolve(filePath)));
        console.log(`File ${path.basename(filePath)} removed from ${path.resolve(filePath)} successfully `);
    }
    catch (err) {
      console.error(`Operation failed: ${err}`);
    }
};
export default remove;