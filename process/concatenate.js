/*
  Make a CLI that concatenates all the strings given 
  with the given delimiter
  E.g
  node concatenate.js ; string1 string2 string3
  node concatenate.js delimiter ...strings (this means any amount of arguments)
  string1;string2;string3
*/

const args = process.argv.slice(2);

// We need minimum 3 arguments, delimiter and 2 strings

if (args.length < 3) {
  console.error(
    "Error: Program requires at least 3 arguments: delimiter string1 string2"
  );
  process.exit(9);
}

/*
  The following syntax means:
  Put the first element in the array args in the const variable "delimiter"
  Put the rest of elements of the array args (from index 1 until the end)
  in the variable strings
*/
const [delimiter, ...strings] = args;

/*
  The .join method of an array puts all elements of the array
  together in one string joined by the string passed. In this case
  we pass the "delimiter"
*/
console.log(strings.join(delimiter));
