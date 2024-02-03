import welcome from "./src/welcome.mjs";
import readline from "node:readline/promises";
import path from "path";
import { stdin, stdout } from "process";
import { logCurrentDirectory } from "./src/logCurrentDirectory.mjs";
import { setHomeDirectory } from "./src/setHomeDirectory.mjs";
import up from "./src/up.mjs";
import cd from "./src/cd.mjs";

const app = async () => {
  try {
    setHomeDirectory();
    const username = welcome();
    console.log(`Welcome to the File Manager, ${username}!`);
    logCurrentDirectory();
    const lineInterface = readline.createInterface({ input: stdin, output: stdout });
    lineInterface.setPrompt('\x1b[95mPlease, enter command >> \x1b[0m');
    lineInterface.prompt();
    lineInterface.on("SIGINT", () => {
      console.log(`\nThank you for using File Manager, ${username}, goodbye!`);
      lineInterface.close();
      //logCurrentDirectory();
    })
    lineInterface.on("line", async (line) => {
      //logCurrentDirectory();

      /* if (line.startsWith("cd")) {
        const inputPath = line.slice(3).trim();
        cd(inputPath);
       // logCurrentDirectory();
      }
      if (line.startsWith("up")) {
        up();

      }
      if (line === ".exit") {
        console.log(`Thank you for using File Manager, ${username}, goodbye!`);
        lineInterface.close();
      } */
      switch (line.split(' ')[0]) {
        case "up":
          up();
          break;
        case "cd":
          const inputPath = line.slice(3).trim();
         await cd(inputPath);
         // logCurrentDirectory();
          break;
        case ".exit":
          console.log(`Thank you for using File Manager, ${username}, goodbye!`);
          lineInterface.close();
          break;
        default:
          console.log("Invalid input. Please enter a valid command.");
          break;
      }
      lineInterface.setPrompt('\x1b[95m>> \x1b[0m');
      logCurrentDirectory();
      lineInterface.prompt();
    });
    lineInterface.on("close", () => {
      logCurrentDirectory();
    });
  } catch (error) {
    console.error("Operation failed:", error);
    logCurrentDirectory();
  }
}

await app();