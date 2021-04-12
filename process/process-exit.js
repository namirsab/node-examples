/*
  We can call `process.exit(exitCode)` whenever we want inside a nodejs program.
  This way we tell the program to finish.
  Per default, the program will finish when there is nothing else to do, and
  exit with exit code 0. Exit codes are used to signalize problems

  0 means everythign went well.
  Anything else means that there was an error. Each code has an special meaning,
  you can check the docs
*/

const args = process.argv.slice(2);

const exitCode = Number(args[0]);
console.log(`Exiting with exit code ${exitCode}`);

process.exit(exitCode);
