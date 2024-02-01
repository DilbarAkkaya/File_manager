import welcome from "./src/welcome.mjs";
import readline from "node:readline/promises";
import {stdin, stdout} from "process";

const app = async () => {
  const username = welcome();
  console.log(`Welcome to the File Manager, ${username}!`);
  const lineInterface = readline.createInterface({input: stdin, output: stdout});
  lineInterface.on("SIGINT", ()=> {
    console.log(`\nThank you for using File Manager, ${username}, goodbye!`);
    lineInterface.close();
  })
  lineInterface.on("line", (line)=>{
    if (line === ".exit") {
      console.log(`Thank you for using File Manager, ${username}, goodbye!`);
      lineInterface.close();
    }
  });
}
await app()