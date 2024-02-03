import path from "path";
import { logCurrentDirectory } from "./logCurrentDirectory.mjs";
import fs from "fs/promises";

const cd = async (inputPath) => {
  if (!inputPath || inputPath.trim().length === 0) {
    console.log("\x1b[95mPlease enter a path after cd command\x1b[0m");
   // logCurrentDirectory();
    return;
  }
  const absoluteInputPath = path.resolve(inputPath);

  try {
    await fs.access(absoluteInputPath);
    const stats = await fs.stat(absoluteInputPath);
    if (!stats.isDirectory()) {
      console.error("This path is not a directory");
      return;
    }
    process.chdir(absoluteInputPath);
   
    console.log(` You are moved to ${absoluteInputPath}`);
    //logCurrentDirectory();

  }
  catch (err) {
    console.log(`Operation failed: ${err}`);

  }
}
export default cd;