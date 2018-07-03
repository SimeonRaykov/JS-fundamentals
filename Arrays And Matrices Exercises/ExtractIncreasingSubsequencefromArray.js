function extractIncreasingSubsequencefromArray(array) {

    for (let i=1;i<array.length;i++){
    let lastElement=array[i-1];
    let currentElement=array[i];

if(currentElement<lastElement){
    array.splice(i,1);
    lastElement=array[i--]
}

    }

    for (let i=0;i<array.length;i++){
        console.log(array[i])
    }

}
extractIncreasingSubsequencefromArray([2,3,5,2,2,2,2,2]);