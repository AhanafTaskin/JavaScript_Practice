function condition(data){
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
condition(5);
