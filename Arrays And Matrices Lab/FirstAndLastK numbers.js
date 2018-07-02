function firstAndLastKnumbers(numbersArray) {

    let numbersToGet=numbersArray[0]
    let firstNumbersToGet=numbersArray.slice(1,numbersToGet+1)

    console.log(firstNumbersToGet.join(" "))

    let index = numbersArray.indexOf(numbersToGet)

    if (index !== -1){
        numbersArray.splice(index,1)
    }

    numbersArray.reverse()
    let secondNumbersToGet=numbersArray.slice(0,numbersToGet)
    secondNumbersToGet.reverse()
    console.log(secondNumbersToGet.join(" "))

}

firstAndLastKnumbers([2,5,6,8,9])