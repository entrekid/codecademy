// Dot Notation for accessing object properties


/*
Properties of JavaScript object can be accessed using the dot notation in this manner:
object.propertyName. Nested properties of an object can be accessed
by chanining key names in the correct order.


*/


const apple = {
    color: "Green",
    price: {
        bulk: "$3/kg",
        smallQty: "$5/kg"
    }
};

console.log(apple.color);
console.log(apple.price.bulk);


/* Restrictions in Naming Properties
Javascript object key names must adhere to some restrictions to be valid.
Key names must either be strings or valid identifier or variable names
*/

// Space cannot be retained
// Expressions cannot be keys
// use of + sign is invalid

// Objects
/* An object is a built-in data type for storing key-value pairs.
Data inside objects are unordered, and the value scan be of any type.*/

// Accessing non -existent JavaScript properties

/* Trying to access a javascript object property that has not been define yet,
the value of undefined will be returned by default.*/

const classElection = {
    "date": "January 12"
};
console.log(classElection.thing);

const student = {
    name: "Sheldon",
    score: 100,
    grade: "A",
}

console.log(student);

student.grade = "F";

console.log(student);

// student = {} # TypeError occured


// Javascript for .. in loop iterate over the keys of an object.
let mobile = {
    brand: "Samsung",
    model: "Galaxy Note 9"
}

for (let key in mobile) {
    console.log(`${key} : ${mobile[key]}`);
}

const person = {
    firstName: "Matilda",
    age: 27,
    hobby: "knitting",
    goal: "learning JavaScript"
};

console.log(person);

delete person.hobby;

console.log(person);

// Javascript passing objects as arguments

const origNum = 8;
const origObj = { color: 'blue' };

const changeItUp = (num, obj) => {
    num = 7;
    obj.color = 'red';
};

changeItUp(origNum, origObj);

console.log(origNum); // 8 (x changed)
console.log(origObj); // obj.color = "blue";

// origNum didn't be changed for passing way(passed by value);
// origObj be changed for passing way(passed by reference);



// JavaScript Object Methods may have property values that are functions.
// These are referred to as object methods.

const engine = {
    start(adverb) {
        console.log(`The engine starts up ${adverb}...`);
    },

    sputter: () => {
        console.log('The engine sputters')
    },
};

engine.start('noisily');
engine.sputter();

// JavaScript destructuring assignment shorthand syntax

const rubiksCubeFacts = {
    possiblePermutations: '43,252,003,274,489,856,000',
    invented: '1974',
    largestCube: '17x17x17'
};

const { possiblePermutations, invented, largestCube } = rubiksCubeFacts;
console.log(possiblePermutations);
console.log(invented);
console.log(largestCube);

// shorthand property name syntax for object creation
/* The shorthand property name synax in JavaScript allows creating objects
without explicitly specifying the property names*/

const activity = 'Surfing';
const beach = { activity };
console.log(beach);

// this keyword
/* The reserved keyword this refers to a method's calling object, and it can be used to access properties
belonging to that object. Here, using the this keyword inside the object function
to refer to cat object and access its name property.*/

const cat = {
    name: "Pipey",
    age: 8,
    whatName() {
        return this.name
    }
};

console.log(cat.whatName());

// Javascript function this
/* Every javascript function or method has a this context. for a fucntion
defined inside of an object, this will refer to that object itself.
*/

// *** arrow function do not have their own this context.

// A Javascript function that returns an object is known as a factory function.

const myCat = {
    _name: "Snickers",
    get name() {
        return this._name
    },

    set name(newName) {
        if (typeof newName === "string" && newName.length > 0) {
            this._name = newName;
        } else {
            console.log("Error: name must be a non-empty");
        }
    }
}

console.log(myCat.name);
myCat.name = "thiong";
console.log(myCat.name);

/* Javascript object properties are not private or protected.
since javascript objects are passed by reference. there is no way to fully
prevent incorrect interactions with object properties.
one way to implement more restricted interactions with object
properties is to use getter and setter methods.*/