const contacts = [
    {
        firstname: "Arijit",
        number: "420"
    },
    {
        firstname: "Devesh",
        number: "240"
    },
    {
        firstname: "Tushar",
        number: "6996"
    }
];

let str = prompt("Enter a name:\t");

function lookUpProfile(nameToFind) {
    let found = false;
    for (let i = 0; i < contacts.length; i++) 
    {
        if (contacts[i].firstname == nameToFind) 
        {
            console.log(contacts[i].number);
            found = true;
            break; 
        }
    }

    if (!found) {
        console.log("No Such Contact");
    }
}

lookUpProfile(str);