let user={
    firstName:"ARIJIT",
    lastName:"CHATTERJEE",
    campus:"SUSHANT UNIVERSITY",
    email:'arijitchatterjee.india@gmail.com',
    age:19,
    mobile:9083997639,
    hobies:['Sports',"Coding","Music"],
    isAdult:true
}

console.log("Object:\t",user);

for(let k in user)
{
    console.log("Key:  ",k,"\t||\tvalue:  ",user[k]);
}