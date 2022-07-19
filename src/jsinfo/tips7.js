import CodeSnippet from "../components/CodeSnippet";

// section 11
const tips7 = [
  {
    sectionTitle: "Promises, async/await",
    chapters: [
      {
        chapterTitle: "Introduction: callbacks",
        tips: [
          {
            content: (
              <>
                <p>
                  A function that does something asynchronously should provide a
                  callback argument where we put the function to run after it's
                  complete.
                </p>
                <p>For example, lets create a function that loads a script:</p>
                <CodeSnippet
                  code={`function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;
  script.onload = () => callback(script);
  document.head.append(script);
}

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
  alert('Cool, the script is loaded');
  alert( _ ); // _ is a function declared in the loaded script
});`}
                />
                <p>
                  Notice that the magic happens with <code>script.onload</code>.
                </p>
                <p>
                  What if we want to load a second and a third script after the
                  first one loads?
                </p>
                <CodeSnippet
                  code={`loadScript('/my/script.js', function(script) {

  loadScript('/my/script2.js', function(script) {

    loadScript('/my/script3.js', function(script) {
      // ...continue after all scripts are loaded
    });

  });

});`}
                />
                <p>Thats callback hell (aka Pyramid of Doom).</p>
                <p>
                  We didn't consider handling errors in the previous example,
                  lets do that:
                </p>
                <CodeSnippet
                  code={`function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error('Script load error for' + ' ' + src));

  document.head.append(script);
}


loadScript('/my/script.js', function(error, script) {
  if (error) {
    // handle error
  } else {
    // script loaded successfully
  }
});`}
                />
                <p>
                  Using callbacks for asynchronous coding is a viable approach
                  for perhapses two or three nested calls max, not more than
                  that.
                </p>
              </>
            ),
            seeMore: [""],
          },
        ],
      },
      {
        chapterTitle: "Promise",
        tips: [
          {
            content: (
              <>
                <p>The constructor syntax for a promise object is:</p>
                <CodeSnippet
                  code={`let promise = new Promise(function(resolve, reject) {
  // executor (the producing code, "singer")
});`}
                />
                <p>
                  The function passed to <code>new Promise</code> is called the{" "}
                  <code>executor</code>.
                </p>
                <p>
                  When the executor obtains the result, be it soon or late,
                  doesn't matter, it should call one of these callbacks:
                </p>
                <p>
                  - <code>resolve(value)</code> if the job is finished
                  successfully, with result <code>value</code>.
                </p>
                <p>
                  - <code>reject(error)</code> if an error has occurred,{" "}
                  <code>error</code> is the error object.
                </p>
                <p>
                  The promise object returned by the <code>new Promise</code>{" "}
                  constructor has these internal properties:
                </p>
                <p>
                  - <code>state</code> initially "<code>pending</code>", then
                  changes to either "<code>fulfilled</code>" when{" "}
                  <code>resolve</code> is called or "<code>rejected</code>" when{" "}
                  <code>reject</code> is called.
                </p>
                <p>
                  - <code>result</code> initially <code>undefined</code>, then
                  changes to <code>value</code> when <code>resolve(value)</code>{" "}
                  called or <code>error</code> when <code>reject(error)</code>{" "}
                  is called.
                </p>
                <CodeSnippet
                  code={`let promise = new Promise(function(resolve, reject) {
  // the function is executed automatically and immediately when the promise is constructed

  // after 1 second signal that the job is done with the result "done"
  setTimeout(() => resolve("done"), 1000);
});`}
                />
                <p>
                  <code>resolve</code> / <code>reject</code> expect only one
                  argument (or none) and will ignore additional arguments.
                </p>
                <p>
                  Executor usually does something asynchronously then call{" "}
                  <code>resolve</code> / <code>reject</code> after some time,
                  but it doesn't have to.
                </p>
                <p>
                  For instance, this we might start to do a job but then see
                  that everything has already been completed and cached acn call{" "}
                  <code>resolve</code> / <code>reject</code> immediately.
                </p>
                <p>
                  The properties <code>state</code> and <code>result</code> of
                  the Promise object are internal. We can't directly access
                  them. We can use the methods <code>.then</code>/{" "}
                  <code>.catch</code> / <code>.finally</code> for that. They are
                  described below.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  A Promise object serves as a link between the executor (the
                  "producing code" or "singer") and the consuming functions (the
                  "fans"), which will receive the result or error. Consuming
                  functions can be registered (subscribed) using the methods{" "}
                  <code>.then</code> and <code>.catch</code>.
                </p>
                <CodeSnippet
                  code={`promise.then(
  function(result) { /* handle a successful result */ },
  function(error) { /* handle an error */ }
);`}
                />
                <p>
                  The first argument of <code>.then</code> is a function that
                  runs when the promise is resolved and receives the result.
                </p>
                <p>
                  The second argument of <code>.then</code> is a function that
                  runs when the promise is rejected and receives the error.
                </p>
                <p>
                  If we are only intrusted in successful completions, we can
                  pass just the first function. If we are only interested in
                  errors, we an use <code>null</code> as the first argument or
                  use <code>.catch</code>.
                </p>
                <CodeSnippet
                  code={` // This
promise.then(null, (err)=>{
  console.log(err)
})

// is exactly the same as
promise.catch((err) => {
  console.log(err)
})`}
                />
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  We can use <code>.finally</code> for things like stopping
                  loading indicators, closing no longer needed connections, etc.
                </p>
                <p>
                  In <code>finally</code> we don't know whether the promise is
                  successful or not.
                </p>
                <p>
                  Note the following things about <code>finally</code>:
                </p>
                <ol>
                  <li>
                    <code>finally</code> has no arguments, so it doesn't get the
                    outcome of the previous handler.
                  </li>
                  <li>
                    <code>finally</code> handler "passes through" the result or
                    error to the next suitable handler.
                  </li>
                  <li>
                    It also shouldn't return anything, if it does, the returned
                    value is ignored.
                  </li>
                </ol>
                <CodeSnippet
                  code={`new Promise((resolve, reject) => {
  /* do something that takes time, and then call resolve or maybe reject */
})
  // runs when the promise is settled, doesn't matter successfully or not
  .finally(() => // stop loading indicator)
  // so the loading indicator is always stopped before we go on
  .then(result => show result, err => show error)`}
                />
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  Now, lets rewrite the <code>loadScript</code> function from
                  previous chapter using Promises:
                </p>
                <CodeSnippet
                  code={`// Using callbacks
function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error('Script load error for' + ' ' + 'src'));

  document.head.append(script);
}


// Using Promises
function loadScript(src) {
  return new Promise(function(resolve, reject) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error('Script load error for' + ' ' + 'src'));

    document.head.append(script);
  });
}

let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

promise.then(
  script => alert(script.src + ' ' + 'is loaded!'),
  error => alert('Error:' + ' ' + error.message)
);

promise.then(script => alert('Another handler...'));`}
                />
              </>
            ),
            seeMore: [""],
          },
        ],
      },
      {
        chapterTitle: "Promises chaining",
        tips: [
          {
            content: (
              <>
                <p>
                  Every call to a <code>.then</code> returns a new promise, so
                  that we can call the next <code>.then</code> on it.
                </p>
                <p>
                  When a handler returns a value, it becomes the result of that
                  promise, so the next <code>.then</code> is called with it.
                </p>
                <p>
                  A classic newbie error: technically we can also add many{" "}
                  <code>.then</code> to a single promise. This is not chaining.
                </p>
                <CodeSnippet
                  code={`let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000);
});

promise.then(function(result) {
  alert(result); // 1
  return result * 2;
});

promise.then(function(result) {
  alert(result); // 1
  return result * 2;
});

promise.then(function(result) {
  alert(result); // 1
  return result * 2;
});`}
                />
                <p>
                  What we did here is just several handlers to one promise. They
                  don't pass the result to each other; instead they process it
                  independently.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  A handler, used in <code>.then(handler)</code> may create and
                  return a promise.
                </p>
                <p>
                  In that case further handlers wait until it settles, and then
                  get its result.
                </p>
                <CodeSnippet
                  code={`new Promise(function(resolve, reject) {

  setTimeout(() => resolve(1), 1000);

}).then(function(result) {

  alert(result); // 1

  return new Promise((resolve, reject) => { // (*)
    setTimeout(() => resolve(result * 2), 1000);
  });

}).then(function(result) { // (**)

  alert(result); // 2

  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(result * 2), 1000);
  });

}).then(function(result) {

  alert(result); // 4

});`}
                />
                <p>Consider the following:</p>
                <CodeSnippet
                  code={`loadScript("/article/promise-chaining/one.js")
  .then(script => loadScript("/article/promise-chaining/two.js"))
  .then(script => loadScript("/article/promise-chaining/three.js"))
  .then(script => {
    // scripts are loaded, we can use functions declared there
    one();
    two();
    three();
  });
  
  
  // technically, we can also write it like this:
  loadScript("/article/promise-chaining/one.js").then(script1 => {
  loadScript("/article/promise-chaining/two.js").then(script2 => {
    loadScript("/article/promise-chaining/three.js").then(script3 => {
      // this function has access to variables script1, script2 and script3
      one();
      two();
      three();
    });
  });
});`}
                />
                <p>
                  The first variant (chaining) is preferred. In the second one,
                  the nested functions have access to outer variables (e.x last
                  one has access to <code>script 1</code>, <code>script 2</code>
                  , <code>script 3</code>), but the times where we need this are
                  the exception.
                </p>
                <p>skipping that Thenables note for now.</p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  <code>fetch()</code> returns a promise that resolves with{" "}
                  <code>response</code> object when the server responses with
                  headers, but before the full response is downloaded.
                </p>
                <p>
                  That <code>response</code> object has some methods like{" "}
                  <code>.text()</code> and <code>.json()</code> that also return
                  a promise that resolves when full text is downloaded.
                </p>
                <CodeSnippet
                  code={`fetch('/article/promise-chaining/user.json')
  .then(response => response.json())
  .then(user => console.log(user.name)); // John, got user name`}
                />
                <p>Consider the following:</p>
                <CodeSnippet
                  code={`// Make a request for user.json
fetch('/article/promise-chaining/user.json')
  // Load it as json
  .then(response => response.json())
  // Make a request to GitHub
  .then(user => fetch({"https://api.github.com/users/" + user.name}))
  // Load the response as json
  .then(response => response.json())
  // Show the avatar image (githubUser.avatar_url) for 3 seconds (maybe animate it)
  .then(githubUser => {
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    setTimeout(() => img.remove(), 3000); // (*)
  });`}
                />
                <p>
                  What if we want to do something after the image is removed
                  after 3s? there is no <code>Promise</code> being returned?
                </p>
                <p>Lets fix it:</p>
                <CodeSnippet
                  code={`fetch('/article/promise-chaining/user.json')
  .then(response => response.json())
  .then(user => fetch({"https://api.github.com/users/" + user.name}))
  .then(response => response.json())
  .then(githubUser => new Promise(function(resolve, reject) { // (*)
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    setTimeout(() => {
      img.remove();
      resolve(githubUser); // (**)
    }, 3000);
  }))
  // triggers after 3 seconds
  .then(githubUser => alert('Finished'));`}
                />
                <p>
                  Now <code>.then</code> handler in line <code>(*)</code>{" "}
                  returns new <code>Promise</code>, that becomes settled only
                  after the call of <code>resolve(githubUser)</code> in{" "}
                  <code>setTimeout</code> <code>(**)</code>. The next{" "}
                  <code>.then</code> in the chain will wait for that.
                </p>
                <p>
                  As a good practice, an asynchronous action should always
                  return a promise. That makes it possible to plan actions after
                  it; even if we don't plan to extend the chain now, we may need
                  it later.
                </p>
                <p>Lets break the above example into reusable function:</p>
                <CodeSnippet
                  code={`function loadJson(url) {
  return fetch(url)
    .then(response => response.json());
}

function loadGithubUser(name) {
  return loadJson('https://api.github.com/users/' + name);
}

function showAvatar(githubUser) {
  return new Promise(function(resolve, reject) {
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    setTimeout(() => {
      img.remove();
      resolve(githubUser);
    }, 3000);
  });
}

// Use them:
loadJson('/article/promise-chaining/user.json')
  .then(user => loadGithubUser(user.name))
  .then(showAvatar)
  .then(githubUser => alert('Finished'));`}
                />
                <p>
                  Note, for the millionth time, we didn't need to pass any
                  arguments to <code>showAvatar</code> because they are passed
                  by default. We only need to do so when we use a wrapper
                  function.
                </p>
              </>
            ),
            seeMore: [
              "https://javascript.info/promise-chaining#bigger-example-fetch",
            ],
          },
        ],
      },
      {
        chapterTitle: "Error handling with promises",
        tips: [
          {
            content: (
              <>
                <p>
                  The code of a promise executor and promise handlers has an
                  "invisible <code>try..catch</code>" around it. If an exception
                  happens, it gets caught and treated as a rejection.
                </p>
                <p>
                  In other words, we can either reject a promise with{" "}
                  <code>reject</code> (in the executor function), or really just{" "}
                  <code>throw</code> an error (either in an executor function or
                  in a promise handler).
                </p>
                <CodeSnippet
                  code={`// for executor, this:
new Promise((resolve, reject) => {
  throw new Error("Whoops!");
}).catch(alert); // Error: Whoops!

// is the same as:
new Promise((resolve, reject) => {
  reject(new Error("Whoops!"));
}).catch(alert); // Error: Whoops!

/////////////////////////////////

// for handlers:
new Promise((resolve, reject) => {
  resolve("ok");
}).then((result) => {
  throw new Error("Whoops!"); // rejects the promise
}).catch(alert); // Error: Whoops!`}
                />
                <blockquote className="blockquote">
                  <p>
                    What happens when a regular error occurs and is not caught
                    by <code>try..catch</code>? The script dies with a message
                    in the console. A similar thing happens with unhandled
                    promise rejections.
                  </p>
                  <div className="blockquote-footer">
                    From <cite title="Source Title">javascript.info</cite>
                  </div>
                </blockquote>
                <p>
                  ** I am not sure about this statement. Rejected promises don't
                  seem to kill the script, there is an error in the console,
                  yes, but the script doesn't die.
                </p>
                <p>
                  In the browser we can catch such errors (unhandled rejected
                  promises) using the event <code>unhandledrejection</code>:
                </p>
                <CodeSnippet
                  code={`window.addEventListener('unhandledrejection', function(event) {
  // the event object has two special properties:
  alert(event.promise); // [object Promise] - the promise that generated the error
  alert(event.reason); // Error: Whoops! - the unhandled error object
});

new Promise(function() {
  throw new Error("Whoops!");
}); // no catch to handle the error`}
                />
                <p>
                  We should place <code>.catch</code> exactly in places where we
                  want to handle errors and know how to handle them. The handler
                  should analyze errors (custom error classes help) and rethrow
                  unknown ones (maybe they are programming mistakes).
                </p>
                <p>
                  It's ok not to use .catch at all, if there's no way to recover
                  from an error.
                </p>
                <p>
                  In any case we should have the <code>unhandledrejection</code>{" "}
                  event handler (for browsers, and analogs for other
                  environments) to track unhandled errors and inform the user
                  (and probably our server) about them, so that our app never
                  "just dies" (** here it is again, does the script really die?
                  don't think so unless of course we wanted to do something
                  depends on the resolution of that promise?).
                </p>
              </>
            ),
            seeMore: [""],
          },
        ],
      },
      {
        chapterTitle: "Promise API",
        tips: [
          {
            content: (
              <>
                <p>
                  There are 6 static methods in the Promise class. We’ll quickly
                  cover their use cases here.
                </p>
                <p>
                  - <code>Promise.all</code>: takes an iterable (usually, an
                  array of promises) and returns a new promise.
                </p>
                <p>
                  If any of the promises is rejected, the promise returned by{" "}
                  <code>Promise.all</code> immediately rejects with that error.
                </p>
                <CodeSnippet
                  code={`// Syntax
let promise = Promise.all(iterable);


// Example
Promise.all([
  new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
  new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
  new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
]).then((result) => {
  console.log(result) // array [1,2,3]
});`}
                />
                <p>
                  Please note that the order of the resulting array members is
                  the same as in its source promises. Even though the first
                  promise takes the longest time to resolve, it's still first in
                  the array of results.
                </p>
                <p>
                  If we pass anything other than a promise, it will be in the{" "}
                  <code>result</code> array as is.
                </p>
                <p>
                  <code>Promise.all</code> rejects as a whole if any promise
                  rejects. That's good for "all or nothing" cases.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  - <code>Promise.allSettled</code> just waits for all promises
                  to settle, regardless of the result. The resulting array has:
                </p>
                <ul>
                  <li>
                    <code>{'{status:"fulfilled", value:result}'}</code> for
                    successful responses,
                  </li>
                  <li>
                    <code>{'{status:"rejected", reason:error}'}</code> for
                    errors.
                  </li>
                </ul>
                <CodeSnippet
                  code={`let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://no-such-url'
];

Promise.allSettled(urls.map(url => fetch(url)))
  .then(results => { // (*)
    results.forEach((result, num) => {
      if (result.status == "fulfilled") {
        console.log(urls[num] + ' : ' + result.value.status);
      }
      if (result.status == "rejected") {
        console.log(urls[num] + ' : ' + result.reason);
      }
    });
  });`}
                />
                <p>
                  <code>Promise.allSettled</code> is a recent addition, however,
                  it is easy to polyfill:
                </p>
                <CodeSnippet
                  code={`if (!Promise.allSettled) {
  const rejectHandler = reason => ({ status: 'rejected', reason });

  const resolveHandler = value => ({ status: 'fulfilled', value });

  Promise.allSettled = function (promises) {
    const convertedPromises = promises.map(p => Promise.resolve(p).then(resolveHandler, rejectHandler));
    return Promise.all(convertedPromises);
  };
}`}
                />
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  - <code>Promise.race</code> Similar to{" "}
                  <code>Promise.all</code>, but waits only for the first settled
                  promise and gets its result (or error).
                </p>
                <CodeSnippet
                  code={`// Syntax
let promise = Promise.race(iterable);

// Example
Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then((result) => {
  console.log(result) // 1
}); `}
                />
                <p>
                  The first promise here was fastest, so it became the result.
                  After the first settled promise "wins the race", all further
                  results/errors are ignored.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  - <code>Promise.any</code> Similar to{" "}
                  <code>Promise.race</code>, but waits only for the first
                  fulfilled promise and gets its result.
                </p>
                <p>
                  If all of the given promises are rejected, then the returned
                  promise is rejected with <code>AggregateError</code> - a
                  special error object that stores all promise errors in its
                  errors property.
                </p>
                <CodeSnippet
                  code={`// Syntax
let promise = Promise.any(iterable);

// Example
Promise.any([
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 1000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(result => {
  console.log(result) // 1
});`}
                />
                <p>
                  The first promise here was fastest, but it was rejected, so
                  the second promise became the result. After the first
                  fulfilled promise "wins the race", all further results are
                  ignored.
                </p>
                <p>When all promises are rejected:</p>
                <CodeSnippet
                  code={`Promise.any([
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ouch!")), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Error!")), 2000))
]).catch(error => {
  console.log(error.constructor.name); // AggregateError
  console.log(error.errors[0]); // Error: Ouch!
  console.log(error.errors[1]); // Error: Error!
});`}
                />
                <p>
                  As you can see, error objects for failed promises are
                  available in the errors property of the{" "}
                  <code>AggregateError</code> object.
                </p>
              </>
            ),
            seeMore: [""],
          },

          {
            content: (
              <>
                <p>
                  - <code>Promise.resolve(value)</code> creates a resolved
                  promise with the result value. Similar to:
                </p>
                <CodeSnippet
                  code={`let promise = new Promise(resolve => resolve(value));`}
                />
                <p>
                  For example, the <code>loadCached</code> function below
                  fetches a URL and remembers (caches) its content. For future
                  calls with the same URL it immediately gets the previous
                  content from cache, but uses <code>Promise.resolve</code> to
                  make a promise of it, so the returned value is always a
                  promise:
                </p>
                <p>
                  That's because we will be doing{" "}
                  <code>loadCached(url).then((text) {`=> {....}`})</code>, hence
                  we need a promise for both scenarios (wether <code>text</code>{" "}
                  was fetched from cache or not).
                </p>
                <CodeSnippet
                  code={`let cache = new Map();

function loadCached(url) {
  if (cache.has(url)) {
    return Promise.resolve(cache.get(url)); // (*)
  }

  return fetch(url)
    .then(response => response.text())
    .then(text => {
      cache.set(url,text);
      return text;
    });
}`}
                />
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  - <code>Promise.reject</code> creates a rejected promise with
                  error. Same as:
                </p>
                <CodeSnippet
                  code={`let promise = new Promise((resolve, reject) => reject(error));`}
                />
                <p>In practice, this method is almost never used.</p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>A quick summary:</p>
                <p>
                  - <code>Promise.all(promises)</code> waits for all promises to
                  resolve and returns a promise that resolves to an array of
                  their results. If any of the given promises rejects, it
                  becomes the error of <code>Promise.all</code>, and all other
                  results are ignored.
                </p>
                <p>
                  - <code>Promise.allSettled(promises)</code> waits for all
                  promises to settle and returns a promise that resolves to
                  their results as an array of objects.
                </p>
                <p>
                  - <code>Promise.race(promises)</code> waits for the first
                  promise to settle, and its result/error becomes the outcome.
                </p>
                <p>
                  - <code>Promise.any(promises)</code> waits for the first
                  promise to fulfill, and its result becomes the outcome. If all
                  of the given promises are rejected,{" "}
                  <code>AggregateError</code> becomes the error of Promise.any.
                </p>
                <p>
                  - <code>Promise.resolve(value)</code> makes a resolved promise
                  with the given value.
                </p>
                <p>
                  - <code>Promise.reject(error)</code> makes a rejected promise
                  with the given error.
                </p>
              </>
            ),
            seeMore: [""],
          },
        ],
      },
    ],
  },
];

export default tips7;
