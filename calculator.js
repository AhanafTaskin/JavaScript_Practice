function sum(a, b){
    const value = a + b;
    return value;
}
function sub(a, b){
    const value = a - b;
    return value;
}
function multiplication(a, b){
    const value = a * b;
    return value;
}
function division(a, b){
    const value = a / b;
    return value;
}
function calculator(type, val1, val2){
    let result;
    if(type=="sum"){
        result = sum(val1, val2);
        return result;
    }
    else if(type=="sub"){
        result = sub(val1, val2);
        return result;
    }
    else if(type=="multiplication"){
        result = multiplication(val1, val2);
        return result;
    }
    else if(type=="division"){
        result = division(val1, val2);
        return result;
    }
}
console.log(calculator("sum", 6, 2));
console.log(calculator("sub", 6, 2));
console.log(calculator("multiplication", 6, 2));
console.log(calculator("division", 6, 2));