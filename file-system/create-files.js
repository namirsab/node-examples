/*
  We use the fs module (short for file system) to deal with the file system
  from the OS
*/
const fs = require("fs");

/*
  To create/write a file, the fs module gives us some functions:
  fs.writeFileSync(path, data) (to write files in a synchronous/blocking manner)
  fs.writeFile(path, data, errorFirstCallbackFn) (to write files in async manner using callbacks )
  fs.promises.writeFile(path, data) (to write files in async manner, using promises (.then))
*/

// fs.writeFileSync

/*
  When writing a file, we always have to deal with potential errors that can
  happen if the file doesn't exist or if our program doesn't have access to it
  for whatever reason
  With writeFileSync, we use the try/catch statement. You can read it like:
  try {
    // to do something
  } catch (error) {
    // but if an error happens, do this
  }
*/
try {
  /*
    If the file doesn't exist, all the methods "writeFile" will create the file
  */
  fs.writeFileSync(
    "./files/created-sync.txt",
    "Created a file in a synchronous way using fs.writeFileSync"
  );
} catch (error) {
  console.error("writeFileSync error: ", error);
  process.exit(1);
}

// fs.writeFile

/*
  In this case, the code is not blocking. We tell the OS
  to write the content to the file, and whenever its done
  the callback function passed will be run.
*/
fs.writeFile(
  "./files/created-async-callback.txt",
  "Created a file in a synchronous way using fs.writeFile",
  (error) => {
    /*
    The callback function receives 1 arguments: error, which will be
    falsy (null, undefined) if everything went well
  */

    if (error) {
      console.error("writeFile async (callback) error: ", error);
      process.exit(1);
    }
    console.log("writeFile async (callback): ");
  }
);

//fs.promises.writeFIle

/*
  With the promises version, we get a promise (like with fetch)
  and we can use the `.then` and `.catch` method.
  the .then callback receives will be called on success, whenever the OS is done writing the file
  the .catch callback receives the error, in case there is an error
*/
fs.promises
  .writeFile(
    "./files/created-async-promises.txt",
    "Created a file in a synchronous way using fs.promises.writeFile"
  )
  .then(() => {
    console.log("readFile async (promises): ");
  })
  .catch((error) => {
    console.error("readFile async (promises) error: ", error);
    process.exit(1);
  });
