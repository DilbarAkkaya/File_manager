import path from "path";
const up = ()=> {
  const currentDirectory = path.resolve();
  const parentDirectory = path.resolve(currentDirectory, "..");
  if(currentDirectory === parentDirectory+path.sep) {
    console.log("You are in the root folder");
  } else {
    process.chdir(parentDirectory);
  }
 
}
export default up;