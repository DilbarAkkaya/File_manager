import welcome from "./src/welcome.mjs";
import readline from "node:readline/promises";
import { stdin, stdout } from "process";
import { logCurrentDirectory } from "./src/logCurrentDirectory.mjs";
import { setHomeDirectory } from "./src/setHomeDirectory.mjs";
import up from "./src/up.mjs";
import cd from "./src/cd.mjs";
import ls from "./src/ls.mjs";
import cat from "./src/cat.mjs";
import add from "./src/add.mjs";


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
    })

    lineInterface.on("line", async (line) => {
      switch (line.split(' ')[0]) {
        case "up":
          up();
          break;
        case "cd":
          const inputPath = line.slice(3).trim();
          await cd(inputPath);
          break;
        case "ls":
          ls();
          break;
        case "cat":
          const input = line.slice(4).trim();
          try {
            await cat(input);
          } catch (error) {
            console.error(`Operation failed: ${error}`);
          }
          break;
          case "add":
            const fileName = line.slice(4).trim();
            try {
              await add(fileName);
            } catch (error) {
              console.error(`Operation failed: ${error}`);
            }
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
    console.error(`Operation failed: ${err}`);
    logCurrentDirectory();
  }
}

await app();