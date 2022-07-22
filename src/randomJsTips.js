/* import CodeSnippet from "./components/CodeSnippet";
import snippets from "./snippets"; */

import CodeSnippet from "./components/CodeSnippet";

const randomJsTips = [
  {
    content: (
      <>
        <p>
          Use "marked.js" library to convert markdown into HTML. This is needed
          for when you are getting markdown from Contentful for example.
        </p>
        <p>
          Marked.js will output a string of HTML, you can use{" "}
          <code>dangerouslySetInnerHTML</code> (React's replacement for{" "}
          <code>innerHtml</code>) to output HTML from that, but I am sure there
          is a safer way to do it.
        </p>
      </>
    ),
    seeMore: ["https://www.youtube.com/watch?v=PB5RQk5gAdQ"],
  },
  {
    content: (
      <>
        <p>
          Where exactly are methods of constructors coming from ? and what are
          they? For example, what is <code>Object.keys</code> or
          <code>Symbol.toPrimitive</code> ??.
        </p>
        <p>
          Why do we call this <code>obj[Symbol.toPrimitive]</code> with square
          brackets? is <code>Symbol.toPrimitive</code> a property of{" "}
          <code>obj</code> or what is it exactly? we know symbolic keys aren't
          accessible without the variable we used to create them (could be
          global symbols ? I don't think so).
        </p>
        <p>
          I first noticed <code>Object.keys</code> and{" "}
          <code>Symbol.toPrimitive</code> mentioned{" "}
          <a href="https://javascript.info/symbol">here</a> and{" "}
          <a href="https://javascript.info/object-toprimitive">here</a>.
        </p>
      </>
    ),
    seeMore: [""],
  },
  {
    content: (
      <>
        <p>
          Need to go through{" "}
          <a href="https://javascript.info/iterable">iterable</a> and{" "}
          <a href="https://javascript.info/map-set">maps and sets</a> again.
        </p>
        <p>
          How can <code>Object.fromEntries(arr)</code> and{" "}
          <code>Object.fromEntries(map.entries())</code> be same when
          <code>console.log(arr)</code> logs an array while{" "}
          <code>console.log(map.entries())</code> logs an iterator?.
        </p>
        <p>
          Possible explanation is that <code>Object.fromEntries</code> calls the
          iterator by default. Gotta dig deeper and get a grip on what does that
          even mean.
        </p>
      </>
    ),
    seeMore: [""],
  },
  {
    content: (
      <>
        <p>As I see it, there are two reason to pass a wrapper function:</p>
        <p>
          1- To pass code that will be run later (callbacks). The wrapper
          function will be called later and it will execute the code. Consider
          the following:
        </p>
        <CodeSnippet
          code={`let arr = users.filter(ourFunction())
// Here, ourFunction will run as soon as JS engin reaches it.
// Thats not what we want, we want to pass a function that .filter can call on every iteration.
// Same goes to onClick={} and a lot of other methods, hooks (useEffect return) ... etc
        
// So either use:
let arr = users.filter(ourFunction)
        
// Or, better yet, a wrapper function:
let arr = users.filter(()=> {
  return ourFunction(); // here, .filter expect a return, but onClick={} for example doesn't, so "return" don't always have to be there.
})
// Now, .filter will call the wrapper function on every rotation, which will then execute outFunction() or really any other code`}
        />
        <p>2- To have the value of "this" defined. Consider the following:</p>
        <CodeSnippet
          code={`let soldiers = users.filter(army.canJoin, army);
// "this" inside canJoin will loose binding, because its called as stand alone function.
// Thats why we need to pass the second argument in .filter

// A better way (with wrapper function):
let soldiers = users.filter((user) => {
   return army.canJoin(user);   
});`}
        />
        <p>
          There could be other situations where the use of wrapper functions is
          necessary/recommended, will add them here once discovered.
        </p>
      </>
    ),
    seeMore: [""],
  },
  {
    content: (
      <>
        <p>
          So, the context of "this" is lost in a couple of scenarios, here are
          they:
        </p>
        <p>1- When passing methods as callbacks:</p>
        <CodeSnippet
          code={`let soldiers = users.filter(army.canJoin) // context of "this" is lost resulting in an error.
        
// can be fixed by:
let soldiers = users.filter(army.canJoin, army)
        
// or
let soldiers = users.filter(() => {
  army.canJoin();
})`}
        />
        <p>2- When they are assigned to variable:</p>
        <CodeSnippet
          code={`let func = army.canJoin;
func() // error

// can be fixed with:
func.call(army)

// Note however, that:
army.canJoin = func();
army.canJoin() // works, won't lose binding .. see decorators chapter for more


// To clarify the last example, consider this:
let army = {
  name: "John",
};

function func() {
  console.log(this); // Here, 'this' will be undefined
  return function () {
    console.log(this); // here 'this' will be defined (army)
  };
}

army.canJoin = func(); // 'this' undefined

army.canJoin(); // army `}
        />
        <p>
          Notice how <code>this</code> is defined in the returned function, but
          not in <code>func</code> itself. Why? because{" "}
          <code>army.canJoin</code> is now a wrapper for the returned function,
          hence providing it with the value of <code>this</code>.
        </p>
        <p>Both examples above are really the same:</p>
        <CodeSnippet
          code={`// consider the following:
setTimeout(user.sayHi;, 1000);

// what's basically happening is:
let f = user.sayHi;
setTimeout(f, 1000); // lost user context`}
        />
      </>
    ),
    seeMore: [""],
  },
  {
    content: (
      <>
        <p>
          - <code>async</code> the script is downloaded in parallel to parsing
          the page, and executed as soon as it is available (before parsing
          completes).
        </p>
        <p>
          - <code>defer</code> the script is downloaded in parallel to parsing
          the page, and executed after the page has finished parsing.
        </p>
        <p>
          - If neither tags is present, the script is downloaded and executed
          immediately, blocking parsing until the script is completed.
        </p>
      </>
    ),
    seeMore: [""],
  },
];

export default randomJsTips;
