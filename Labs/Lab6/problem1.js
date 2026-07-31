function validateInput(input) {
    let number = Number(input);
    if(Number.isInteger(number) && number > 0){
        return true;
    }
    else if (isNaN(number)) {
        return false;
    }
    else {
        return false;
    }
}
function findPrimes(limit) {
  let primes = [];
  
  outerLoop: for (let i = 2; i <= limit; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        continue outerLoop;  
      }
    }
    primes.push(i);  
  }
  
  return primes;
}
function displayPrimes(primes,limit) {
  let output = document.getElementById("output");
  output.textContent = `Prime numbers up to ${limit}: ${primes.join(", ")}`;
}
let input = prompt("Enter a positive integer:");
while (!validateInput(input)) {
    input = prompt("Invalid input. Please enter a positive integer:");
  }
  let limit = Number(input);
  let primes = findPrimes(limit);
  displayPrimes(primes, limit);