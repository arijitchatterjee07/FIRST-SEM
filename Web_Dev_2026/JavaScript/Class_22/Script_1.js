let n = prompt();
for (let i = 1; i <= n; i++) {
    let s = "";
    for (let j = 1; j <= i; j++) {
        s = s + j + " ";
    }
    console.log(s);
}