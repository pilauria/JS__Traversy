<h1>Mediator Pattern</h1>

https://www.dofactory.com/javascript/design-patterns/mediator

The Mediator pattern provides central authority over a group of objects by encapsulating how these objects interact. This model is useful for scenarios where there is a need to manage complex conditions in which every object is aware of any state change in any other object in the group.

In lecture 99 a chatroom is being made.

The orignal code for the chatroom Class is as follows:

```
// OPTION 1 FOR CHATROOM

const Chatroom1 = function () {
 let users = {}; //list of users object (not array)

 return {
   register: function (user) {
     users[user.name] = user;
     user.chatroom = this;
     // console.log(users);
   },
   send: function (message, from, to) {
     if (to) {
       //single user message
       to.receive(message, from);
     } else {
       //Mass message - sends to all users except self
       for (key in users) {
         if (users[key] !== from) {
           users[key].receive(message, from);
         }
       }
     }
   }
 }
}
```

Rewritten code option 1:

```
//OPTION 2 FOR CHATROOM

const Chatroom2 = function(){
  this.users = [];
}

Chatroom2.prototype = {
  register: function (user) {
    this.users.push(user);
    user.chatroom = this;
    console.log(`${user.name} is registered`);
  },
  send: function (message, from, to) {
    if (to) {
      to.receive(message, from);
    } else {
      this.users.forEach(user => {
        if (user !== from) {
          user.receive(message, from);
        }
      });
    }
  }
}
```

Rewritten code option 2:

```
//OPTION 3 FOR CHATROOM

const Chatroom3 = function(){
  this.users = [];
}
Chatroom3.prototype.register = function(user){
  this.users.push(user);
  user.chatroom = this;
  console.log(`${user.name} is registered`);
}

Chatroom3.prototype.send = function(message, from, to){
  if (to) {
    to.receive(message, from);
  } else {
    this.users.forEach(user => {
      if (user !== from) {
        user.receive(message, from);
      }
    });
  }
}
```

All three ways do exactly the same but I wondered a few things:

- Why is an object of users made instead of an array? Isn't an array better in performance when data sets become larger?
- Why aren't prototypes used for this function like Brad specifically propagates from 1:40. It seems a bit inconsistent.
- I always learnt that it is better to keep methods smaller so unit testing is easier. Wouldn't option 3 be a better way of doing things in that light?

Was wondering if anybody could chime in. Cheers! Kind regards

Answer:

An object is much quicker to look up than an array. Any array operation would need to iterate over the array to to find/do the thing you want. Whereas in an object the property you want is immediately available, it's a much more efficient operation.

You can use prototypes as you've found, Brad's code uses a closure for the users, though I don't think he explicitly mentions this.
Closures in JavaScript are a very powerful concept to use, you'll find closures used together with a more functional programing approach, though it's certainly not limited to functional programming, as here. You don't have to use one or the other.

I would say in terms of testing, avoiding `this` and prototypal inheritance entirely would be simpler, easier to reason about and less prone to error.
