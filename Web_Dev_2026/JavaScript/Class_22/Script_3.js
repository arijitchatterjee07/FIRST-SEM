let str = prompt();
let arr = [];

if (str) 
    {
    let wordArr = str.trim().split(" ");
    for (let i = 0; i < wordArr.length; i++) 
    {
        if (wordArr[i] !== "") 
        {
            arr.push(wordArr[i]);
        }
    }
    for (let j = 0; j < arr.length; j++) 
    {
        arr[j] = arr[j].charAt(0).toUpperCase() + arr[j].slice(1);
    }
    let mystr = arr.join(" ");
    console.log(mystr);
}