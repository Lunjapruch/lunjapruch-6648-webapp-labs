function readInput(){
    let inputArray = [];
    while (true) {
        let input = prompt("Enter a positive integer(Or Negative number to stop):");
        if(!isNaN(input) && Number(input) > 0 && Number.isInteger(Number(input))){
            inputArray.push(Number(input));
        }
        else if (!isNaN(input) && Number(input) < 0 && Number.isInteger(Number(input))){
            break;
            }
        else{
            continue;
        }
 }
    return inputArray;
}
function sumArray(inputArray){
    let sum = 0;
    for (let i = 0; i < inputArray.length; i++) {
        sum += inputArray[i];
    }
    return sum;
}
function findMax(inputArray){
    let max = inputArray[0];
    for (let i = 1; i < inputArray.length; i++) {
        if (inputArray[i] > max) {
            max = inputArray[i];
        }
    }
    return max;
}
function findMin(inputArray){
    let min = inputArray[0];
    for (let i = 1; i < inputArray.length; i++) {
        if (inputArray[i] < min) {
            min = inputArray[i];
        }
    }
    return min;
}
function displayStats(list) {
  let average = list.length > 0 ? (sumArray(list) / list.length).toFixed(2) : 0;
  let min = list.length > 0 ? findMin(list) : 0;         
  let max = list.length > 0 ? findMax(list) : 0;         

  let output = document.getElementById("output");
  alert(`For The list:${list.join(",")} the average is : ${average},the minimum is : ${min},the maximum is : ${max}`);
}
let Numberlist = readInput();
displayStats(Numberlist);