/*
  It's possible to use ESModules natively in NodeJS since node 13.
  If we want to use the import/export syntax, we have to change the
  extension of our file from .js to .mjs, like in this file.
*/

// Importing a built-in node module
import fs from "fs";

// Here we need the extension .js when importing
import myModule1 from "./one-export.js";
import myModule2 from "./multiple-export.js";

console.log(myModule1);
console.log(myModule2);
