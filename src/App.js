import Heading from "./components/Heading";
import { TipWrapper } from "./components/TipWrapper";
import CodeSnippet from "./components/CodeSnippet";
import snippets from "./snippets";

function App() {
  //
  function hi() {
    console.log("hi");
    return 1;
  }

  const wel = hi();

  console.log(wel);
  //
  return (
    <div className="App py-5 my-5">
      <div className="container">
        <Heading type="h1" text={"JavaScript quick summary | by Ritwal"} />
        <p>
          Quick tips that cover a wide range of JavaScript concepts. Those tips
          aren't ordered in any particular way.
        </p>

        <p>
          Please note that this as a personal project that isn't meant for
          everyone. this is definitely not the right place to learn JavaScript.
        </p>

        <p>
          If you are interested in learning JavaScript, I recommend taking a
          look at{" "}
          <a href="https://javascript.info/" target="__blank" rel="noreferrer">
            javascript.info
          </a>
          .
        </p>

        <div className="wrapper mb-5 pb-5">
          <TipWrapper link="https://javascript.info/types">
            <p>
              The operators <code>typeof x</code> and <code>typeof(x)</code> are
              the same. They both return the data type of <code>x</code>.
            </p>
          </TipWrapper>

          <TipWrapper>
            <p>
              The word "modal" means that the visitor can't interact with the
              rest of the page.
            </p>
          </TipWrapper>

          <TipWrapper>
            <p>
              The square brackets in the syntax denote that the parameter is
              optional, not required.
            </p>
          </TipWrapper>

          <TipWrapper link="https://javascript.info/alert-prompt-confirm">
            <p>
              Revise the differences between <code>alert()</code>,{" "}
              <code>prompt()</code>, and <code>confirm()</code>.
            </p>
          </TipWrapper>

          <TipWrapper link="https://javascript.info/operators">
            <p>
              The unary sign <code>+</code> converts strings to numbers, and
              doesn't do anything to numbers.
            </p>
            <p>
              So, <code>+apples + +oranges</code> is the same as{" "}
              <code>Number(apples) + Number(oranges)</code>.
            </p>
          </TipWrapper>

          <TipWrapper>
            <p>
              The <code>while</code> loop is the same as <code>do..while</code>{" "}
              loop.
            </p>
            <p>
              This <code>do..while</code> syntax should only be used when you
              want the body of the loop to execute at least once.
            </p>
          </TipWrapper>

          <TipWrapper link="https://javascript.info/function-expressions">
            <p>Function declaration vs Function expression:</p>
            <ul>
              <li>
                Function declaration <code>function(){"{}"}</code> can be called
                before declaration and can't be reassigned (with{" "}
                <code>let</code> for example).
              </li>

              <li>
                Function expression <code>let func = ()=&gt;{"{}"}</code> can't
                be called before assignment and can be reassigned.
              </li>
            </ul>
          </TipWrapper>

          <TipWrapper link="https://javascript.info/coding-style#function-placement">
            <p>
              Its recommended to arrange the code first, then write functions
              definitions under it.
            </p>
          </TipWrapper>

          <TipWrapper link="https://javascript.info/testing-mocha">
            <p>Behavior Driven Development (BDD).</p>
          </TipWrapper>

          <TipWrapper>
            <p>One test checks one thing.</p>
          </TipWrapper>

          <TipWrapper link="https://javascript.info/polyfills">
            <p>
              A transpiler is a special piece of software that translates source
              code to another source code.
            </p>
            <p>
              A polyfill is a script that updates/adds new functions. It "fills
              in" the gap and adds missing implementations.
            </p>
          </TipWrapper>

          <TipWrapper link="https://javascript.info/object#property-existence-test-in-operator">
            <p>To check if an object's property exists, you can either use:</p>
            <CodeSnippet code={snippets[1]} />
            <p>Or,</p>
            <CodeSnippet code={snippets[2]} />
            <p>The first one is preferred.</p>
          </TipWrapper>

          <TipWrapper>
            <p>To loop an abject, you can either:</p>
            <CodeSnippet code={snippets[3]} />
            <p>Or,</p>
            <CodeSnippet code={snippets[4]} />
            <p>
              Remember, <code>Object.keys</code> only returns own keys,{" "}
              <code>for..in</code> loops over both own and inherited keys.
            </p>
            <p>
              If you want to go use <code>for..in</code>, you can use{" "}
              <code>obj.hasOwnProperty(key)</code>, it returns true if{" "}
              <code>obj</code> has its own (not inherited) property named{" "}
              <code>key</code> . See example:
            </p>
            <CodeSnippet code={snippets[6]} />
          </TipWrapper>

          <TipWrapper>
            <p>
              Two objects are equal only if they are the same object. Two
              variables referencing two empty objects aren't equal
            </p>
          </TipWrapper>

          <TipWrapper link="https://javascript.info/object-copy">
            <p>
              If object has another object within it, don't forget to also copy
              that object. (deep cloning)
            </p>
          </TipWrapper>

          <TipWrapper>
            <p>
              A constructor function is just a function that create an object.
              There are two conventions tho:
            </p>
            <ul>
              <li>They are named with capital letter first.</li>
              <li>
                hey should be executed only with <code>new</code> operator.
              </li>
            </ul>
            <CodeSnippet code={snippets[5]} />
            <p>
              The main purpose of constructors is to implement reusable object
              creation code.
            </p>
          </TipWrapper>

          <TipWrapper link="https://javascript.info/object-methods">
            <p>
              Remember, <code>this</code> keyword is the same as the name of the
              object. Click on "see more" for a great explanation of the{" "}
              <code>this</code> keyword.
            </p>
          </TipWrapper>

          <TipWrapper link="https://javascript.info/number">
            <p>Rounding numbers:</p>
            <p>
              -<code>Math.floor</code>
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
          </TipWrapper>

          <TipWrapper>
            <p>
              The advantage of using backticks (as apposed to single quotes and
              double quotes) is that they allow a string to span multiple lines.
            </p>
          </TipWrapper>
        </div>

        {/* 
        ///////////////// JavaScript.info break /////////////////////////
        ///////////////// JavaScript.info break /////////////////////////
        ///////////////// JavaScript.info break /////////////////////////
        ///////////////// JavaScript.info break /////////////////////////
        ///////////////// JavaScript.info break /////////////////////////
        ///////////////// JavaScript.info break /////////////////////////
        ///////////////// JavaScript.info break /////////////////////////
        ///////////////// JavaScript.info break /////////////////////////
        ///////////////// JavaScript.info break /////////////////////////
        ///////////////// JavaScript.info break ///////////////////////// 
        */}
        <Heading type="h2" text="Other random tips" />
        <div className="wrapper mb-5 pb-5">
          <TipWrapper link="https://www.youtube.com/watch?v=PB5RQk5gAdQ">
            <p>
              Use "marked.js" library to convert markdown into HTML. This is
              needed for when you are getting markdown from Contentful for
              example.
            </p>
            <p>
              Marked.js will output a string of HTML, you can use{" "}
              <code>dangerouslySetInnerHTML</code> (React's replacement for{" "}
              <code>innerHtml</code>) to output HTML but I am sure there is a
              safer way to do it.
            </p>
          </TipWrapper>
        </div>
      </div>
    </div>
  );
}

export default App;
