///////////////////////////////////////////////
// MemberFactory using Classes (ES6)

class MemberFactory {
  createMember(name, type) {
    let member;

    if (type === 'simple') {
      member = new SimpleMembership(name);
    } else if (type === 'standard') {
      member = new StandardMembership(name);
    } else if (type === 'super') {
      member = new SuperMembership(name);
    }
    //I just assigned the 'type' inside the Membership

    member.define = function () {
      console.log(`${this.name} (${this.type}) ${this.cost}`);
    };
    return member;
  }
}

class SimpleMembership {
  constructor(name) {
    this.name = name;
    this.type = 'simple';
    this.cost = '$5.00';
  }
}

class StandardMembership {
  constructor(name) {
    this.name = name;
    this.type = 'standard';
    this.cost = '$10.00';
  }
}

class SuperMembership {
  constructor(name) {
    this.name = name;
    this.type = 'super';
    this.cost = '25.00';
  }
}
const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('John Johnson', 'simple'));
members.push(factory.createMember('Mary Williams', 'standard'));
members.push(factory.createMember('Harry Jones', 'standard'));
members.push(factory.createMember('Lisa Kudrow', 'super'));
members.forEach(member => member.define());

///////////////////
// again with class but different code:
// class SimpleMembership {
//   constructor(name) {
//     this.name = name;
//     this.type = 'simple';
//     this.cost = '$5.00';
//   }
// }

// class StandardMembership {
//   constructor(name) {
//     this.name = name;
//     this.type = 'standard';
//     this.cost = '$10.00';
//   }
// }

// class SuperMembership {
//   constructor(name) {
//     this.name = name;
//     this.type = 'super';
//     this.cost = '25.00';
//   }
// }

// class MemberFactory {
//   constructor() {
//     this.createMember = (name, type) => {
//       switch (type) {
//         case 'simple':
//           return new SimpleMembership(name);
//           break;

//         case 'standard':
//           return new StandardMembership(name);
//           break;

//         case 'super':
//           return new SuperMembership(name);
//           break;
//       }
//     };
//   }
// }

// const members = [];
// const factory = new MemberFactory();
// members.push(factory.createMember('John Johnson', 'simple'));
// members.push(factory.createMember('Mary Williams', 'standard'));
// members.push(factory.createMember('Harry Jones', 'standard'));
// members.push(factory.createMember('Lisa Kudrow', 'super'));

// function print() {
//   console.log(`${this.name} ${this.type}: ${this.cost}`);
// }

// members.forEach(member => {
//   print.call(member);
// });

// class Hero {
//   constructor(name, specialAbility) {
//     // setting property values
//     this._name = name;
//     this._specialAbility = specialAbility;
//   }
//   // declaring a method on the object
//   getDetails = function () {
//     return `${this._name} can ${this._specialAbility}`;
//   };
// }

// // creating new instances of Hero
// const IronMan = new Hero('Iron Man', 'fly');

// console.log(IronMan.getDetails()); // Iron Man can fly
