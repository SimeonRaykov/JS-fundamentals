function pritEveryNthElement(array) {

    let step=parseInt(array[array.length-1]);
    array.splice(array.length-1,1);
    for (let i=0;i<array.length;i+=step){
        console.log(array[i])
    }
}
pritEveryNthElement(['dsa','asd','test','tset','2']);