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
                  Statements are syntax constructs and commands that perform
                  actions.
                </p>
                <p>
                  Usually, statements are written on separate lines to make the
                  code more readable:
                </p>
                <CodeSnippet
                  code={`alert('Hello');

alert('World');`}
                />
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
                release. Its no longer needed after ECMAScript 5.
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
                  Numeric Conversion in math operations. Can be performed with{" "}
                  <code> Number(value)</code>.
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
                  equal <code>a == b</code> and ath the same time One of them is
                  true as a boolean and the other one is false as a boolean.
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
    ],
  },
];

export default tempTips;
