function fibonacchi(length){
    let series = [0, 1];
    let currentdata;
    for(i=2;i<length;i++){
        currentdata = series[i-1] + series[i-2];
        series.push(currentdata);
    }
    console.log(`${series}`);
}
fibonacchi(5);