function smallestTwoNumbers(numbersArray) {

    numbersArray.sort(function (a,b) {
        return a-b
    });

   let smallestNumbers= numbersArray.slice(0,2);

    console.log(smallestNumbers.join(" "))


}
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);