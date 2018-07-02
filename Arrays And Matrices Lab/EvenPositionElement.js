function evenPostionElement(arrNumber) {

arrNumber=arrNumber.filter(function (element,index,array) {

    return(index%2===0)

});

for (let i=0;i<=arrNumber.length;i++){

    if(arrNumber[i]===0){
        arrNumber.remove(arrNumber[i])
    }

}

    console.log(arrNumber.join(" "))

}
evenPostionElement(['JS']);