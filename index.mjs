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
import rename from "./src/rename.mjs";
import copy from "./src/copy.mjs";
import move from "./src/move.mjs";
import remove from "./src/remove.mjs";
import getInfoFromOS from "./src/os.mjs";
import calculateHash from "./src/hash.mjs";
import compress from "./src/compress.mjs";
import decompress from "./src/decompress.mjs";
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
      logCurrentDirectory();
      lineInterface.close();
    })

    lineInterface.on("line", async (line) => {
      if (line === '.exit') {
        console.log(`Thank you for using File Manager, ${username}, goodbye!`);
        lineInterface.close();
      } else {
        const partsOfLine = line.split(' ');
        switch (line.split(' ')[0]) {
          case "up":
            up();
            break;
          case "cd":
            const inputPath = line.slice(3).trim();
            await cd(inputPath);
            break;
          case "ls":
            try {
              await ls();
            } catch (error) {
              console.error(`Operation failed: ${error}`);
            }
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
          case "rn":
            const arrOfArgs = line.split(' ');
            const newFileName = arrOfArgs[2];
            try {
              await rename(arrOfArgs[1], newFileName);
            } catch (error) {
              console.error(`Operation failed: ${error}`);
            }
            break;
          case "cp":
            try {
              await copy(partsOfLine[1], partsOfLine[2]);
            } catch (error) {
              console.error(`Operation failed: ${error}`);
            }
            break;
          case "mv":
            try {
              await move(partsOfLine[1], partsOfLine[2]);
            } catch (error) {
              console.error(`Operation failed: ${error}`);
            }
            break;
          case "rm":
            const fileToDelete = line.slice(3).trim();
            try {
              await remove(fileToDelete);
            } catch (error) {
              console.error(`Operation failed: ${error}`);
            }
            break;
          case "os":
            getInfoFromOS(partsOfLine[1])
            break;
          case "hash":
            await calculateHash(partsOfLine[1])
            break;
          case "compress":
            await compress(partsOfLine[1], partsOfLine[2])
            break;
          case "decompress":
            await decompress(partsOfLine[1], partsOfLine[2])
            break;
          default:
            console.log("Invalid input. Please enter a valid command.");
            break;
        }
      }
    //  lineInterface.setPrompt('\x1b[95m>> \x1b[0m');
      logCurrentDirectory();
 //     lineInterface.prompt();
    });
  } catch (error) {
    console.error(`Operation failed: ${err}`);
    logCurrentDirectory();
  }
}

await app();