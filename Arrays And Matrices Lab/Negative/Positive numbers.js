function negativePositiveNumbers(numbersArray) {

    numbersArray=numbersArray.map(Number);

    let sortedArray=[];

    for (let i=0;i<numbersArray.length;i++){

        if(numbersArray[i]>=0){
sortedArray.push(numbersArray[i])
        }
        else{
            sortedArray.splice(0,0,numbersArray[i])
        }
    }

    console.log(sortedArray.join(" "))

}

negativePositiveNumbers(['7','-2','8','9'])