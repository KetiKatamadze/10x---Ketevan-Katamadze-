const diagnostics = {
  cpu: 80,
  memory: 70,
  disk: 90,
};

function calcAverage(arr){
    // const numbers = Object.values(x);
    const valueArr = []
    for(const value in arr){
        valueArr.push(arr[value])
    }
    // return valueArr

    const valueSum = valueArr.reduce((a,b) => a+b,0);
    // return valueSum
    const avarageValue = valueSum / valueArr.length; 
    return `Average health: ${avarageValue}`
}

console.log(calcAverage(diagnostics))
