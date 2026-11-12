let cap=
{
    fn: "Steve",
    ln: "Rogers",
    isAvenger: true,
    address:{
        country:"USA",
        state:"New York",
        city:"Manhattan"
    },
    enemies:["Iron Man","Thanos","ultron","Red Skull"],
    greet: function()
    {
        console.log("Cap says HI");
    }
}

console.log('City',cap.address.city);
console.log("Last Enemy",cap.enemies[cap.enemies.length-2]);

cap.greet();