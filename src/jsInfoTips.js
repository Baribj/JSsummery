import CodeSnippet from "./components/CodeSnippet";
import jsInfoSnippets from "./jsInfoSnippets";

const tips = [
  {
    content: (
      <p>
        The operators <code>typeof x</code> and <code>typeof(x)</code> are the
        same. They both return the data type of <code>x</code>.
      </p>
    ),
    seeMore: ["https://javascript.info/types"],
  },
  {
    content: (
      <p>
        The word "modal" means that the visitor can't interact with the rest of
        the page.
      </p>
    ),
    seeMore: [""],
  },
  {
    content: (
      <p>
        The square brackets in the syntax denote that the parameter is optional,
        not required.
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
  {
    content: (
      <>
        <p>
          The unary sign <code>+</code> converts strings to numbers, and doesn't
          do anything to numbers.
        </p>
        <p>
          So, <code>+apples + +oranges</code> is the same as{" "}
          <code>Number(apples) + Number(oranges)</code>.
        </p>
      </>
    ),
    seeMore: ["https://javascript.info/operators"],
  },
  {
    content: (
      <>
        <p>
          The <code>while</code> loop is the same as <code>do..while</code>{" "}
          loop.
        </p>
        <p>
          This <code>do..while</code> syntax should only be used when you want
          the body of the loop to execute at least once.
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
            Function declaration <code>function(){"{}"}</code> can be called
            before declaration and can't be reassigned (with <code>let</code>{" "}
            for example).
          </li>

          <li>
            Function expression <code>let func = ()=&gt;{"{}"}</code> can't be
            called before assignment and can be reassigned.
          </li>
        </ul>
      </>
    ),
    seeMore: ["https://javascript.info/function-expressions"],
  },
  {
    content: (
      <p>
        Its recommended to arrange the code first, then write functions
        definitions under it.
      </p>
    ),
    seeMore: ["https://javascript.info/coding-style#function-placement"],
  },
  {
    content: <p>Behavior Driven Development (BDD).</p>,
    seeMore: ["https://javascript.info/testing-mocha"],
  },
  {
    content: <p>One test checks one thing.</p>,
    seeMore: [""],
  },
  {
    content: (
      <>
        <p>
          A transpiler is a special piece of software that translates source
          code to another source code.
        </p>
        <p>
          A polyfill is a script that updates/adds new functions. It "fills in"
          the gap and adds missing implementations.
        </p>
      </>
    ),
    seeMore: ["https://javascript.info/polyfills"],
  },
  {
    content: (
      <>
        <p>To check if an object's property exists, you can either use:</p>
        <CodeSnippet code={jsInfoSnippets[1]} />
        <p>Or,</p>
        <CodeSnippet code={jsInfoSnippets[2]} />
        <p>The first one is preferred.</p>
      </>
    ),
    seeMore: [
      "https://javascript.info/object#property-existence-test-in-operator",
    ],
  },
  {
    content: (
      <>
        <p>To loop an abject, you can either:</p>
        <CodeSnippet code={jsInfoSnippets[3]} />
        <p>Or,</p>
        <CodeSnippet code={jsInfoSnippets[4]} />
        <p>
          Remember, <code>Object.keys</code> (and all other key/value-getting
          methods) only returns own keys, <code>for..in</code> loops over both
          own and inherited keys.
        </p>
        <p>
          If you want to go use <code>for..in</code>, you can use{" "}
          <code>obj.hasOwnProperty(key)</code>, it returns true if{" "}
          <code>obj</code> has its own (not inherited) property named{" "}
          <code>key</code> . See example:
        </p>
        <CodeSnippet code={jsInfoSnippets[6]} />
      </>
    ),
    seeMore: [""],
  },
  {
    content: (
      <p>
        Two objects are equal only if they are the same object. Two variables
        referencing two empty objects aren't equal.
      </p>
    ),
    seeMore: [""],
  },
  {
    content: (
      <p>
        If object has another object within it, don't forget to also copy that
        object (deep cloning).
      </p>
    ),
    seeMore: ["https://javascript.info/object-copy"],
  },
  {
    content: (
      <>
        <p>
          A constructor function is just a function that create an object. There
          are two conventions tho:
        </p>
        <ul>
          <li>They are named with capital letter first.</li>
          <li>
            hey should be executed only with <code>new</code> operator.
          </li>
        </ul>
        <CodeSnippet code={jsInfoSnippets[5]} />
        <p>
          The main purpose of constructors is to implement reusable object
          creation code.
        </p>
      </>
    ),
    seeMore: [""],
  },
  {
    content: (
      <>
        <p>
          Remember, <code>this</code> keyword is the same as the name of the
          object. Click on "see more" for a great explanation of the{" "}
          <code>this</code> keyword.
        </p>
        <p>
          No matter where the method is found: in an object or its prototype. In
          a method call, <code>this</code> is always the object before the dot.
        </p>
      </>
    ),
    seeMore: ["https://javascript.info/object-methods"],
  },
  {
    content: (
      <>
        <p>Rounding numbers:</p>
        <p>
          - <code>Math.floor</code>
        </p>
        <p>
          - <code>Math.ceil</code>
        </p>
        <p>
          - <code>Math.round</code>
        </p>
        <p>
          - <code>Math.trunc</code>
        </p>
      </>
    ),
    seeMore: ["https://javascript.info/number"],
  },
  {
    content: (
      <p>
        The advantage of using backtick (as apposed to single quotes and double
        quotes) is that they allow a string to span multiple lines.
      </p>
    ),
    seeMore: [""],
  },
];

export default tips;
