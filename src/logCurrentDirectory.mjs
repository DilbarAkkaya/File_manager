import path from "path";

export const logCurrentDirectory = ()=> {
  console.log("\x1b[34m",`You are currently in ${path.resolve()}`, "\x1b[0m");
}
