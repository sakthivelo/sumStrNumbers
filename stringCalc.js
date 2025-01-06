function sumStrNumbers(num){
    if(!num.length) return 0;
    
    let delim = /,|\n/;
    
    if (num.startsWith("//")) {
        const delimiterEnd = num.indexOf("\n");
        delim = new RegExp(num.substring(2, delimiterEnd));
        num = num.substring(delimiterEnd + 1);
    }
    
    const numArr = num.split(delim);

    const sum = numArr.reduce((total, number) => {
        const parsedNum = parseInt(number);
        if (isNaN(parsedNum)) return total;
        
        return total + parsedNum;
    }, 0);
    
    return sum;
}
console.log(sumStrNumbers(""),sumStrNumbers("1"),sumStrNumbers("1,3"),sumStrNumbers("1\n3,4"))
console.assert(sumStrNumbers("") === 0, 'Test Failed: "" should return 0');
console.assert(sumStrNumbers("1") === 1, 'Test Failed: "1" should return 1');
console.assert(sumStrNumbers("1,2") === 3, 'Test Failed: "1,2" should return 3');
console.assert(sumStrNumbers("1\n3,4") === 8, 'Test Failed: "1\n3,4" should return 8');


