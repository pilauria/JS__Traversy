<h1> Singleton </h1>

<font size="4"><strong > Sigleton </strong>is a coding pattern in which an object called singleton is created. Javascript doesn't know what singleton means, however within your application you are able to use this pattern to instantiate only one object which will be used throughout the application.

A Singleton object is an immediate anonymous function, and it can only return one instance of an object at a time.
So repeated calls to the constructor will just return the same instance.
And like the module pattern, it maintains a private reference, which nothing from the outside can access.

Imagine having one resource/object that you want to be shared in your application. This pattern allows you to create an object that has only one instance. For lack of a better example, think about an application that allows multiple users to control volume. When one user sets the volume to 8, it is set globally throughout the application. If another user wants to control the volume, they will start from 8. If they change it to 4, the application updates the volume to 4 so all users get a volume of 4. Applications with such object model functionality are called singletons. We all know objects can be instantiated multiple times. If you need to control that, and have only one, you would create a singleton object.

A common use for a singleton is to access a config file. There's only ever one config file, so every item you access it you want to access the same data. and if you modify the data, you want the new version to be available everywhere.

A note on classes:

All classes must begin with an uppercase letter.<br/>
Can you use a lower case letter? Yes you can. But the best practices are that if you are creating a class you start with an Uppercase. Starting with lowercase will not break your code, but it wont tell another developer right away that this is a class. If you used a capital letter, i would know right away this is some kind of class... In this case a singleton class. Hope this is clear now. <br/>

I tend to use singletons in these cases:

- Logging
- Caches
- Thread Pools
- Config settings
- Device Driver objects
- Database objects  
  <br>
  </font>
