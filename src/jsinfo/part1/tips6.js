import CodeSnippet from "../../components/CodeSnippet";

// section 9
const tips6 = [
  {
    sectionTitle: "Error handling",
    chapters: [
      {
        chapterTitle: "Error handling, 'try...catch'",
        tips: [
          {
            content: (
              <>
                <p>
                  The syntax <code>try...catch</code> allows us to "catch
                  errors" so the script can, do something else instead of dying.
                </p>
                <p>
                  ** So the script doesn't die when there are errors in the{" "}
                  <code>try</code> block during run-time (so the code must be
                  valid JS). Note that eslint might still throw an error if a
                  variable wasn't declared for example.
                </p>
                <p>
                  <code>try...catch</code> works synchronously, if an error
                  happens later after the engin has already left the{" "}
                  <code>try...catch</code> construct, it won't catch it.
                </p>
                <CodeSnippet
                  code={`// the error is not going to be caught
try {
  setTimeout(function() {
    noSuchVariable; // script will die here
  }, 1000);
} catch (err) {
  console.log( "error not caught" );
}

// This will be
setTimeout(function() {
  try {
    noSuchVariable; // try...catch handles the error!
  } catch {
    console.log( "error is caught here!" );
  }
}, 1000);
`}
                />
                <p>
                  So <code>try...catch</code> must be inside the asynchronous
                  function itself.
                </p>
                <p>
                  When an error occurs, JavaScript generates an object
                  containing the details about it. The object is then passed as
                  an argument to <code>catch</code>.
                </p>
                <p>
                  the error object has two main properties: <code>name</code>{" "}
                  and <code>message</code>. Also, there is one non-standard but
                  well-supported property called <code>stack</code>, which is a
                  string with info about the nested calls that led to the error.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>The throw operator generates an error:</p>
                <CodeSnippet code={`throw <error object>`} />
                <p>
                  Technically, we can use anything as an error object. That may
                  be even a primitive, like a number or a string, but it's
                  better to use objects, preferably with <code>name</code> and{" "}
                  <code>message</code> properties (to stay somewhat compatible
                  with built-in errors).
                </p>
                <p>
                  JavaScript has many built-in constructors for standard errors:
                  <code>Error</code>, <code>SyntaxError</code>,{" "}
                  <code>ReferenceError</code>, <code>TypeError</code> and
                  others. We can use them to create error objects as well.
                </p>
                <CodeSnippet
                  code={`let error = new Error(message);
// or
let error = new SyntaxError(message);
let error = new ReferenceError(message);
// ...`}
                />
                <p>
                  For built-in errors, <code>name</code> is taken from the
                  constructor name, and <code>message</code> is taken from the
                  argument.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  Catch should only process errors that it knows and "rethrow"
                  all others.
                </p>
                <p>To rethrow and error:</p>
                <CodeSnippet
                  code={`let json = '{ "age": 30 }'; // incomplete data

try {
  let user = JSON.parse(json);

  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name");
  }

  blabla(); // unexpected error // if you are on create-react-app eslint will catch this error early and start complaining

  alert( user.name );

} catch (err) {

  if (err instanceof SyntaxError) {
    console.log( "JSON Error: " + err.message );
  } else {
    throw err; // rethrow (*)
  }

}`}
                />
                <p>
                  Goes without saying that in the example above the execution
                  will meet the first error and leaves the <code>try</code>{" "}
                  block immediately hence never reaching the second error, but
                  the point stands.
                </p>
                <p>
                  The error throwing on line (*) from inside <code>catch</code>{" "}
                  block "falls out" of <code>try...catch</code> and can be
                  either caught by an outer <code>try...catch</code> construct
                  (if it exists), or it kills the script.
                </p>
                <p>
                  The <code>finally</code> clause works for any exit from{" "}
                  <code>try...catch</code>. That includes an explicit return.
                  <code>finally</code> is executed just before the control
                  returns to the outer code.
                </p>
                <CodeSnippet
                  code={`function func() {

  try {
    return 1;

  } catch (err) {
    /* ... */
  } finally {
    console.log( 'finally' );
  }
}

console.log( func() ); // first works console.log from finally, and then this one`}
                />
                <p>
                  The <code>try...finally</code> construct, without{" "}
                  <code>catch</code> clause, is also useful. We apply it when we
                  don't want to handle errors here (let them fall through), but
                  want to be sure that processes that we started are finalized.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  What we do to react on errors happing outside{" "}
                  <code>try...catch</code>? is there any way we can react to
                  them? like show a message to users? is there any way to setup
                  a "global" error handler?
                </p>
                <p>
                  There is nothing in the specifications, however Node.js has{" "}
                  <code>process.on("uncaughtException")</code> for that, and in
                  the browser we can assign a function to the{" "}
                  <code>window.onerror</code> property. The function will then
                  fire when an error happens. The syntax:
                </p>
                <CodeSnippet
                  code={`window.onerror = function(message, url, line, col, error) {
  // ...
};`}
                />
                <p>Here is an example:</p>
                <CodeSnippet
                  code={`<script>
  window.onerror = function(message, url, line, col, error) {
    alert( message );
  };

  function readData() {
    badFunc(); // Whoops, something went wrong!
  }

  readData();
</script>`}
                />
                <p>
                  The role of the global handler <code>window.onerror</code> is
                  usually not to recover the script execution - that's probably
                  impossible in case of programming errors, but to send the
                  error message to developers.
                </p>
                <p>
                  There are also web-services that provide error-logging for
                  such cases, like{" "}
                  <a href="https://errorception.com">
                    https://errorception.com
                  </a>{" "}
                  or <a href="http://www.muscula.com">http://www.muscula.com</a>
                  .
                </p>
                <p>They work like this:</p>
                <ol>
                  <li>
                    We register at the service and get a piece of JS (or a
                    script URL) from them to insert on pages.
                  </li>
                  <li>
                    That JS script sets a custom <code>window.onerror</code>{" "}
                    function.
                  </li>
                  <li>
                    When an error occurs, it sends a network request about it to
                    the service.
                  </li>
                  <li>
                    We can log in to the service web interface and see errors.
                  </li>
                </ol>
              </>
            ),
            seeMore: [""],
          },
        ],
      },
      {
        chapterTitle: "",
        tips: [
          {
            content: (
              <>
                <p>
                  When we develop something, we often need our own error classes
                  to reflect specific things that may go wrong in our tasks. For
                  errors in network operations we may need{" "}
                  <code>HttpError</code>, for database operations{" "}
                  <code>DbError</code>, for searching operations{" "}
                  <code>NotFoundError</code> and so on.
                </p>
                <p>
                  As mentioned before, our errors should support basic
                  properties like <code>name</code>, <code>message</code> and{" "}
                  <code>stack</code>, but also they might have other properties
                  like <code>statusCode</code> (e.x <code>404</code>) for{" "}
                  <code>HttpError</code> for example.
                </p>
                <p>
                  Technically, we can <code>throw</code> with any arguments.
                  However, its better if we inherit from the <code>Error</code>{" "}
                  class so we can later use <code>obj instanceof Error</code>.
                </p>
              </>
            ),
            seeMore: "",
          },
          {
            content: (
              <>
                The rest of this chapter heavily depend on classes, Skipping it
                for now. Maybe go back to it after you have finished studying
                the classes section?
              </>
            ),
            seeMore: ["https://javascript.info/custom-errors#extending-error"],
          },
        ],
      },
    ],
  },
];

export default tips6;
