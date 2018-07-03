function rotateArray(array) {

    let rotations=array[array.length-1];
    array.splice(array.length-1,1);
    
    for (let i=0;i<rotations%array.length;i++){
        let lastElement=array[array.length-1];
        let firstElement=array[0];
        array.splice(array.length-1,1);
        array.unshift(lastElement)


    }
console.log(array.join(" "))
}
rotateArray([1,2,3,5]);