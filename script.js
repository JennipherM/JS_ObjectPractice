      //Object constructors  (function constructor)

//object named Person -- first, last, age, eye are properties 

function Person(first, last, age, eye) {
    
    //this references current object it is in
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }

  //making Person objects
  const myFather = new Person("John", "Doe", 50, "blue");
  const myMother = new Person("Sally", "Rally", 48, "green");
  const mySister = new Person("Anna", "Rally", 18, "green");
  const mySelf = new Person("Johnny", "Rally", 22, "green");

  document.getElementById("demo").innerHTML = myFather.firstName + " is " + myFather.age + " years old.";
    //John is 50 years old.


      //Object Methods

const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  //object method (still as a name:value pair)
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

//Access an object method --- objectName.methodName()

name = person.fullName();
  // John Doe

