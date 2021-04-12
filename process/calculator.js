/*
Make a calculator CLI
It receives arguments:
`node calculator.js operator op1 op2`
operator can be `+ or -`
op1 and op2 should be numbers

It logs to the console the result of executing the operation on both operands
*/

// Get the arguments
const args = process.argv.slice(2);

// If args is an empty array, exit and explain reason
if (args.length < 3) {
  console.error(
    "Error: Program requires 3 arguments: operator[+ or - ] op1 op2"
  );
  // Exit code 9 is used for invalid arguments
  process.exit(9);
}

// Using destructuring, really handy
const [operator, op1, op2] = args;

switch (operator) {
  case "+":
    console.log(`${op1} + ${op2} = ${Number(op1) + Number(op2)}`);
    break;
  case "-":
    console.log(`${op1} - ${op2} = ${Number(op1) - Number(op2)}`);
    break;
  default:
    // in case the operator is another one
    console.error(
      `Error: unrecognzed operator ${operator}. Supported operators: + and -`
    );
    process.exit(9);
    break;
}
