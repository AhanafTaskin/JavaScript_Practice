const data = [30, 5, 65, 68, 25, 36, 95, 100]
function getMax(arrayData){
let maxData = arrayData[0];
for(let i=0;i<arrayData.length;i++){
    if(arrayData[i]>maxData){
        maxData=arrayData[i];
    }
}
return maxData
}
function getMin(arrayData){
let minData = arrayData[0];
for(let i=0;i<arrayData.length;i++){
    if(arrayData[i]<minData){
        minData=arrayData[i];
    }
}
return minData;
}
function minOrMax(array, type){
    let result;
    if(type == "min"){
        result = getMin(array);
        return result;
    }
    else if(type == "max"){
        result = getMax(array);
        return result;
    }
}
console.log(minOrMax(data, "min"));
console.log(minOrMax(data, "max"));
const dataA = "5";
const dataB = parseInt(dataA);
console.log(dataB);
