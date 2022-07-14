import CodeSnippet from "../components/CodeSnippet";

// section 6
const tips3 = [
  {
    sectionTitle: "Advanced working with functions",
    chapters: [
      {
        chapterTitle: "Recursion and stack",
        tips: [
          {
            content: (
              <>
                <p>
                  Recursion is a technique used to solve computer problems by
                  creating a function that calls itself until the desired result
                  is achieved.
                </p>
                <p>
                  Any recursion can be rewritten as a loop. The loop variant
                  usually can be made more effective.
                </p>
                <p>Consider the following example:</p>
                <CodeSnippet
                  code={`function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

alert( pow(2, 3) ); // 8`}
                />
                <p>
                  The maximal number of nested calls (including the first one)
                  is called recursion depth. The maximal recursion depth is
                  limited by JavaScript engine. In the example above, the
                  recursion depth is 3.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                {" "}
                <p>
                  Execution content is an internal data structure that contains
                  details about the execution of a function, where the control
                  flow is now, the current variables, the value of{" "}
                  <code>this</code> and few other internal details.
                </p>
                <p>
                  For simplicity, think of execution contest of the above
                  example when the code is at the third call to look like
                  something as the following:
                </p>
                <CodeSnippet
                  code={`// Context: { x: 2, n: 1, at line 1 } // pow(2, 1) third call

// Context: { x: 2, n: 2, at line 5 } // pow(2, 2) second call

// Context: { x: 2, n: 3, at line 5 } // pow(2, 3) first call`}
                />
                <p>
                  Once the function completes execution, the execution context
                  is removed.
                </p>
                <p>
                  When a function makes a nested call, the following happens:
                </p>
                <ol>
                  <li>The current function is paused.</li>
                  <li>
                    The execution context associated with it is remembered in a
                    special data structure called execution context stack.
                  </li>
                  <li>The nested call executes.</li>
                  <li>
                    After it ends, its execution context is deleted and the old
                    execution context is retrieved from the stack, and the outer
                    function is resumed from where it stopped.
                  </li>
                </ol>
                <p>
                  Note that number of contexts is equal to recursion depth. This
                  takes memory since we will have create a context and save it
                  in memory for every call.
                </p>
                <p>
                  Loops don't have this limitation, as they only uses a single
                  context changing <code>i</code> and other variables in the
                  process.
                </p>
              </>
            ),
            seeMore: [
              "https://javascript.info/recursion#the-execution-context-and-stack",
            ],
          },
          {
            content: (
              <>
                <p>
                  A great application of the recursion is a recursive traversal.
                  Consider the following data structure:
                </p>
                <CodeSnippet
                  code={`let company = {
  sales: [{
    name: 'John',
    salary: 1000
  }, {
    name: 'Alice',
    salary: 1600
  }],

  development: {
    sites: [{
      name: 'Peter',
      salary: 2000
    }, {
      name: 'Alex',
      salary: 1800
    }],

    internals: [{
      name: 'Jack',
      salary: 1300
    }]
  }
};`}
                />
                <p>
                  In the above example, how can we sum salaries of all
                  employees? Sure, we can use an iterative approach, with loops
                  nested within loops, but what if the structure is more
                  complicated? with objects and arrays nested even further? we
                  could easily end up with 5-6 or even more levels of nested
                  loops to traverse a single object, which can turn ugly real
                  quick.
                </p>
                <p>
                  The above structure is a recursive (recursively-defined) data
                  structure. It replicates itself in parts.
                </p>
                p In the example above, a department can have an array of
                employees, or another department (object) inside of it that can
                either have an array of employees or even more departments
                (objects) inside of it. Again, it replicates it self.
                <p>How to spot a recursively defined data structure? </p>
                <p>
                  To calculate the sum of the salaries, a recursive approach
                  would be a better fit here than an iterative one.
                </p>
                <p>Here is how we can do this the recursive way:</p>
                <CodeSnippet
                  code={`let company = { // the same object, compressed for brevity
  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
  development: {
    sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
    internals: [{name: 'Jack', salary: 1300}]
  }
};

// The function to do the job
function sumSalaries(department) {
  if (Array.isArray(department)) { // case (1)
    return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
  } else { // case (2)
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
    }
    return sum;
  }
}

console.log(sumSalaries(company)); // 7700`}
                />
                <p>
                  Just think of it in the sense that <code>sumSalaries</code>{" "}
                  can either get an object, or an array, if we get array, we sum
                  up the salaries within it, if we get an object, we loop
                  through its values, passing them one by one to{" "}
                  <code>sumSalaries</code>, if they are arrays, we sum them, if
                  they are objects, we traverse again ... etc.
                </p>
                <p>
                  The principle is quite easy, for an object subcells are made,
                  while arrays are the "leaves" of the recursion tree, they give
                  immediate result.
                </p>
              </>
            ),
            seeMore: ["https://javascript.info/recursion#recursive-traversals"],
          },
          {
            content: (
              <>
                <p>
                  If we want to store an ordered list of objects, the natural
                  choice would be an array of objects.
                </p>
                <p>
                  There is an issue though, in arrays, inserting and deleting
                  elements is expensive (except at the end of the array with{" "}
                  <code>arr.push</code> and <code> arr.pop</code> because no
                  mass re-numbering).
                </p>
                <p>
                  If we really need fast insertion/deletion, we can choose
                  another data structure called a linked list.
                </p>
                <p>
                  The linked list element is recursively defined as an object
                  with:
                </p>
                <p>
                  - <code>value</code>.
                </p>
                <p>
                  - <code>next</code> property referencing the next linked list
                  element or <code>null</code> if that's the end.
                </p>
                <p>For instance:</p>
                <CodeSnippet
                  code={`let LinkedList = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};`}
                />
                <p>We can easily split into multiple parts:</p>
                <CodeSnippet
                  code={`let secondList = list.next.next;
list.next.next = null;`}
                />
                <p>We can join:</p>
                <CodeSnippet code={`list.next.next = secondList;`} />
                <p>
                  We can insert or remove items in any place. To add in the top
                  for example:
                </p>
                <CodeSnippet
                  code={`list = { value: "new item", next: list };`}
                />
                <p>
                  To remove an element from the middle, just change{" "}
                  <code>next</code> of the previous element:
                </p>
                <CodeSnippet code={`list.next = list.next.next;`} />
                <p>
                  In lists, and unlike arrays, there's no mass-renumbering, we
                  can easily rearrange elements.
                </p>
                <p>
                  The main drawback of linked lists is that we can't easily
                  access an element by its number. We need to start from the
                  beginning, and go <code>next</code> <code>N</code> times to
                  get the Nth element.
                </p>
                <p>
                  Linked lists can be useful in situations where we need very
                  fast adding/removing for elements from both ends, but access
                  to elements in the middle is not needed.
                </p>
                <p>
                  We can enhance linked lists by adding <code>prev</code>{" "}
                  property to reference previous element, and adding{" "}
                  <code>tail</code> property to reference the last element in
                  the list (and update it when adding/removing elements from the
                  end).
                </p>
                <p>
                  I am still not 100% clear on recursive way of thinking,
                  traversing, and usage of linked lists. Need to dig deeper into
                  this subject if necessity arise. A good place to start would
                  be the{" "}
                  <a href="https://javascript.info/recursion#tasks">
                    tasks section
                  </a>{" "}
                  of this chapter.
                </p>
              </>
            ),
            seeMore: [""],
          },
        ],
      },
      {
        chapterTitle: "Rest parameters and spread syntax",
        tips: [
          {
            content: (
              <>
                <p>
                  A function can be called with any number of arguments, no
                  matter how it was defined. There will be no error, the extra
                  ones will just be ignored.
                </p>
                <p>
                  The rest parameters can be included in the function
                  definition, and it be an array containing the arguments:
                </p>
                <CodeSnippet
                  code={`function sumAll(...args) { // args is the name for the array
  // do something
}`}
                />
                <p>
                  The rest parameters <code>...rest</code> must be at the end.
                </p>
                <p>
                  There is also an old special array-like and iterable object{" "}
                  <code>arguments</code> that contains all arguments by default.
                  The downside is that it is not an array so we can't use array
                  methods on it. <code>...rest</code> is preferred.
                </p>
                <CodeSnippet
                  code={`function sumAll(){
  console.log(arguments.length);
  console.log(arguments[0]);
}`}
                />
                <p>
                  Arrow functions don't have <code>arguments</code>, they take
                  them from outer function.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  Spread syntax is similar to rest parameter, but does quite the
                  opposite, it expands an iterable object to a list of
                  arguments.
                </p>
                <CodeSnippet
                  code={`let arr1 = [3, 5, 1];
let arr2 = [4, 2, 9];                  

console.log( Math.max(arr1) ); // NaN ... expects a list of argument

console.log( Math.max(...arr1) ); // 5

// we can use multiple and combine with normal values
console.log( Math.max(...arr1, 4, ...arr2, 9) );

// we can merge arrays
let arr3 = [4, ...arr1, 5, ...arr2]

// Remember, the spread syntax works for any iterable, here we spread a string into an array of letters
let name = 'John';
console.log( [...name] ) // J,o,h,n`}
                />
                <p>
                  In the last example above, we could have used{" "}
                  <code>Array.from(obj)</code>, the result will be the same.
                  However, the major difference between the spread syntax and{" "}
                  <code>Array.from(obj)</code> is that the first only works with
                  iterables, while the later works on both; iterables and
                  array-likes.
                </p>
                <p>
                  So in the process of turning something to an array,{" "}
                  <code>Array.from(obj)</code> is more universal.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  Remember when we talked about <code>Object.assign()</code> in
                  the past? its possible to do the same thing with the spread
                  syntax to copy arrays and objects:
                </p>
                <CodeSnippet
                  code={`let arr1 = [1,2,3];
let arr2 = [ ..arr1 ];
// spread the array into a list of parameters
// then put the result into a new array
               
                
let obj1 = { a: 1, b: 2, c: 3 };
let obj2 = { ...obj1 };
// spread the object into a list of parameters
// then return the result in a new object`}
                />
                <p>
                  Much shorter than{" "}
                  <code>let arrCopy = Object.assign([], arr)</code> or{" "}
                  <code>let objCopy = Object.assign({}, obj)</code> isn't it ?
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  When we see <code>...</code> in the code, it could either be
                  rest parameters or spread syntax. to distinguish between them:
                </p>
                <ul>
                  <li>
                    When <code>...</code> is at the end of function definition,
                    its rest parameters and holds a list of arguments in an
                    array.
                  </li>
                  <li>
                    When <code>...</code> is in a function call or alike, its a
                    spread syntax and spreads the array into a list.
                  </li>
                </ul>
                <p>
                  Use rest parameters to create function that accept any number
                  of arguments, and spread syntax to pass an array to functions
                  that expect a list of arguments.
                </p>
                <p>
                  Together they help to travel between a list and an array of
                  parameters with ease.
                </p>
              </>
            ),
            seeMore: [""],
          },
        ],
      },
      {
        chapterTitle: "Variable scope, closure",
        tips: [
          {
            content: (
              <>
                <p>
                  In this chapter, we will be talking about variables created
                  with <code>const</code> and <code>let</code>. We will cover{" "}
                  <code>var</code> later.
                </p>
                <p>
                  A closure is a function that remembers variables from the
                  outer scope from where it was created. All functions in JS are
                  closures.
                </p>
                <p>
                  Every running function, code block, loop and <code>if</code>{" "}
                  block, has an internal (hidden) associated object known as
                  Lexical Environment.
                </p>
                <p>Lexical Environment object consists of two parts:</p>
                <ol>
                  <li>
                    Environment Record: An object that stores all local
                    variables as properties (and some other info like the value
                    of <code>this</code>).
                  </li>
                  <li>Reference to the outer Lexical Environment.</li>
                </ol>
                <p>
                  A variable is really just a property of the special internal
                  object (Lexical Environment), to get or change a variable, is
                  to get or change the property on that object.
                </p>
                <p>
                  Lexical Environment changes during execution. When the
                  execution starts, the object is pre-populated with all
                  declared variables. They will all initially be in
                  "uninitialized" state with the exception of function
                  declarations which are instantly fully initialized.
                </p>
                <p>
                  Then, as execution arrives at a variable declaration (ex{" "}
                  <code>let user;</code>), the variable will have a value of{" "}
                  <code>undefined</code>, then it will get the value once a
                  value is assigned (ex <code>user = "John"</code>).
                </p>
                <p>
                  Lexical Environment is a specification object and only exists
                  "theoretically", It can't be accessed.
                </p>
                <p>
                  When a function runs, at the beginning of the call, a new
                  Lexical Environment is created automatically to store local
                  variables and parameters of the call. Remember, a Lexical
                  Environment is created for each function call.
                </p>
                <p>
                  When the code wants to access a variable - the inner Lexical
                  Environment is searched first, then the outer one, then the
                  more outer one and so on until the global one.
                </p>
                <p>
                  All functions have the hidden property named{" "}
                  <code>[[Environment]]</code>, that keeps the reference to the
                  Lexical Environment where the function was created. The{" "}
                  <code>[[Environment]]</code> reference is set once and forever
                  at function creation time.
                </p>
                <p>Lets take a look at the following example:</p>
                <CodeSnippet
                  code={`function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();

counter();
counter();
console.log( counter() ); // whats the value here?`}
                />
                <p>
                  In the above example, when <code>makeCounter()</code> runs, a
                  new Lexical Environment is created with{" "}
                  <code>{"{count : 0}"}</code>, and the tiny function after{" "}
                  <code>return</code> is created with its{" "}
                  <code>[[Environment]]</code> pointing to the the{" "}
                  <code>{"{count : 0}"}</code> Lexical Environment. In other
                  words, <code>counter.[[Environment]]</code> points to{" "}
                  <code>{"{count : 0}"}</code>.
                </p>
                <p>
                  Later, when <code>counter()</code> is called, a new Lexical
                  Environment is created for the call, and its outer Lexical
                  Environment reference is taken from{" "}
                  <code>counter.[[Environment]]</code>.
                </p>
                <p>
                  Again, <code>counter.[[Environment]]</code> is set once at
                  creation time, and then with every call to the function a new
                  Lexical Environment is created, and its outer Lexical
                  Environment reference is taken from that{" "}
                  <code>[[Environment]]</code>.
                </p>
                <p>
                  So in the example above, the answer is <code>2</code>. Because
                  with each <code>counter()</code> call, a new Lexical
                  Environment is created, and the code looks for the variable
                  <code>count</code> in it, when it doesn't find it, it looks in
                  the outer Lexical Environment (referenced by{" "}
                  <code>counter.[[Environment]]</code>), finds it it there,
                  return its current value and increase it by <code>1</code>.
                  The next call to <code>counter()</code> sees the updated value
                  of <code>count</code>.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  After the function runs, its Lexical Environment is removed
                  (by garbage collection) if there is no reference to that
                  Lexical Environment (not reachable). Just like any other JS
                  object.
                </p>
                <p>
                  However, if a nested function is created during the execution
                  of that function, and that function is saved (returned and
                  assigned to a variable like in the example above), then the
                  returned function will have reference to that Lexical
                  Environment (via its [[Environment]]), causing the original
                  Lexical environment to stay in memory since its still
                  reachable.
                </p>
                <p>Consider the following example:</p>
                <CodeSnippet
                  code={`function f() {
  let value = Math.random();

  return function() { alert(value); };
}

// 3 functions in array, every one of them links to Lexical Environment
// from the corresponding f() run
let arr = [f(), f(), f()];`}
                />
                <p>
                  Now, since the resulting functions are saved, we will have
                  three Lexical Environment in memory. If we do{" "}
                  <code>arr = null;</code> the memory will be cleaned.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  In theory, Lexical Environment will stay in memory with all
                  its variables as long as there is a reference to it. However,
                  in practice, JS engines like V8 try to optimize and do delete
                  variables when its obvious from the code that they aren't
                  going to be used.
                </p>
                <p>This could create funny debugging issues</p>
                <p>
                  In the example below, try to run <code>alert(value)</code> in
                  the console when the code pauses:
                </p>
                <CodeSnippet
                  code={`function f() {
  let value = Math.random();

  function g() {
    debugger; // in console: type alert(value); No such variable!
  }

  return g;
}

let g = f();
g();`}
                />
                <p>
                  As you could see - there is no such variable! In theory, it
                  should be accessible, but the engine optimized it out.
                </p>
                <p>
                  This feature of V8 is good to know. Perhapses it can change in
                  the future (or already did?).
                </p>
              </>
            ),
            seeMore: [""],
          },
        ],
      },
      {
        chapterTitle: "The old 'var'",
        tips: [
          {
            content: (
              <>
                <p>
                  <code>var</code> has no block scope. Its either inside a
                  function or its global. So if you declare a <code>var</code>{" "}
                  inside an <code>if</code> block or a loop for example, it will
                  accessible from outside.
                </p>
                <p>
                  <code>var</code> tolerates re-declaration.
                </p>
                <p>
                  <code>var</code>, just like function declarations, can be
                  declared below their use. This works for declarations only,
                  not assignment.
                </p>
                <p>
                  IIFE stands for immediately invoked function expressions, it
                  looks like this:
                </p>
                <CodeSnippet
                  code={`(function() {

  var message = "Hello";

  console.log(message); // Hello

})();`}
                />
                <p>
                  Here, a Function Expression is created and immediately called.
                  So the code executes right away and has its own private
                  variables.
                </p>
                <p>
                  This was done in the past because blocks couldn't have their
                  own private <code>var</code>.
                </p>
                <p>
                  There are other ways to create an IIFE (click on "see more" to
                  see them), but won't go through them as this old an no longer
                  needed.
                </p>
              </>
            ),
            seeMore: ["https://javascript.info/var#iife"],
          },
        ],
      },
      {
        chapterTitle: "Global object",
        tips: [
          {
            content: (
              <>
                <p>
                  The global object provides variables and functions that are
                  available anywhere. By default, those that are built into the
                  language or the environment.
                </p>
                <p>
                  We should store values in the global object only if they're
                  truly global for our project. And keep their number at
                  minimum.
                </p>
                <p></p>
                <p>
                  In a browser it is named <code>window</code>, for Node.js it
                  is <code>global</code>. Recently, <code>globalThis</code> was
                  added to the language, as a standardized name for a global
                  object. Use <code>globalThis</code> if your script might run
                  in other environments.
                </p>
                <p>
                  In a browser, global functions (function declarations) and
                  variables declared with <code>var</code> (not <code>let</code>{" "}
                  / <code>const</code>!) become the property of the global
                  object (unless we're using modules):
                </p>
                <CodeSnippet
                  code={`var gVar = 5;

console.log(window.gVar);`}
                />
                <p>
                  Please don't rely on that! This behavior exists for
                  compatibility reasons. Modern scripts use JavaScript modules
                  where such a thing doesn't happen. If you must, write it
                  directly as a property:
                </p>
                <CodeSnippet
                  code={`// make current user information global, to let all scripts access it
window.currentUser = {
  name: "John"
};

// somewhere else in code
console.log(currentUser.name);  // John

// or, if we have a local variable with the name "currentUser"
// get it from window explicitly (safe!)
console.log(window.currentUser.name); // John`}
                />
                <p>
                  That said, using global variables is generally discouraged.
                  There should be as few global variables as possible.
                </p>
              </>
            ),
            seeMore: [],
          },
          {
            content: (
              <>
                <p>
                  A handy usage of global variables though is with polyfills
                  where we can test if the current browser have support for
                  modern JS features like <code>Promise</code> for example:
                </p>
                <CodeSnippet
                  code={`if (!window.Promise) {
  window.Promise = ... // custom implementation of the modern language feature
}`}
                />
              </>
            ),
            seeMore: [""],
          },
        ],
      },
      {
        chapterTitle: "Function object, NFE",
        tips: [
          {
            content: (
              <>
                <p>
                  Imagine functions as callable "action objects". We can not
                  only call them, but also treat them as objects: add/remove
                  properties, pass by reference etc.
                </p>
                <p>Function objects contain some useable properties:</p>
                <p>
                  - <code>name</code>, can be taken from a function declaration
                  name, a variable its assigned to, or even default value:
                </p>
                <CodeSnippet
                  code={`function sayHi() {
  //
}
console.log(sayHi.name); // sayHi

// .............
let sayHi = function() {
  //
};
console.log(sayHi.name); // sayHi

// .............
function f(sayHi = function() {}) {
  console.log(sayHi.name); // sayHi (works!)
}
`}
                />
                <p>
                  If the name can't be figured out, it will be an empty string.
                </p>
                <p>
                  - <code>length</code>, returns the number of function
                  parameters (Rest parameters are not counted).
                </p>
                <p>Consider the following:</p>
                <CodeSnippet
                  code={`function ask(question, ...handlers) {
  let isYes = confirm(question);

  for(let handler of handlers) {
    if (handler.length == 0) {
      if (isYes) handler();
    } else {
      handler(isYes);
    }
  }

}

// for positive answer, both handlers are called
// for negative answer, only the second one
ask("Question?", () => console.log('You said yes'), result => console.log(result));`}
                />
                <p>
                  This is a particular case of so-called polymorphism - treating
                  arguments differently depending on their type or, in our case
                  depending on the <code>length</code>.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  We can add our own properties to function object. Fo example,
                  we can add a property that tracks how many times a function
                  was called:
                </p>
                <CodeSnippet
                  code={`function sayHi() {
  alert("Hi");

  // let's count how many times we run
  sayHi.counter++;
}
sayHi.counter = 0; // initial value

sayHi(); // Hi
sayHi(); // Hi

console.log( sayHi.counter ); //  2`}
                />
                <p>
                  Function properties can replace closures sometimes. For
                  instance, we can replace the <code>counter()</code> example
                  from the Closure chapter with the following:
                </p>
                <CodeSnippet
                  code={`function makeCounter() {
  // instead of:
  // let count = 0

  function counter() {
    return counter.count++;
  };

  counter.count = 0;

  return counter;
}

let counter = makeCounter();
console.log( counter() ); // 0
console.log( counter() ); // 1`}
                />
                <p>
                  The count is now stored in the function directly, not in its
                  outer Lexical Environment.
                </p>
                <p>
                  The main difference is, with closures, the variable value is
                  stored in an outer scope, so external code can't access it,
                  only nested functions can. But, if its a property of a
                  function, then the following is possible:
                </p>
                <CodeSnippet
                  code={`function makeCounter() {

  function counter() {
    return counter.count++;
  };

  counter.count = 0;

  return counter;
}

let counter = makeCounter();

counter.count = 10;
console.log( counter() ); // 10`}
                />
                <p>
                  So, use closures or function properties? depends on our aim.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>NFE, stands for Named Function Expression.</p>
                <CodeSnippet
                  code={`let sayHi = function func(who) {
  if (who) {
    console.log( who );
  } else {
    func( "Guest" ); // use func to re-call itself
  }
};

sayHi(); // Hello, Guest

// But this won't work:
func(); // Error, func is not defined (not visible outside of the function)`}
                />
                <p>
                  Why do we need NFE ? it allows the function to reference it
                  self reliably (for recursive calls and such). We could have
                  used <code>sayHi( "Guest" )</code>, but what if{" "}
                  <code>sayHi</code> changes in the future or we assign it to
                  another variable? then the function would fail.
                </p>
                <p>
                  The variable <code>func</code> is only visible within that
                  function and not outside.
                </p>
                <p>
                  The "internal name" feature described here is only available
                  for Function Expressions, not for Function Declarations. For
                  Function Declarations, there is no syntax for adding an
                  "internal" name.
                </p>
                <p>
                  Sometimes, when we need a reliable internal name, it's the
                  reason to rewrite a Function Declaration to Named Function
                  Expression form.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  Another papular use for NFEs is within popular JS libraries.
                </p>
                <p>
                  They create a "main" function and attach many other "helper"
                  functions to it. For instance, the jQuery library creates a
                  function named <code>$</code>. The lodash library creates a
                  function <code>_</code>, and then adds <code>_.clone</code>,
                  <code>_.keyBy</code>, and other properties to it (see the docs
                  when you want to learn more about them). Actually, they do it
                  to lessen their pollution of the global space, so that a
                  single library gives only one global variable. That reduces
                  the possibility of naming conflicts.
                </p>
              </>
            ),
            seeMore: [""],
          },
        ],
      },
      {
        chapterTitle: "The 'new Function' syntax",
        tips: [
          {
            content: (
              <>
                <p>
                  The syntax of <code>new Function</code> is as follow:
                </p>
                <CodeSnippet
                  code={`let func = new Function ([arg1, arg2, ...argN], functionBody);
                  
// Example: 
let sum = new Function('a', 'b', 'return a + b');

console.log( sum (2, 3) ) // 5`}
                />
                <p>
                  Creating functions like this is useful when we receive
                  function code from server for example. Since the function body
                  is passed as a string, we can do that with{" "}
                  <code>new Function</code> syntax.
                </p>
                <p>
                  Functions created with <code>new Function</code> have their{" "}
                  <code>[[Environment]]</code> set to the global Lexical
                  Environment, not the outer one. Why?
                </p>
                <p>
                  Because minifier optimize variable names inside functions and
                  code blocks, shortening them. Since we don't know the code of
                  functions created with <code>new Function</code> at the time
                  of writing the code or during minification, and only know it
                  during execution (thats the point of <code>new Function</code>
                  ), then minifier can't correctly change the variable names
                  leading to issues.
                </p>
                <p>
                  So, they get their <code>[[Environment]]</code> set to the
                  global Lexical Environment to avoid that issue.
                </p>
                <CodeSnippet
                  code={`function getFunc() {
  let value = "test";

  let func = new Function('console.log(value)');

  return func;
}

getFunc()(); // error: value is not defined`}
                />
                <p>
                  ** What's up with that <code>()()</code> syntax? author just
                  suddenly start using it without mentioning what's what? .. or
                  Is it the same as IIFE mentioned in the previous old{" "}
                  <code>var</code> chapter?
                </p>
              </>
            ),
            seeMore: [""],
          },
        ],
      },
      {
        chapterTitle: "Scheduling: setTimeout and setInterval",
        tips: [
          {
            content: (
              <>
                <p>
                  - <code>setTimeout</code> allows us to run a function once
                  after the interval of time.
                </p>
                <p>
                  - <code>setInterval</code> allows us to run a function
                  repeatedly, starting after the interval of time, then
                  repeating continuously at that interval.
                </p>
                <p>
                  Those two methods aren't part of the JS specifications, but
                  most environments provide them.
                </p>
                <p>
                  First arguments of both methods can be a code string or a
                  function. However, it is not recommended to pass a code string
                  and it only exist for historical reasons
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>Syntax of setTimeout is as follow:</p>
                <CodeSnippet
                  code={`let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)
                  
// Example: 
function sayHi(phrase, who) {
  console.log( phrase + ', ' + who );
}

setTimeout(sayHi, 1000, "Hello", "John"); // Hello, John`}
                />
                <p>
                  We can use <code>clearTimeout(identifier)</code> to cancel
                  execution:
                </p>
                <CodeSnippet
                  code={`let timerId = setTimeout(...);
clearTimeout(timerId);`}
                />
                <p>
                  The identifier in the browser is a number, but in Node.js its
                  an object. Again, there are no universal specifications for
                  these methods so that's fine.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  The syntax of <code>setInterval</code> is similar to that of{" "}
                  <code>setTimeout</code>:
                </p>
                <CodeSnippet
                  code={`let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)
                  
// Example: 
let timerId = setInterval(() => console.log('tick'), 2000);`}
                />
                <p>
                  We can stop execution using{" "}
                  <code>clearInterval(identifier)</code>.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  Using nested <code>setTimeout</code> is more flexible than{" "}
                  <code>setInterval</code> and it also allows us to set the
                  delay between the executions more precisely.
                </p>
                <CodeSnippet
                  code={`/** instead of:
let timerId = setInterval(() => alert('tick'), 2000);
*/

let timerId = setTimeout(function tick() {
  console.log('tick');
  timerId = setTimeout(tick, 2000); // (*)
}, 2000);`}
                />
                <p>
                  For flexibility, we have more flexibility with nested{" "}
                  <code>setTimeout</code>. For instance, the next call might be
                  scheduled differently, depending on the result of the current
                  one:
                </p>
                <CodeSnippet
                  code={`let delay = 5000;

let timerId = setTimeout(function request() {
  ...send request...

  if (request failed due to server overload) {
    // increase the interval to the next run so not to overload server
    delay *= 2;
  }

  timerId = setTimeout(request, delay);

}, delay);`}
                />
                <p>As for precision:</p>
                <ul>
                  <li>
                    <code>setInterval</code> The real delay between calls is
                    less than in the set delay. Why? because the time taken by
                    the execution of <code>setInterval</code> "consumes" a part
                    of the interval. So if we set the interval to be two seconds
                    for example, and the execution of <code>setInterval</code>{" "}
                    takes 0.1 seconds, the next call will be in 1.9 seconds, not
                    2.
                  </li>
                  <li>
                    <code>setTimeout</code> The nested <code>setTimeout</code>{" "}
                    guarantees the fixed delay. Because it will make the next
                    call only after the first one finishes.
                  </li>
                </ul>
                <p>
                  Click on "see more", for helpful graphs showcasing the above
                  comparison.
                </p>
              </>
            ),
            seeMore: [
              "https://javascript.info/settimeout-setinterval#nested-settimeout",
            ],
          },
          {
            content: (
              <>
                <p>
                  We can use zero-delay <code>setTimeout(func, 0)</code>, or
                  really just <code>setTimeout(func).</code>
                </p>
                <p>
                  What's the point? The scheduler will only "check the calendar"
                  after the current script is complete. So can use zero-delay{" "}
                  <code>setTimeout</code> to run a function as soon as possible
                  only after the current script is done.
                </p>
                <CodeSnippet
                  code={`setTimeout(() => console.log("World"));

console.log("Hello");

// console will print: Hello World`}
                />
                <p>
                  There are also other uses for zero-delay{" "}
                  <code>setTimeout</code>, we will discuss them later.
                </p>
                <p>
                  There is a limitation, if we have nested zeo-delay{" "}
                  <code>setTimeout</code>, after the 5th nested timer, there is
                  an obligatory 4 milliseconds delay. This limitation is only
                  for browsers (Node.js doesn't have it), and comes from ancient
                  times, still here only for legacy support because many scripts
                  rely on it.
                </p>
                <p>
                  Please note that all scheduling methods do not guarantee the
                  exact delay. Things like processor overload can increase the
                  minimal timer resolution (the minimal delay) to 300ms or even
                  1000ms.
                </p>
              </>
            ),
            seeMore: [""],
          },
        ],
      },
      {
        chapterTitle: "Decorators and forwarding, call/apply",
        tips: [
          {
            content: (
              <>
                <p>
                  In this chapter, we will learn how to forward calls between
                  functions and decorate them.
                </p>
                <p>Consider the following caching example:</p>
                <CodeSnippet
                  code={`function slow(x) {
  // there can be a heavy CPU-intensive job here
  return x;
}

function cachingDecorator(func) {
  let cache = new Map();

  return function(x) {
    if (cache.has(x)) {    // if there's such key in cache
      return cache.get(x); // read the result from it
    }

    let result = func(x);  // otherwise call func

    cache.set(x, result);  // and cache (remember) the result
    return result;
  };
}

slow = cachingDecorator(slow);

console.log( slow(1) ); // slow(1) is cached and the result returned
console.log( "Again: " + slow(1) ); // slow(1) result returned from cache

alert( slow(2) ); // slow(2) is cached and the result returned
alert( "Again: " + slow(2) ); // slow(2) result returned from cache`}
                />
                <p>
                  In the above example, <code>cachingDecorator(func)</code> is a
                  decorator.
                </p>
                <p>
                  Decorator is a wrapper around a function that alters its
                  behavior. The main job is still carried out by the function.
                </p>
                <p>
                  Decorators can be seen as "features" or "aspects" that can be
                  added to a function. We can add one or add many without
                  changing the function code.
                </p>
                <p>
                  The idea is that we can call <code>cachingDecorator</code> for
                  any function, and it will return the caching wrapper. That's
                  great, because we can have many functions that could use such
                  a feature, and all we need to do is to apply{" "}
                  <code>cachingDecorator</code> to them.
                </p>
                <p>
                  So why use wrapper (decorator)? reusability and separation of
                  concern.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  The caching decorator mentioned above is not suited to work
                  with object methods.
                </p>
                <p>
                  To make it work, we need to use <code>func.call</code>:
                </p>
                <CodeSnippet code={`func.call(context, arg1, arg2, ...)`} />
                <p>Lets try it out:</p>
                <CodeSnippet
                  code={`let worker = {
  someMethod() {
    return 1;
  },

  slow(x) {
    return x * this.someMethod(); // (*)
  }
};

function cachingDecorator(func) {
  let cache = new Map();
  return function(x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    let result = func.call(this, x); 
    // "this" is passed correctly now
    // "this"="worker" because it is inside the return statement,
    // and the return statement is assigned worker.slow (see below)
    cache.set(x, result);
    return result;
  };
}

worker.slow = cachingDecorator(worker.slow); // now make it caching

console.log( worker.slow(2) ); // works
console.log( worker.slow(2) ); // works, doesn't call the original (cached)`}
                />
                <p>
                  Up until now, we have been passing one argument only. How
                  about when have multiple arguments to pass? how can we store
                  them in the <code>Map</code>?
                </p>
                <p>
                  There are multiple ways, one of which is to use some kind of
                  an hashing algorithm to combine the arguments into a string
                  and use that as they key in <code>Map</code>. Don't let the
                  word hashing scare you, it's actually quite basic:
                </p>
                <CodeSnippet
                  code={`let worker = {
  slow(min, max) {
    return min + max;
  }
};

function cachingDecorator(func, hash) {
  let cache = new Map();
  return function() {
    let key = hash(arguments); // remember the special array-like and iterable "arguments" ?
    if (cache.has(key)) {
      return cache.get(key);
    }

    let result = func.call(this, ...arguments); 

    cache.set(key, result);
    return result;
  };
}

function hash(args) {
  return args[0] + ',' + args[1];
}

worker.slow = cachingDecorator(worker.slow, hash);

console.log( worker.slow(3, 5) ); // works
console.log( "Again " + worker.slow(3, 5) ); // same (cached)`}
                />{" "}
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  <code>func.apply</code> is very similar to{" "}
                  <code>func.call</code>, its syntax is as follow:
                </p>
                <CodeSnippet code={`func.apply(context, args)`} />
                <p>
                  The only difference between the two is that{" "}
                  <code>func.call</code> takes a list of arguments, while{" "}
                  <code>func.apply</code> only accepts an array-like object.
                </p>
                <p>
                  For objects that are both, iterable and array-like, (such as a
                  real array), we can use both of them:
                </p>
                <CodeSnippet
                  code={`let arr = [1,2];

// This:                  
func.call(obj, ...arr);

// is the same as
func.apply(obj, arr);`}
                />
                <p>
                  <code>apply</code> will probably be faster, because most
                  JavaScript engines internally optimize it better.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  Passing all arguments along with the context to another
                  function is called call forwarding.
                </p>
                <CodeSnippet
                  code={`let wrapper = function() {
  return func.apply(this, arguments);
};`}
                />
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>Skipping the "Borrowing a method" part for now.</p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  It is generally safe to replace a function or a method with a
                  decorated one, except for one little thing. If the original
                  function had properties on it, like func.calledCount or
                  whatever, then the decorated one will not provide them.
                </p>
                <p>
                  Decorators can provide their own properties. E.g. a decorator
                  may count how many times a function was invoked and how much
                  time it took, and expose this information via wrapper
                  properties.
                </p>
                <p>
                  There exists a way to create decorators that keep access to
                  function properties, but this requires using a special Proxy
                  object to wrap a function. We'll discuss it later.
                </p>
              </>
            ),
            seeMore: [""],
          },
        ],
      },
      {
        chapterTitle: "Function binding",
        tips: [
          {
            content: (
              <>
                <p>
                  When passing object methods as callbacks, for instance to
                  <code>setTimeout</code>, there's a known problem: "losing
                  <code>this</code>".
                </p>
                <p>
                  The method <code>setTimeout</code> in-browser is a little
                  special: it sets <code>this=window</code> for the function
                  call.
                </p>
                <p>
                  There are few ways we can pass methods as callbacks without
                  losing the value of <code>this</code>.
                </p>
                <p>1- Wrap it with a function:</p>
                <CodeSnippet
                  code={`setTimeout(function() {
  user.sayHi(); // Hello, John!
}, 1000);`}
                />
                <p>
                  There is a small issue with this approach, if{" "}
                  <code>user</code> changes before that 1 second delay, we will
                  get the wrong <code>user</code>.
                </p>
                <CodeSnippet
                  code={`const user = {
fn: "John",
  sayHi() {
    console.log(this.fn);
  },
};

setTimeout(() => {
  user.sayHi();  // will print Micheal
}, 1000);

user = {
  fn: "Micheal",
  sayHi() {
    console.log(this.fn);
  },
};`}
                />
                <p>
                  2- Using <code>bind()</code>:
                </p>
                <CodeSnippet
                  code={`let user = {
fn: "John",
  sayHi() {
    console.log(this.fn);
  },
};

let sayHi = user.sayHi.bind(user);

setTimeout(() => {
  sayHi();
}, 1000);

// even if the value of user changes within 1 second
// sayHi uses the pre-bound value which is reference to the old user object
user = {
  fn: "Micheal",
  sayHi() {
    console.log(this.fn);
  },
};`}
                />
                <p>
                  * Note that in the two methods above, the whole object has to
                  change value, not just the <code>fn</code>property for
                  example. If we just did <code>user.fn = "Micheal"</code>, we
                  will be getting that value no matter what.
                </p>
                <p>
                  If we have a bunch of methods we want to bind, we can always
                  loop through and bind them:
                </p>
                <CodeSnippet
                  code={`for (let key in user) {
  if (typeof user[key] == 'function') {
    user[key] = user[key].bind(user);
  }
}`}
                />
                <p>
                  Full syntax of <code>func.bind</code>:
                </p>
                <CodeSnippet
                  code={`let bound = func.bind(context, [arg1], [arg2], ...);`}
                />
                <p>
                  It returns an exotic object that's callable, and transparently
                  pass the call to func with the right value of{" "}
                  <code>this</code> and bound arguments.
                </p>
                <p>So we can use it to bind arguments to function as well:</p>
                <CodeSnippet
                  code={`function multiply(a, b) {
  return a * b;
}

let double = multiply.bind(null, 2); // make a new function with the first argument 2 bound it to

console.log( double(3) ); // = multiply(2, 3) = 6`}
                />
                <p>
                  That's called partial function application - we create a new
                  function by fixing some parameters of the existing one.
                </p>
                <p>
                  What if we want to fix some arguments but not the value of{" "}
                  <code>this</code>? Unfortunately, The native <code>bind</code>{" "}
                  does not allow that. We can't just omit the context and jump
                  to arguments.
                </p>
                <p>
                  Fortunately, a function <code>partial</code> for binding only
                  arguments can be easily implemented:
                </p>
                <CodeSnippet
                  code={`function partial(func, ...argsBound) {
  return function(...args) {
    return func.call(this, ...argsBound, ...args);
  }
}

// Usage:
let user = {
  firstName: "John",
  say(time, phrase) {
    console.log(time, this.firstName, phrase);
  }
};

// add a partial method with fixed time
user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes());

user.sayNow("Hello");`}
                />
              </>
            ),
            seeMore: [""],
          },
        ],
      },
      {
        chapterTitle: "Arrow functions revisited",
        tips: [
          {
            content: (
              <>
                <p>
                  Arrow functions do not have <code>this</code>. If{" "}
                  <code>this</code> is accessed, it is taken from the outside.
                </p>
                <CodeSnippet
                  code={`let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],

  showList() {
    this.students.forEach(
      student => alert(this.title + ': ' + student)
    );
  }
};

group.showList();`}
                />
                <p>
                  In the example above, if we used a regular function (write the
                  word "<code>function</code>" before <code>()</code>), an error
                  will occur because <code>forEach</code> runs functions with{" "}
                  <code>this=undefined</code> by default.
                </p>
                <p>
                  Not having <code>this</code> naturally means another
                  limitation: arrow functions can't be used as constructors.
                  They can't be called with <code>new</code>.
                </p>
                <p>
                  Arrow functions also have no <code>arguments</code> variable.
                </p>
                <p>
                  They also don't have <code>super</code>, we will study it
                  later in Class inheritance.
                </p>
                <p>
                  Still need to revisit the last example of the chapter, just
                  don't have the mental capacity to do so now.
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

export default tips3;
