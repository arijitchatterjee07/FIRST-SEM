function fn() {
    console.log("Hello");
}
fn();

function fnwithpara(val1, val2) {
    console.log(val1, "+++++", val2);
}
fnwithpara(49, 59);

function fnreturn(num) {
    let IsEven = num % 2 === 0;
    return IsEven;
}
console.log(fnreturn(4));