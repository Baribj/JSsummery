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
        ],
      },
    ],
  },
];

export default tips3;
