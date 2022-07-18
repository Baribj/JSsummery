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
    ],
  },
];

export default tips7;
