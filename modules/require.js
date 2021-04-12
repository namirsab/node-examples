/*
  In node, we had modules before the syntax import/export was introduced.
  Hence node created its own way of dealing with modules.
  This way is called CommonJS
*/

// To import a module
// fs is a built-in module from node to deal with the File System
const fs = require("fs");

// Let's import from a custom module. We don't need the extension
const myCustomModule1 = require("./one-export");
const myCustomModule2 = require("./multiple-export");

console.log(myCustomModule1);
console.log(myCustomModule2);

/*
  In opposition to import/export, you can use require
  whenever you want, not only in the top of your module. 
  In any case, it's recommended to require at the top
  of the module as a best practice.
*/
