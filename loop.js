function whileLoop() {
    //initialization, condition, execution/activity, increment/decrement
    const arrOne = ["One", 2, "Three"];
    let i=0;
    while(i<arrOne.length) {
        console.log(arrOne[i]);
        i++;
    }
}
function forLoop() {
    //initialization, condition, execution/activity, increment/decrement
    const arrOne = ["One", 2, "Three"];
    for(let i=0;i<arrOne.length;i++) {
        console.log(arrOne[i]);
    }
}
function condition(){
    const data = 2;
    if(data == 0){
        console.log(`${data} is Even number`);
    }else if(data%2 == 1 && data>0){
        console.log(`${data} is Odd number`);
    }else if(data%2 == 0 && data>0){
        console.log(`${data} is Even number`);
    }else{
        console.log("PLease enter a valid number");
    }
}
whileLoop();
forLoop();
condition();