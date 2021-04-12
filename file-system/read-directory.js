/*
  We use the fs module (short for file system) to deal with the file system
  from the OS
*/
const fs = require("fs");

/*
  To read the contents of a directory the fs module gives us some functions:
  fs.readdirSync(path, data) (to read a directory in a synchronous/blocking manner)
  fs.readdir(path, data, errorFirstCallbackFn) (tto read a directory in async manner using callbacks )
  fs.promises.readdir(path, data) (tto read a directory in async manner, using promises (.then))
*/

//fs.readdirSync

try {
  const directoryContent = fs.readdirSync("./files", "utf-8");
  console.log("readdirSync: ", directoryContent);
} catch (error) {
  console.error("readdirSync error: ", error);
  process.exit(1);
}

//fs.readdir

fs.readdir("./files", "utf-8", (error, directoryContent) => {
  if (error) {
    console.error("readdir async (callback) error: ", error);
    process.exit(1);
  }

  console.log("readdir async (callback): ", directoryContent);
});

// fs.promises.readdir

fs.promises
  .readdir("./files", "utf-8")
  .then((directoryContent) => {
    console.log("readdir async (promises): ", directoryContent);
  })
  .catch((error) => {
    console.error("readdir async (promises) error: ", error);
    process.exit(1);
  });
