import CodeSnippet from "../components/CodeSnippet";

// section 5
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
    ],
  },
];

export default tips3;
