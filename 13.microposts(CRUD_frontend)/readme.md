<font size="4">

## production file

Once you want to compile your application (because right now it's just running in our local the server), if you want to compile it down to your build file, all you have to do is run,

`npm run build`

and that's going to go ahead and compile everything down.

Even if you had, you know, 20 or 30 different modules, it's all going to go to that one file.

So this is what to include in production (you can just upload this right to your shared host.):
index.html
build folder
assets folder

Now, in this case, we have a back end. We're dealing with an API, which usually would be something built with node JS or Python or Ruby.

In this case, it's we're using the adjacent server, which mimics a real rest API.
In reality you would have your backend API on a server somewhere, usually a cloud server or VPs, maybe something like Digital Ocean or Heroku.

But as far as the client side, the stuff that we've worked on that can go anywhere.

## data (json-server)

to fetch the data from json-server (db.json) run on a separate terminal:

`npm run json:server`

json-server is for development and prototyping only.

It is not suitable for production and if you're going to the lengths of setting up a server you most likely will want to run something like express to serve static content and handle routing, then you may as well just use something else for the express ecosystem like mongoose and connect to a mongo database.

For a simple and basic database that you could use in a small deployed app like what we have here, if you want to <strong>show it off/portfolio</strong> it or whatever then I would have a look at using [easydb](https://easydb.io/)

You can do it all client side then with no server set up and host it on something like Netlify or Surge</font>
