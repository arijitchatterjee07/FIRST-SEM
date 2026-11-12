let userName = prompt("Enter User Name");
let userRoll = Number(prompt("Enter User Roll Number"));
let userClass = prompt("Enter User Class");

let user =
{
    userName,
    userRoll,
    userClass,
    assignValue: function (Username, Userroll, Userclass) 
    {
        this.userName = Username,
        this.userRoll = Userroll,
        this.userClass = Userclass
    },
    greet: function()
    {
        console.log(this.userName,this.userRoll,this.userClass);
    }
}

user.assignValue(userName,userRoll,userClass);

user.greet();