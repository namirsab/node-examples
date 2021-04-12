/*
  In the browser, we get access to a lot of APIs that are part of the
  browser only, such as the "document" or the "window"
  These don't exist in Node (we don't have a document or a window here)
  If we try to access them, we will get an error
  "ReferenceError: document is not defined"
*/

console.log(document);
