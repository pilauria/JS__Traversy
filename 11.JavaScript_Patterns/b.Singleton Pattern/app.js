// Is a manifestation of the module pattern
/* This "Singleton" object exposes an API with one public method (getInstance). All getInstance is doing is making sure that "instance" (which is the object that needs to be created) exists or not. If it exist, there is no need to create a new object -- { } OR new Object(), if it doesn't exist, then that object will be created and created only once. So the next time anyone tries to instantiate it, that IF statement runs and says ... i am here! dont create a new object...just return whats in memory.*/

const Singleton = (function () {
  let instance;

  function createInstance() {
    const object = new Object({ name: 'Brad' });
    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();
console.log(instanceA === instanceB); // true: So we can never have more than one instance. So repeated calls to the constructor will just return the same instance.
//

console.log(instanceA);
