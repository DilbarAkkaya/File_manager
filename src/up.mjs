import path from "path";
import { logCurrentDirectory } from "./logCurrentDirectory.mjs";
const up = ()=> {
  const currentDirectory = path.resolve();
  const parentDirectory = path.resolve(currentDirectory, "..");
  if(currentDirectory === parentDirectory) {
    console.log("You are in the root folder");
  } else {
    process.chdir(parentDirectory);

  }

}
export default up;