function printArrayWithGivenDelimiter(arrayNumbers) {

    let delimiter=arrayNumbers[arrayNumbers.length-1];
   arrayNumbers.splice(arrayNumbers.length-1,1);
console.log(arrayNumbers.join(`${delimiter}`))
}
printArrayWithGivenDelimiter([2,3,5,6,1,'-']);