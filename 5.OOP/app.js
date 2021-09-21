function Person(name, dob) {
  this.name = name;
  // this.age = age;
  console.log(this); //this inside of the object
  this.birthday = new Date(dob);
  //calculate the age from a birthday
  this.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}
console.log(this); // outside of the object give as the global object (Window)
// const brad = new Person('Brad', '36');
// const john = new Person('John', 30);

// console.log(john.age);

const brad = new Person('Brad', '9-10-1981');
console.log(brad);
console.log(brad.calculateAge());

// // Person constructor
// function Person(name, dob) {
//   this.name = name;
//   // this.age = age;
//   this.birthday = new Date(dob);
//   this.calculateAge = function(){
//     const diff =  Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   }
// }

// // const brad = new Person('Brad', 36);
// // const john = new Person('John', 30);

// // console.log(john.age);

// const brad = new Person('Brad', '9-10-1981');
// console.log(brad.calculateAge());
