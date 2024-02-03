import path from "path";
import { logCurrentDirectory } from "./logCurrentDirectory.mjs";

const cd = (inputPath) => {
    if (!inputPath || inputPath.trim().length === 0) {
      console.log("\x1b[95mPlease enter a path after cd command\x1b[0m");
      return;
    }
  const absoluteInputPath = path.resolve(inputPath);
  try {
    if(!absoluteInputPath) {
      console.log("Invalid input");

    } else {
      process.chdir(absoluteInputPath);
      console.log(`You are moved to ${absoluteInputPath}`);

    }

  }
  catch(err) {
    console.log(`Operation failed: ${err}`);
 
  }
  logCurrentDirectory();
}
export default cd;