/*
  We use the fs module (short for file system) to deal with the file system
  from the OS
*/
const fs = require("fs");

/*
  To read a file, the fs module gives us some functions:
  fs.readFileSync(path, encoding) (to read files in a synchronous/blocking manner)
  fs.readFile(path, encoding, errorFirstCallbackFn) (to read files in async manner using callbacks )
  fs.promises.readFile(path, encoding) (to read files in async manner, using promises (.then))
*/

const pathToFile = "./files/hello-world.txt";

// fs.readFileSync

/*
  When reading a file, we always have to deal with potential errors that can
  happen if the file doesn't exist or if our program doesn't have access to it
  for whatever reason
  With readFileSync, we use the try/catch statement. You can read it like:
  try {
    // to do something
  } catch (error) {
    // but if an error happens, do this
  }
*/
try {
  const fileContentSync = fs.readFileSync(pathToFile, "utf-8");
  console.log("readFileSync: ", fileContentSync);
} catch (error) {
  console.error("readFileSync error: ", error);
  process.exit(1);
}

// fs.readFile

/*
  In this case, the code is not blocking. We tell the OS
  to give us the content of the file, and whenever its done
  the callback function passed will be run.
*/
fs.readFile(pathToFile, "utf8", (error, fileContentAsync) => {
  /*
    The callback function receives 2 arguments: error, which will be
    falsy (null, undefined) if everything went well, and the data
  */

  if (error) {
    console.error("readFile async (callback) error: ", error);
    process.exit(1);
  }
  console.log("readFile async (callback): ", fileContentAsync);
});

//fs.promises.readFile

/*
  With the promises version, we get a promise (like with fetch)
  and we can use the `.then` and `.catch` method.
  the .then callback receives the data, whenever the OS is done giving node the content of the file
  the .catch callback receives the error, in case there is an error
*/
fs.promises
  .readFile(pathToFile, "utf-8")
  .then((fileContentAsync) => {
    console.log("readFile async (promises): ", fileContentAsync);
  })
  .catch((error) => {
    console.error("readFile async (promises) error: ", error);
    process.exit(1);
  });
