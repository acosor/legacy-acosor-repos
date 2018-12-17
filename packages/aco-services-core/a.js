const a = require("./lib/authentication/commands");

const item = a.commands.create("User", "PWD");

console.log(item);

const cols = [
  {
    module: "authentication",
    
  }
];
