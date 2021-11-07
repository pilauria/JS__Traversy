/* ES6 promises: alternative of callbacks (alternative ways of handling async operation) 
And they're called promises because while they're handling asynchronous operations, they can
promise to do something when that operation is finished. We handle a promise response
with a .then 
The use of callbacks is a necessity in order to handle asynchronous events. It works but if we have to deal with a series of such events we end up with nested code, which we often refer to as 'callback hell'. The promise implementation helps with an improved code structure, by chaining .then calls and handling the promise result rather than having callback functions depending on the previous callback functions.*/

const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' },
];

function createPost(post) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject('Error: Something went wrong');
      }
    }, 2000);
  });
}

function getPosts() {
  setTimeout(function () {
    let output = '';
    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({ title: 'Post Three', body: 'This is post three' })
  .then(getPosts)
  .catch(function (err) {
    console.log(err);
  });
