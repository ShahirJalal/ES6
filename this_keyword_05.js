// In a method, this refers to the owner object
// Alone, this refers to the global object (window)
// In a function, it refers to the global object
// In a function, in a strict mode, its undefined
// In a event, this refers to the element that receive the event
// Methods like call() and apply() can refer this to any object

const user_1 = {
    firstName: 'Sara',
    lastName: 'Smith',
    id: 100,
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
};

const user_2 = {
    firstName: 'Kim',
    lastName: 'Smith',
    id: 102,
    fullName: function(){
        return this;
    }
};

// In an object method, this refers to the "owner" of the method
// The user object is the owner of the method
console.log(user_1);
console.log(user_1.fullName());

console.log(user_2)
console.log(user_2.fullName());

// This alone
// In a browser the global object is window
const x = this;
console.log(x);

// This in the function
// In JS function, the owner of the function is the default binding for this
// It means this refers to the global object

function myFunction() {
    return this;
}

console.log(myFunction());