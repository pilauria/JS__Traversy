function MemberFactory() {
  this.createMember = function (name, type) {
    let member;

    if (type === 'simple') {
      member = new SimpleMembership(name);
    } else if (type === 'standard') {
      member = new StandardMembership(name);
    } else if (type === 'super') {
      member = new SuperMembership(name);
    }

    member.type = type;

    member.define = function () {
      console.log(`${this.name} (${this.type}): ${this.cost} `);
    };

    return member;
  };
}

const SimpleMembership = function (name) {
  this.name = name;
  this.cost = '$5';
};

const StandardMembership = function (name) {
  this.name = name;
  this.cost = '$15';
};

const SuperMembership = function (name) {
  this.name = name;
  this.cost = '$25';
};

const members = [];
const factory = new MemberFactory();
members.push(factory.createMember('John Doe', 'simple'));
members.push(factory.createMember('Mimmo Foe', 'standard'));
members.push(factory.createMember('Mommo Zoe', 'super'));
members.push(factory.createMember('Mwmmw Zoe', 'super'));

// console.log(members);

members.forEach(function (member) {
  member.define();
});

///////////////////////////////////
// MembeFactory using closures

// function MemberFactory() {
//   const types = {
//     simple: '$5',
//     standard: '£15',
//     super: '$25',
//   };
//   return {
//     define({ name, type }) {  // **** descructuring assignment in the function argument ****
//       console.log(`${name} (${type}): ${types[type]}`);
//     },
//     createMember(name, type) {
//       return {
//         name,
//         cost: types[type],
//         type,
//       };
//     },
//   };
// }

// const members = [];
// const factory = MemberFactory();

// members.push(factory.createMember('John Doe', 'simple'));
// members.push(factory.createMember('Chris Jackson', 'super'));
// members.push(factory.createMember('Janice Williams', 'simple'));
// members.push(factory.createMember('Tom Smith', 'standard'));

// // console.log(members);

// members.forEach(factory.define);

// // ****  same as:
// function define(member) {
//   console.log(`${member.name} (${member.type}): ${types[member.type]}`)
// }
// // Just like if we have a plain member object..

// const member = {
//   name: 'John Doe',
//   type: 'super'
// }

// const { name, type } = member
