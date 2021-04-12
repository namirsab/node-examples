/*
  Node brings a global "process" object that represents the current process
  where node is running. Everytime we run a program in the OS, this program 
  is running on a process. Same happens for node.

  We can use this "process" object for multiple things, but one of the most
  basic one is to read arguments given when executing our program.
*/

/*
  process.argv contains an array with all the arguments given to the program.
  E.g. if we execute this program like this:
  node process-argv.js a b c
  
  process.argv will be:
  [
    'path/to/node',
    'path/to/process-argv.js',
    'a',
    'b',
    'c'
  ]

  As you can see, the first 2 arguments are node itself and the program we are running.
*/
console.log(process.argv);

/*
  Normally we will .slice the arguments to only get the arguments we are interested in (from index 2 on)
*/

const args = process.argv.slice(2);
console.log(args);
