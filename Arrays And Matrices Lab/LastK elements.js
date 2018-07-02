function lastKelements(firstNumber,secondNumber) {

    let numberArr=[];
    numberArr[0]=1;


    let sum=0;
    let secondNumberCopy=secondNumber

    for (let i=1;i<firstNumber; i++){

         for (let j=0; j<secondNumber;j++){

             let lastNumber=numberArr[i-secondNumberCopy]
             if(i-secondNumberCopy>=0) {
                 sum += lastNumber
             }
             secondNumberCopy--

         }
numberArr[i]=sum
        sum=0
        secondNumberCopy=secondNumber
    }
console.log(numberArr.join(" "))

}
lastKelements(8,2)