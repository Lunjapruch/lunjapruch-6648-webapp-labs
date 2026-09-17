const readline = require('readline/promises');

const args = process.argv.slice(2);
const num1 = Number(args[0]);
const num2 = Number(args[1]);

if (args.length < 2 || isNaN(num1) || isNaN(num2)) {
  console.log('Please enter two numbers');
  process.exit(1);
}

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const operator = await rl.question('add | subtract ');
  rl.close();

  switch (operator.trim()) {
    case 'add':
      console.log(`${num1} + ${num2} = ${num1 + num2}`);
      break;
    case 'subtract':
      console.log(`${num1} - ${num2} = ${num1 - num2}`);
      break;
    default:
      console.log('Unknown operator');
  }
}

main();