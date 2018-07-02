function processOddNumbers(numbersArr) {

  numbersArr= numbersArr.filter(function (element,index,array) {

       return(index%2!==0)
   })
    
    numbersArr=numbersArr.map(function (value) {
        return value*2
        
    })
    numbersArr.reverse()

console.log(numbersArr.join(" "))

}
processOddNumbers([10,15,20,25])
