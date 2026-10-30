// let var1;
// let var2;
// let var3;
// let var4;
// let var5;

// var1=1;
// var2=2.0;
// var3="Hii";
// var4="A";
// var5=968787978869;

// console.log("Outcome:",var1);
// console.log("Outcome:",var2);
// console.log("Outcome:",var3);
// console.log("Outcome:",var4);
// console.log("Outcome:",var5);

let i=1;
while(i<21)
{
    if(i%3 == 0)
    {
        console.log(i," is Fizz")
    }
    else if(i%5 == 0)
    {
        console.log(i," is Buzz")
    }
    else if(i%3 == 0 && i%5 == 0)
    {
        console.log(i," is FizzBuzz")
    }
    else
    {
        console.log(i," is other")
    }
}