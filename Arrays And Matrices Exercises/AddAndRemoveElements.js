function addAndRemoveElements(array) {

    let addPower=1;
    let numbersArr=[];

    for (let i=0;i<array.length;i++){

        let currentCommand=array[i];

         if(currentCommand==='add'){
             numbersArr.push(addPower);

         }
         else if(currentCommand==='remove'){
          numbersArr.splice(-1,1)
         }
        addPower+=1;
    }

    if(numbersArr.length>0){
       for (let i=0;i<numbersArr.length;i++){
           console.log(numbersArr[i])
       }
    }
    else{
        console.log("Empty")
    }


}
addAndRemoveElements(['add','add']);