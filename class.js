export default class firstClass {
    sum(a, b){
    const value = a + b;
    return value;
    }
    sub(a, b){
    const value = a - b;
    return value;
    }
}

Module.exports = new firstClass();