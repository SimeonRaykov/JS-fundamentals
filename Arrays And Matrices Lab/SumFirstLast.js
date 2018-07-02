function  sumFirstLast(numbers) {

    numbers=numbers.map(Number);

    let first=numbers[0];
    let last=numbers[numbers.length-1];
    let sum=first+last;

    console.log(sum)
}
sumFirstLast(["10", "20", "30", "40", "50"]);