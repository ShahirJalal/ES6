// The constructor method is a special method,
// it has the exact name as constructor
// it is executed auto when new object is being created
// It is used to initialize the properties of an object
// If we dont define the constructor function, JS
// will add an empty constructor function

// JS classes are the templates for JS objects
// a JS class IS NOT AN OBJECT


// Syntax
// class ClassName{
//     constructor(){

//     }
// }

// This class has two initial properties
// class Student{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;

//     }
// }

// We can use classes to create objects
// const student_1 = new Student('Sara', 22);
// const student_2 = new Student('Kim', 25);

// console.log(student_2, student_1);

class Student{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    dob(){
        let date = new Date();
        return date.getFullYear() - this.age;
    }
}

let student_1 = new Student('Sara', 1990);
document.body.innerHTML = `${student_1.name} is ${student_1.dob()}`;