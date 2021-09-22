Design patterns help us solve common problems in software development. They make our code easy to maintain and bug free. These are particularly useful in large applications.

Modules are used so that we can 'import' stuff from one script to another, and then import a single entry point script in our main index.html file. That script can be compiled through something like Babel and it can use multiple scripts that import other things from other scripts (these bits that are imported are the modules). It's like a central entry point for the app. It has its ups and downs in terms of maintainability, but basically modules are a more agile way to pass around functionality in the app and ultimately maintain it in a single place.