import path from "path";

export const logCurrentDirectory = ()=> {
  console.log(`You are currently in ${path.resolve()}`);
}
