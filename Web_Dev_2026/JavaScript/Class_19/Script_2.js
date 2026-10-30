// let a=[1,2,3,4,5];
// for (let i=0;i<a.length;i++)
// {
//     console.log("index",i,"value",a[i]);
// }

// a.push(100);
// console.log("Array",a);
// console.log("Length",a.length);
// a.pop();
// console.log("Array",a);
// console.log("Length",a.length);

let arr = [3, 5, 6, 9, 3, 2, 4, 6, 9];
console.log("Before:", arr);
let n = arr.length;
for (let j = 0; j < n - 1; j++) 
    {
    for (let k = 0; k < n - 1 - j; k++) 
        {

        if (arr[k] > arr[k + 1]) {
            let t = arr[k];
            arr[k] = arr[k + 1];
            arr[k + 1] = t;
        }
    }
}
console.log("After:", arr);