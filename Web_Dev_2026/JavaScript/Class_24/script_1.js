let student =
{
    name: "Aarav",
    age: 18,
    course: "B.Tech CSE",
    subjects: ["DSA","Web Dev","Math"],
    isEnrolled: true
};

console.log(student);

console.log(student.name);

console.log(student.age);

console.log(student.subjects[1]);

let key = "course";
console.log(student[key]);

student.graduationYear = 2026;

let ie = "isEnrolled";
student[ie] = false;

student["age"] = 20;

delete student.name;

console.log(student);

