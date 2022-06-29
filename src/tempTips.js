import CodeSnippet from "./components/CodeSnippet";
/* import jsInfoSnippets from "./jsInfoSnippets"; */

const tempTips = [
  {
    sectionTitle: "An introduction",
    chapters: [
      {
        chapterTitle: "Introduction",
        tips: [
          {
            content: (
              <p>
                JavaScript engines read "parse" the script, then they convert
                "compile" the script to the machine language hen the machine
                code runs, pretty fast.
              </p>
            ),
            seeMore: [""],
          },
        ],
      },
      {
        chapterTitle: "Manuals and specifications",
        tips: [
          {
            content: (
              <p>
                The{" "}
                <a href="https://www.ecma-international.org/publications-and-standards/standards/ecma-262/">
                  ECMA-262 specification
                </a>{" "}
                contains the most in-depth, detailed and formalized information
                about JavaScript. It defines the language.
              </p>
            ),
            seeMore: [""],
          },
        ],
      },
      {
        chapterTitle: "Code editors",
        tips: [
          {
            content: (
              <p>
                IDE (Integrated Development Environment), is not just a code
                editor, but, as the name suggests, a whole development
                environment.
              </p>
            ),
            seeMore: [""],
          },
        ],
      },
      {
        chapterTitle: "Developer console",
        tips: [
          {
            content: (
              <p>
                To insert multiple lines in Console, press Shift+Enter. This way
                one can enter long fragments of JavaScript code.
              </p>
            ),
            seeMore: [""],
          },
        ],
      },
    ],
  },
  {
    sectionTitle: "JavaScript Fundamentals",
    chapters: [
      {
        chapterTitle: "Hello, world!",
        tips: [
          {
            content: (
              <>
                <CodeSnippet
                  code={`<script src="/path/to/script.js"></script>`}
                  lang="HTML"
                />
                <p>
                  Here, the path is an absolute path to the script from the site
                  root.
                </p>
                <CodeSnippet
                  code={`<script src="script.js"></script>;

<!-- Same as -->

<script src="./script.js"></script>;`}
                  lang="HTML"
                />
                <p>
                  Here, both of these would point to the a file called script.js
                  in the current folder.
                </p>
                <p>
                  If <code>src</code> attribute is set for a script tag, the
                  script content is ignored.
                </p>
                <p>
                  The <code>type</code> and <code>language</code> attributes are
                  old an no longer required.
                </p>
              </>
            ),
            seeMore: [""],
          },
        ],
      },
      {
        chapterTitle: "Code structure",
        tips: [
          {
            content: (
              <>
                <p>
                  An expression is a block of code that evaluates to a value. A
                  statement is any block of code that is performing some action.
                </p>
                <p>
                  Usually, statements are written on separate lines to make the
                  code more readable:
                </p>
              </>
            ),
            seeMore: [""],
          },
        ],
      },
      {
        chapterTitle: 'The modern mode, "use strict"',
        tips: [
          {
            content: (
              <p>
                The directive <code>use-strict</code> used to be included at the
                top of scripts to enable modern features after ECMAScript 5
                release. Its no longer needed after ECMAScript 6.
              </p>
            ),
            seeMore: [""],
          },
        ],
      },
      {
        chapterTitle: "Variables",
        tips: [
          {
            content: (
              <p>
                Capital-named constants are only used as aliases for
                "hard-coded" values.
              </p>
            ),
            seeMore: [""],
          },
        ],
      },
      {
        chapterTitle: "Data types",
        tips: [
          {
            content: (
              <>
                <p>Mathematical operations are safe.</p>
                <p>
                  Doing maths is "safe" in JavaScript. We can do anything:
                  divide by zero, treat non-numeric strings as numbers, etc.
                </p>
                <p>
                  The script will never stop with a fatal error "die". At worst,
                  we will get NaN as the result.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>There are 8 data types in JS and they are as follow:</p>
                <p>
                  Number, BigInt, String, Boolean, null, undefined, Object,
                  Symbol.
                </p>
                <CodeSnippet
                  code={`console.log(typeof undefined); // undefined

console.log(typeof 0); // number

console.log(typeof 10n); // bigint

console.log(typeof true); // boolean

console.log(typeof "foo"); // string

console.log(typeof Symbol("id")); // symbol

console.log(typeof Math); // object

console.log(typeof null); // object >> this is an officially recognized error in typeof. null is its own unique data type.

console.log(typeof alert); // function >> functions are objects`}
                />
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <p>
                The operators <code>typeof x</code> and <code>typeof(x)</code>{" "}
                are the same. They both return the data type of <code>x</code>.
              </p>
            ),
            seeMore: ["https://javascript.info/types"],
          },
        ],
      },
      {
        chapterTitle: "Interaction: alert, prompt, confirm",
        tips: [
          {
            content: (
              <p>
                The word "modal" means that the visitor can't interact with the
                rest of the page.
              </p>
            ),
            seeMore: [""],
          },
          {
            content: (
              <p>
                The square brackets in the syntax denote that the parameter is
                optional, not required.
              </p>
            ),
            seeMore: [""],
          },
          {
            content: (
              <p>
                Revise the differences between <code>alert()</code>,{" "}
                <code>prompt()</code>, and <code>confirm()</code>.
              </p>
            ),
            seeMore: ["https://javascript.info/alert-prompt-confirm"],
          },
        ],
      },
      {
        chapterTitle: "Type Conversions",
        tips: [
          {
            content: (
              <>
                <p>
                  Most of the time, operators and functions automatically
                  convert the values given to them to the right type.
                </p>
                <p>
                  For example, <code>alert</code> automatically converts any
                  value to a string to show it. Mathematical operations convert
                  values to numbers.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  String conversion occurs when we output something. Can be
                  performed with <code>String(value)</code>.
                </p>
                <p>
                  String conversion is mostly obvious. A false becomes{" "}
                  <code>"false"</code>, null becomes <code>"null"</code>, etc.
                </p>
              </>
            ),
            seeMore: [
              "https://javascript.info/type-conversions#string-conversion",
            ],
          },
          {
            content: (
              <>
                <p>
                  Numeric conversion occurs in math operations. Can be performed
                  with <code> Number(value)</code>.
                </p>
                <p>
                  Numeric conversion happens in mathematical functions and
                  expressions automatically. For example:
                </p>
                <CodeSnippet
                  code={`const a = '1';

const b = '2';

const result = a / b;

console.log(typeof result); // number`}
                />
                <p>Examples for numeric conversions:</p>
                <CodeSnippet
                  code={`console.log(Number("   123   ")); // 123

console.log(Number("123z")); // NaN

console.log(Number(true)); // 1

console.log(Number(false)); // 0

console.log(Number(null)); // 0

console.log(Number(undefined)); // NaN`}
                />
              </>
            ),
            seeMore: [
              "https://javascript.info/type-conversions#numeric-conversion",
            ],
          },
          {
            content: (
              <>
                <p>
                  Boolean conversion occurs in logical operations. Can be
                  performed with <code>Boolean(value)</code>.
                </p>
                <p>Boolean conversion follow the rules:</p>
                <p>
                  - Values that are intuitively "empty", like 0, an empty
                  string, null, undefined, and NaN, become false (falsy values).
                </p>
                <p>- Other values become true.</p>
              </>
            ),
            seeMore: [""],
          },
        ],
      },
      {
        chapterTitle: "Basic operators, maths",
        tips: [
          {
            content: (
              <>
                <p>
                  An operand is what operators are applied to. For instance, in
                  the multiplication of 5 * 2 there are two operands: the left
                  operand is 5 and the right operand is 2. Sometimes, people
                  call these “arguments” instead of “operands”.
                </p>
                <p>
                  An operator is unary if it has a single operand and binary it
                  has two operands.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  When the operator <code>+</code> is used and one of the
                  operands is a string, JS converts the other operand to a
                  string and concatenates them instead of adding them.
                </p>
                <CodeSnippet
                  code={`console.log("1" + 2); // 12

console.log(1 + 1 + "2"); // 22 (Here, operators work one after another)`}
                />
                <p>
                  The operator <code>+</code> exists in two forms; binary and
                  unary.
                </p>
                <p>
                  The unary sign <code>+</code> converts strings to numbers, and
                  doesn't do anything to numbers (same as{" "}
                  <code>Number(value)</code>).
                </p>
                <CodeSnippet
                  code={`const a = "1";

const b = "2";

console.log(Number(a) + Number(b)); // 3

// Same as
  
console.log(+a + +b); // 3`}
                />
                <p>
                  Why the unary <code>+</code> applied to values before the
                  binary <code>+</code>? because of{" "}
                  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence">
                    precedence table
                  </a>
                  .
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  Just like other operators, the assignment operator{" "}
                  <code>=</code> returns a value.
                </p>
                <p>
                  The call <code>x = value</code> writes the value into x and
                  then returns it.
                </p>
                <CodeSnippet
                  code={`let a;
  
console.log((a = 2 * 2)); //4`}
                />
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  <code>++value</code> increases <code>value</code> by 1 and
                  then returns the result.
                </p>
                <p>
                  <code>++value</code> returns the result and then increases{" "}
                  <code>value</code> by 1.
                </p>
              </>
            ),
            seeMore: [""],
          },
        ],
      },
      {
        chapterTitle: "Comparisons",
        tips: [
          {
            content: (
              <>
                <p>
                  Comparison operators return a boolean value return a boolean
                  value.
                </p>
                <p>
                  When comparing values of different types, JavaScript converts
                  the values to numbers.
                </p>
                <p>
                  A funny consequence: its possible to have two values that are
                  equal <code>a == b</code> and at the same time one of them is{" "}
                  <code>true</code> as a boolean and the other one is{" "}
                  <code>false</code> as a boolean.
                </p>
                <CodeSnippet
                  code={`let a = 0;
console.log(Boolean(a)); // false

let b = "0";
console.log(Boolean(b)); // true

console.log(a == b); // true!`}
                />
                <p>
                  Comparisons with <code>null</code> and <code>undefined</code>{" "}
                  are weird and non-intuitive. To avoid issues:
                </p>
                <p>
                  - Treat any comparison with <code>undefined</code> /{" "}
                  <code>null</code> except the strict equality <code>===</code>{" "}
                  with exceptional care.
                </p>
                <p>
                  - Don't use comparisons <code>{">="}</code> <code>{">"}</code>{" "}
                  <code>{"<"}</code> <code>{"<="}</code> with a variable which
                  may be <code>null</code> / <code>undefined</code>, unless
                  you're really sure of what you're doing. If a variable can
                  have these values, check for them separately.
                </p>
              </>
            ),
            seeMore: [
              "https://javascript.info/comparison#comparison-with-null-and-undefined",
            ],
          },
        ],
      },
      {
        chapterTitle: "Conditional branching: if, '?'",
        tips: [
          {
            content: (
              <>
                <p>
                  The "Question mark operator" <code>?</code> is also called
                  "conditional operator" or "ternary operator".
                </p>
                <p>A sequence of question mark operators example:</p>
                <CodeSnippet
                  code={`let age = 18;

let message =
    age < 3
    ? "Hi, baby!"
    : age < 18
    ? "Hello!"
    : age < 100
    ? "Greetings!"
    : "What an unusual age!";

console.log(message); // Greetings`}
                />
              </>
            ),
            seeMore: [""],
          },
        ],
      },
      {
        chapterTitle: "Logical operators",
        tips: [
          {
            content: (
              <>
                <p>
                  OR "<code>||</code>" finds the first truthy value.
                </p>
                <CodeSnippet
                  code={`const result = value1 || value2 || value3; // returns the first truthy value`}
                />
                <p>
                  Short-circuit evaluation. This means an expression won't run
                  if there is an a truthy value before it.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <p>
                AND "<code>&&</code>"" returns the first falsy value or the last
                value if none were found.
              </p>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  NOT "<code>!</code>" converts the operand to boolean type:{" "}
                  <code>true</code> / <code>false</code> and returns the
                  inverse.
                </p>
                <p>
                  A double NOT <code>!!</code> is sometimes used for converting
                  a value to boolean type.
                </p>
              </>
            ),
            seeMore: [""],
          },
        ],
      },
      {
        chapterTitle: "Nullish coalescing operator '??'",
        tips: [
          {
            content: (
              <>
                <p>
                  The nullish coalescing operator "<code>??</code>"" returns the
                  first argument if it's not <code>null</code> /{" "}
                  <code>undefined</code>. Otherwise, the second one.
                </p>
                <p>
                  The common use case for <code>??</code> is to provide a
                  default value.
                </p>
                <p>
                  The difference between <code>||</code> and <code>??</code> is
                  as follow:
                </p>
                <p>
                  - <code>||</code> returns the first truthy value (doesn't
                  distinguish between <code>false</code> , <code>0</code> , an
                  empty string <code>""</code> and <code>null</code> /{" "}
                  <code>undefined</code>).
                </p>
                <p>
                  - <code>??</code> returns the first defined value.
                </p>
                <p>Consider the following:</p>
                <CodeSnippet
                  code={`let height = 0;

console.log(height || 100); // 100
console.log(height ?? 100); // 0`}
                />
                <p>
                  It's forbidden to use <code>??</code> with <code>||</code> or{" "}
                  <code>&&</code> without explicit parentheses.
                </p>
              </>
            ),
            seeMore: [""],
          },
        ],
      },
      {
        chapterTitle: "Loops: while and for",
        tips: [
          {
            content: (
              <>
                <p>
                  Any expression or variable can be a loop condition in the{" "}
                  <code>while</code> loop, not just comparisons: the condition
                  is evaluated and converted to a boolean by <code>while</code>.
                </p>
                <p>
                  For instance, a shorter way to write{" "}
                  <code>while (i != 0)</code> is <code>while(i)</code>.
                </p>
                <p>
                  The <code>while</code> loop syntax:
                </p>
                <CodeSnippet
                  code={`while (condition) {
  // code
  // so-called "loop body"
}`}
                />
                <p>
                  The <code>while</code> loop is the same as{" "}
                  <code>do..while</code> loop.
                </p>
                <p>
                  This <code>do..while</code> syntax should only be used when
                  you want the body of the loop to execute at least once.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  The <code>for</code> loop syntax:
                </p>
                <CodeSnippet
                  code={`for (begin; condition; step) {
  // ... loop body ...
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
                  Use <code>break</code> to break out of loop and{" "}
                  <code>continue</code> to break out of current iteration.
                </p>
                <p>
                  The directives <code>break</code> / <code>continue</code>{" "}
                  don't work on the right side of the ternary operator{" "}
                  <code>?</code>. So, this doesn't work:
                </p>
                <CodeSnippet
                  code={`(i > 5) ? console.log(i) : continue; // continue isn't allowed here`}
                />
                <p>If you need to break out of a nested loops, use labels.</p>
                <CodeSnippet
                  code={`labelName: for (...) {
    //
    break labelName;
    //
}
`}
                />
              </>
            ),
            seeMore: [
              "https://javascript.info/while-for#labels-for-break-continue",
            ],
          },
        ],
      },
      {
        chapterTitle: "The 'switch' statement",
        tips: [
          {
            content: (
              <>
                <p>
                  The <code>switch</code> statement checks for strict equality.
                </p>
                <p>
                  You need <code>break</code> after each case, if not, all cases
                  after match succeed will run
                </p>
                <p>The syntax is as follow:</p>
                <CodeSnippet
                  code={`switch (x) {
  case 1:
    alert("Too small");
    break;
  case 2:
    alert("Too small");
    break;
  default:
    alert("I don't know such values");
}`}
                />
              </>
            ),
            seeMore: [``],
          },
        ],
      },
      {
        chapterTitle: "Functions",
        tips: [
          {
            content: (
              <>
                <p>
                  Function parameters are the names listed in the function's
                  definition. Function arguments are the real values passed to
                  the function.
                </p>
                <p>
                  If a same-named variable is declared inside the function then
                  it shadows the outer one.
                </p>
                <p>
                  Variables declared outside of any function are called global.
                  However, they only become property of the <code>window</code>{" "}
                  object if declared with <code>var</code> or explicitly
                  assigned with <code>window.variable = "";</code>, but not if
                  they are declared with <code>const</code> or <code>let</code>.
                </p>
                <p>
                  Arguments of function are copied to local variable and
                  changing them inside the function won't change the outer
                  variables. This also applies to objects.
                </p>
                <p>
                  Use the following syntax to assign default value to
                  parameters:
                </p>
                <CodeSnippet
                  code={`function func(a, b = "default value") { // 
  //
}`}
                />
                <p>
                  default values can be anything, even functions, and they are
                  only be evaluated if the parameter wasn't passed. Consider the
                  following:
                </p>
                <CodeSnippet
                  code={`function showMessage(a, b = anotherFunction()) {
  // anotherFunction() will only be called if the parameter is missing.
}`}
                />
                <p>
                  Inside the function, do <code>if (a === undefined)</code> to
                  check if parameter was passed.
                </p>
                <p>
                  Using <code>return;</code> without a value causes the function
                  to exit immediately. An empty <code>return;</code> is also the
                  same as <code>return undefined;</code>.
                </p>
              </>
            ),
            seeMore: [""],
          },
        ],
      },
      {
        chapterTitle: "Function expressions",
        tips: [
          {
            content: (
              <>
                <p>
                  A function is a value. Surely, a function is a special value,
                  in the sense that we can call it like <code>sayHi()</code>.
                </p>
                <CodeSnippet
                  code={`function sayHi() {
  alert("Hello");
}

console.log(String(sayHi)); // shows the function code`}
                />
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  Callbacks are just functions that are passed as arguments to
                  another functions as a arguments.
                </p>
                <blockquote className="blockquote">
                  <p>
                    The idea is that we pass a function and expect it to be
                    “called back” later if necessary.
                  </p>
                  <div className="blockquote-footer">
                    From {""}
                    <cite title="Source Title">javascript.info</cite>
                  </div>
                </blockquote>
                <p>
                  Notice the use of "later" rather than "after the function
                  finishes".
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>Function declaration vs Function expression:</p>
                <ul>
                  <li>
                    Function declaration <code>function(){"{}"}</code> can be
                    called before declaration (because JS engines first scan the
                    code and create all functions within that scope) and can't
                    be reassigned (with <code>let</code> for example).
                  </li>

                  <li>
                    Function expression <code>let func = ()=&gt;{"{}"}</code>{" "}
                    can't be called before assignment (because they are only
                    created with execution reaches them) and can be reassigned.
                  </li>
                </ul>
                <p>
                  Function declarations are only visible within the code in
                  which they reside. functions expressions don't have this
                  limitation:
                </p>
                <CodeSnippet
                  code={`let welcome;

if (...) {
  welcome = function() {
    //
  };
};

welcome();  `}
                />
              </>
            ),
            seeMore: [""],
          },
        ],
      },
      {
        chapterTitle: "Arrow functions, the basics",
        tips: [
          {
            content: (
              <>
                <p>
                  In a single line arrow function, the one line must be an
                  expression for the function to return it. Remember, an
                  expression is code that evaluates to a value.
                </p>
                <CodeSnippet
                  code={`const func1 = () => 1 + 1; 
const func2 = () => console.log("hi");

console.log(func1()); // runs the function and return 2
console.log(func2()); // runs the function (which will log "hi") and return undefined.`}
                />
              </>
            ),
            seeMore: [""],
          },
        ],
      },
      {
        chapterTitle: "JavaScript specials",
        tips: [
          {
            content: (
              <p>Just a general revision, nothing new in this chapter.</p>
            ),
            seeMore: [""],
          },
        ],
      },
    ],
  },
  {
    sectionTitle: "Code quality",
    chapters: [
      {
        chapterTitle: "Debugging in the browser",
        tips: [
          {
            content: (
              <>
                <p>Right click on breakpoint to add a condition.</p>
                <p>
                  Add <code>debugger;</code> anywhere in the code to make a
                  pause execution. It only works when dev tools is open, other
                  ways the browser ignores it.
                </p>
              </>
            ),
            seeMore: [""],
          },
        ],
      },
      {
        chapterTitle: "Coding Style",
        tips: [
          {
            content: (
              <>
                <p>Code first then functions.</p>
                <p>
                  Its better to handle special cases early on{" "}
                  <code>if(something) {"{... return}"}</code> instead of big{" "}
                  <code>if ... else</code>.
                </p>
              </>
            ),
            seeMore: [""],
          },
        ],
      },
      {
        chapterTitle: "Comments",
        tips: [
          {
            content: <p>Nothing interesting in this chapter!.</p>,
            seeMore: [""],
          },
        ],
      },
      {
        chapterTitle: "Ninja code",
        tips: [
          {
            content: <p>Witty and fun chapter, nothing to document tho.</p>,
            seeMore: [""],
          },
        ],
      },
      {
        chapterTitle: "Automated testing with Mocha",
        tips: [
          {
            content: (
              <>
                <p>
                  Behavior Driven Development (BDD) is three things in one:
                  tests AND documentation AND examples. Hence, the specs can be
                  used:
                </p>
                <p>As Tests - they guarantee that the code works correctly.</p>
                <p>
                  As Docs - the titles of describe and it tell what the function
                  does.
                </p>
                <p>
                  As Examples - the tests are actually working examples showing
                  how a function can be used.
                </p>
                <CodeSnippet
                  code={`describe("pow", function() { // specification 

  it("raises to n-th power", function() { // worker
    assert.equal(pow(2, 3), 8);
  });

});`}
                />
                <p>
                  In BDD, the flow of development is as follow: We write the
                  spec, implement it, make sure tests pass, then write more
                  tests, make sure they work etc. At the end we have both a
                  working implementation and tests for it.
                </p>
                <p>
                  <a href="https://mochajs.org/">Mocha</a> - the core framework:
                  it provides common testing functions including{" "}
                  <code>describe</code> and <code>it</code> and the main
                  function that runs tests.
                </p>
                <p>
                  <a href="https://www.chaijs.com/">Chai</a> - the library with
                  many assertions. It allows to use a lot of different
                  assertions, for now we need only
                </p>
                <p>
                  For the future, let's note that there are more high-level
                  test-runners, like karma and others, that make it easy to auto
                  run many different tests.
                </p>
                <p>Consider the difference between the following:</p>
                <CodeSnippet
                  code={`// single test
describe("pow", function() {

  it("raises to n-th power", function() {
    assert.equal(pow(2, 3), 8);
    assert.equal(pow(3, 4), 81);
  });

});`}
                />
                <p>and</p>
                <CodeSnippet
                  code={` // two tests
describe("pow", function() {

  it("2 raised to power 3 is 8", function() {
    assert.equal(pow(2, 3), 8);
  });

  it("3 raised to power 4 is 81", function() {
    assert.equal(pow(3, 4), 81);
  });

});`}
                />
                <p>
                  The principal difference between the two is that when{" "}
                  <code>assert</code> triggers an error, the <code>it</code>{" "}
                  block immediately terminates. So, in the first variant if the
                  first assert fails, then we'll never see the result of the
                  second assert.
                </p>
                <p>
                  Making tests separate is useful to get more information about
                  what's going on, so the second variant is better.
                </p>
                <p>Remember: One test checks one thing.</p>
              </>
            ),
            seeMore: [""],
          },
        ],
      },
      {
        chapterTitle: "Polyfills and transpilers",
        tips: [
          {
            content: (
              <>
                {" "}
                <p>
                  A transpiler is a special piece of software that translates
                  source code to another source code (syntax changes).
                </p>
                <p>
                  <a href="https://babeljs.io/">Babel</a> is one of the most
                  prominent transpilers out there.
                </p>
                <p>
                  A polyfill is a script that updates/adds new functions. It
                  "fills in" the gap and adds missing implementations (new
                  functions).
                </p>
                <p>Two interesting polyfill libraries are:</p>
                <ul>
                  <li>
                    <a href="https://github.com/zloirock/core-js">core js</a>{" "}
                    that supports a lot, allows to include only needed features.
                  </li>
                  <li>
                    <a href="https://polyfill.io/v3/">polyfill.io</a> service
                    that provides a script with polyfills, depending on the
                    features and user's browser.
                  </li>
                </ul>
                <p>
                  Don't be afraid of using bleeding-edge features, Just remember
                  to use a transpiler (if using modern syntax or operators) and
                  polyfills (to add functions that may be missing).
                </p>
              </>
            ),
            seeMore: ["https://javascript.info/polyfills"],
          },
        ],
      },
    ],
  },
];

export default tempTips;
