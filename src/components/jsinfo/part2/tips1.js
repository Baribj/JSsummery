import CodeSnippet from "../../CodeSnippet";

// Section 1

const tips1 = [
  {
    sectionTitle: "Document",
    chapters: [
      {
        chapterTitle: "Browser environment, specs",
        tips: [
          {
            content: (
              <>
                <p>
                  A host environment provides its own objects and functions in
                  addition to the language core. Web browsers give a means to
                  control web pages. Node.js provides server-side features, and
                  so on.
                </p>
                <p>The window object provides DOM, BOM and JavaScript.</p>
                <p>
                  DOM stands for Document Object Model. It represents all page
                  content as objects that can be modified.{" "}
                  <a href="https://dom.spec.whatwg.org/">DOM Living Standard</a>
                  .
                </p>
                <p>
                  There's also a separate specification, CSS Object Model
                  (CSSOM) for CSS rules and stylesheets, that explains how they
                  are represented as objects, and how to read and write them.
                </p>
                <p>
                  BOM stands for stands for Browser Object Model. It represents
                  additional objects provided by the browser (host environment)
                  for working with everything except the document. Things like
                  navigator and location.
                </p>
                <p>
                  Functions <code>alert</code> / <code>confirm</code> /{" "}
                  <code>prompt</code> are also part of BOM. they are not
                  directly related to the document, but represent pure browser
                  methods for communicating with the user.
                </p>
                <p>
                  The BOM is a part of the{" "}
                  <a href="https://html.spec.whatwg.org/">
                    general HTML specification
                  </a>
                  .
                </p>
              </>
            ),
            seeMore: [""],
          },
        ],
      },
      {
        chapterTitle: "DOM tree",
        tips: [
          {
            content: (
              <>
                <p>
                  Every HTML tag is an object. Nested tags are "children" of the
                  enclosing one. The text inside a tag is an object as well.
                </p>
                <p>Tags are element nodes (or just elements).</p>
                <p>
                  The text inside elements forms text nodes. A text node
                  contains only a string. It may not have children and is always
                  a leaf of the tree.
                </p>
                <p>
                  If we put something after <code>{"</body>"}</code>, then that
                  is automatically moved inside the body, at the end, as the
                  HTML spec requires that all content must be inside{" "}
                  <code>{"</body>"}</code>.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  If the browser encounters malformed HTML, it automatically
                  corrects it when making the DOM.
                </p>
                <p>
                  For instance, the top tag is always <code>{"</html>"}</code>.
                  Even if it doesn't exist in the document, it will exist in the
                  DOM, because the browser will create it. The same goes for{" "}
                  <code>{"</body>"}</code>.
                </p>
                <p>
                  By DOM specification tables must have{" "}
                  <code>{"</tbody>"}</code>. If not, browser will create{" "}
                  <code>{"</tbody>"}</code> on the DOM automatically.
                </p>
                <p>
                  Everything in HTML, even comments, becomes a part of the DOM.
                  Comments form their own nodes.
                </p>
                <p>
                  There are 12 node types. In practice we usually work with 4 of
                  them:
                </p>
                <ul>
                  <li>
                    <code>document</code> - the "entry point' into DOM.
                  </li>
                  <li>Element nodes - HTML-tags, the tree building blocks.</li>
                  <li>Text nodes - contain text.</li>
                  <li>
                    Comments - sometimes we can put information there, it won't
                    be shown, but JS can read it from the DOM.
                  </li>
                </ul>
                <p>
                  Please note that the DOM structure in developer tools is
                  simplified. Text nodes are shown just as text. And there are
                  no "blank" (space only) text nodes at all (they are hidden).
                  That's fine, because most of the time we are interested in
                  element nodes.
                </p>
                <p>
                  Select a node in developer tool and it will be available in
                  console as <code>$0</code>, you can then run JS code on it
                  like <code>$0.style.background = 'red'</code>.
                </p>
              </>
            ),
            seeMore: [""],
          },
        ],
      },
      {
        chapterTitle: "Walking the DOM",
        tips: [
          {
            content: (
              <>
                <p>
                  The topmost tree nodes are available directly as document
                  properties:
                </p>
                <p>
                  - <code>{"<html> = document.documentElement"}</code>, It is
                  the topmost document node.
                </p>
                <p>
                  - <code>{"<body> = document.body"}</code>.
                </p>
                <p>
                  - <code>{"<head> = document.head"}</code>.
                </p>
                <p>
                  Remember, a script cannot access an element that doesn't exist
                  at the moment of running. If you try to access{" "}
                  <code>document.body</code> inside the head for example, it
                  will be null.
                </p>
                <p>
                  Children are direct children, defendants, are direct children
                  and their children ... etc.
                </p>
                <p>
                  The <code>childNodes</code> collection lists all child nodes,
                  including text nodes. It looks like an array, but it isn't. It
                  is a collection - a special array-like iterable object.
                </p>
                <p>
                  We can use <code>for..of</code> array on it, but we can't use
                  array methods. We can still use <code>Array.from</code> to
                  create a "real" array from the collection if we want to use
                  array methods.
                </p>
                <p>
                  Properties <code>firstChild</code> and <code>lastChild</code>{" "}
                  give fast access to the first and last children.
                </p>
                <p>
                  DOM collections, and even more - all navigation properties
                  listed in this chapter are read-only. We can't replace a child
                  by something else by assigning{" "}
                  <code>childNodes[i] = ....</code>.
                </p>
                <p>
                  Almost all DOM collections with minor exceptions are live.
                  That means if you keep a reference to an element, and then
                  add/remove nodes, change will be reflected in that reference.
                </p>
                <p>
                  Don't use <code>for...in</code> to iterate collections. It
                  iterates over all enumerable properties and collections have
                  some "extra" rarely used properties that we usually do not
                  want to get.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  - <code>nextSibling</code> gets the next sibling.
                </p>
                <p>
                  - <code>previousSibling</code> gets previous sibling.
                </p>
                <p>
                  - <code>parentNode</code> gets parent.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  Navigation properties listed above refer to all nodes. For
                  instance, in <code>childNodes</code> we can see both text
                  nodes, element nodes, and even comment nodes if they exist.
                </p>
                <p>What if we only want element nodes?</p>
                <p>
                  Here are properties that we can use for Element-only
                  navigation.
                </p>
                <p>
                  - <code>children</code>.
                </p>

                <p>
                  - <code>firstElementChild</code>,{" "}
                  <code>lastElementChild </code>.
                </p>

                <p>
                  - <code>previousElementSibling</code>,{" "}
                  <code>nextElementSibling </code>.
                </p>

                <p>
                  - <code>parentElement</code>. How can a parent not be an
                  element? what's the difference between{" "}
                  <code>parentElement</code> and <code>parentNode</code>? they
                  are generally the same with one difference:
                </p>
                <CodeSnippet
                  code={`alert( document.documentElement.parentNode ); // document
alert( document.documentElement.parentElement ); // null`}
                />
                <p>
                  Because <code>document</code> is the parent of{" "}
                  <code>documentElement</code> ({"<html>"}) and{" "}
                  <code>document</code> is not an element node.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  Certain types of DOM elements may provide additional
                  properties, specific to their type, for convenience.
                </p>
                <p>
                  Tables are a great example. Lets explore their properties:
                </p>
                <p>
                  - <code>table.rows</code>.
                </p>
                <p>
                  - <code>table.caption/tHead/tFoot</code>.
                </p>
                <p>
                  - <code>table.tBodies</code>.
                </p>
                <p>
                  <code>{"<thead>"}</code>, <code>{"<tfoot>"}</code>,{" "}
                  <code>{"<tbody>"}</code> elements provide the{" "}
                  <code>rows</code> property:
                </p>
                <p>
                  - <code>tbody.rows</code> - the collection of{" "}
                  <code>{"<tr>"}</code> inside.
                </p>
                <p>
                  For <code>{"<tr>"}</code>:
                </p>
                <p>
                  - <code>tr.cells</code> - the collection of{" "}
                  <code>{"<td>"}</code> and <code>{"<th>"}</code> cells inside
                  the given <code>{"<tr>"}</code>.
                </p>
                <p>
                  - <code>tr.sectionRowIndex</code> - the position (index) of
                  the given <code>{"<tr>"}</code> inside the enclosing{" "}
                  <code>{"<thead>"}</code> / <code>{"<tbody>"}</code> /{" "}
                  <code>{"<tfoot>"}</code>.
                </p>
                <p>
                  - <code>tr.rowIndex</code> - the number of the{" "}
                  <code>{"<tr>"}</code> in the table as a whole (including all
                  table rows).
                </p>
                <p>
                  For <code>{"<td>"}</code> and <code>{"<th>"}</code>:
                </p>
                <p>
                  - <code>td.cellIndex</code> the number of the cell inside the
                  enclosing <code>{"<tr>"}</code>.
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

export default tips1;
