function sortArrayBy2Criteria(array) {

    array.sort(function(a, b){
        // ASC  -> a.length - b.length
        // DESC -> b.length - a.length
        return a.length-b.length ||a.localeCompare(b);
    });


    for (let i=0;i<array.length;i++){
        console.log(array[i])
    }

}
sortArrayBy2Criteria(["John",'Joaa','Joannn']);