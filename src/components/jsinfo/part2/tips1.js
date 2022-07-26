import CodeSnippet from "../../CodeSnippet";

// images
import offsetParent from "./images/1.9/offsetParent.png";
import clientWidthHeight from "./images/1.9/clientWidthHeight.png";
import clientWidthHeight1 from "./images/1.9/clientWidthHeight1.png";
import scrollTopLeft from "./images/1.9/scrollTopLeft.png";
import windowVsDocument from "./images/1.9/windowVsDocument.png";
import getBoundingClientRect from "./images/1.9/getBoundingClientRect.png";

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
      {
        chapterTitle: "",
        tips: [
          {
            content: (
              <>
                <p>
                  If we have an element with the id <code>"elem"</code> for
                  example, there will be a global variable <code>elem</code>{" "}
                  referencing it. So we can access the element directly{" "}
                  <code>elem.style.background = 'red'</code>. However, please
                  don't use this method.
                </p>
                <p>Please always keep id of elements unique.</p>
                <p>
                  - <code>elem.querySelectorAll(css)</code> returns all elements
                  inside <code>elem</code> matching the given CSS selector.
                </p>
                <p>
                  - <code>elem.querySelector(css)</code> returns the first
                  element for the given CSS selector.
                </p>
                <p>
                  - <code>elem.matches(css)</code> checks if <code>elem</code>{" "}
                  matches the given CSS-selector. It returns <code>true</code>{" "}
                  or <code>false</code>.
                </p>
                <p>
                  - <code>elem.closest(css)</code> looks for the nearest
                  ancestor that matches the CSS-selector. The elem itself is
                  also included in the search.
                </p>
                <p>
                  - <code>elemA.contains(elemB)</code> returns <code>true</code>{" "}
                  if <code>elemB</code> is inside <code>elemA</code> or when{" "}
                  <code>elemA==elemB</code>.
                </p>
                <p>
                  <code>elem.getElementsByTagName(tag)</code>,{" "}
                  <code>elem.getElementsByClassName(className)</code>, and{" "}
                  <code>document.getElementsByName(name)</code> are old and have
                  been replaced by <code>querySelector</code>.
                </p>
                <p>
                  <code>getElementById</code> and <code>querySelectorAll</code>{" "}
                  return a static one.
                </p>
                <p>
                  Notice that we can call <code>querySelector</code> and{" "}
                  <code>querySelectorAll</code> on elements, but we can't do
                  that with <code>getElementById</code>.
                </p>
                <p>
                  Take a look on this{" "}
                  <a href="https://javascript.info/searching-elements-dom#summary">
                    {" "}
                    summary table.
                  </a>
                </p>
              </>
            ),
            seeMore: [""],
          },
        ],
      },
      {
        chapterTitle: "Node properties: type, tag and contents",
        tips: [
          {
            content: (
              <>
                <p>To ge the class name of a DOM node:</p>
                <CodeSnippet
                  code={`console.log( document.body.constructor.name ); // HTMLBodyElement`}
                />
                <p>
                  We can also use <code>instanceof</code> to check it:
                </p>
                <CodeSnippet
                  code={`console.log( document.body instanceof HTMLBodyElement ); // true
console.log( document.body instanceof HTMLElement ); // true
console.log( document.body instanceof Element ); // true
console.log( document.body instanceof Node ); // true
console.log( document.body instanceof EventTarget ); // true`}
                />
                <p>
                  - <code>nodeType</code> property provides one more,
                  "old-fashioned" way to get the "type" of a DOM node.
                </p>
                <CodeSnippet
                  code={`console.log(elem.nodeType); // 1 => element`}
                />
                <p>
                  To get tag name of a node we can use <code>tagName</code> or{" "}
                  <code>nodeName</code>:
                </p>
                <CodeSnippet
                  code={`console.log( document.body.nodeName ); // BODY
console.log( document.body.tagName ); // BODY`}
                />
                <p>
                  The difference between them is that <code>tagName</code>{" "}
                  exists only for element nodes. While <code>nodeName</code>{" "}
                  give us the name of the tag for elements (just like{" "}
                  <code>tagName</code>), and for other nodes (text, comments ..
                  etc) it will give us a string with the node type.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  - <code>innerHTML</code> property allows to get the HTML
                  inside the element as a string. If we use it to insert{" "}
                  <code>{"<script>"}</code> it will be a part of the HTML but
                  won't execute.
                </p>
                <p>
                  Note that we can use <code>innerHTML+=</code> to append HTML
                  but it does a full re-write. The content is "zeroed-out" and
                  rewritten from the scratch, all images and other resources
                  will be reloaded.
                </p>
                <p>
                  There are other side-effects as well, if something was
                  selected, it will be un-selected, if an input field that had
                  some value, it will be deleted ... etc.
                </p>
                <p>
                  - <code>outerHTML</code> property contains the full HTML of
                  the element. That's like <code>innerHTML</code> plus the
                  element itself.
                </p>
                <p>
                  Note that if we do <code>elem.outerHTML = ...</code>, the dom
                  element will be removed from the DOM and replaced by the new
                  HTML. However, <code>elem</code> will still reference the old
                  element.
                </p>
                <p>
                  <code>innerHTML</code> is only available for element nodes.
                  For other nodes like text nodes, they have{" "}
                  <code>nodeValue</code> and <code>data</code>. The two are
                  almost identical.
                </p>
                <p>
                  Sometimes developers embed information or template
                  instructions into HTML in comments, then JS can read and
                  process them.
                </p>
                <p>
                  - <code>textContent</code> provides access to the text inside
                  the element: only text, minus all <code>{"<tags>"}</code>.
                </p>
                <p>
                  In practice, reading from <code>textContent</code> is rarely
                  used. Writing to it though is much more useful, because it
                  allows to write text the "safe way".
                </p>
                <p>
                  Hence, it is safer than <code>innerHTML</code> when we want to
                  take input from user for example and insert it in the page.
                  That's because with <code>textContent</code> all symbols are
                  treated literally (so <code>{"<b></b>"}</code> for example
                  will just be the text {"<b></b>"}).
                </p>
                <p>
                  The hidden property <code>{"<div hidden></div>"}</code> works
                  just like the CSS <code>display : none;</code>, but shorter to
                  write. We can assign it like this:{" "}
                  <code>elem.hidden = true</code>.
                </p>
                <p>Other properties include:</p>
                <p>
                  - <code>value</code> the value for <code>{"<input>"}</code>,{" "}
                  <code>{"<select>"}</code> and <code>{"<textarea>"}</code> (
                  <code>HTMLInputElement</code>, <code>HTMLSelectElement</code>{" "}
                  …).
                </p>
                <p>
                  - <code>href</code> the "href" for{" "}
                  <code>{' <a href="...">'}</code> (
                  <code>HTMLAnchorElement</code>).
                </p>
                <p>
                  - <code>id</code> the value of "id" attribute, for all
                  elements (<code>HTMLElement</code>).
                </p>
                <p>- ... and much more ...</p>
              </>
            ),
            seeMore: [""],
          },
        ],
      },
      {
        chapterTitle: "Attributes and properties",
        tips: [
          {
            content: (
              <>
                <p>
                  In HTML, tags may have attributes. When the browser parses the
                  HTML to create DOM objects for tags, it recognizes standard
                  attributes and creates DOM properties from them.
                </p>
                <CodeSnippet
                  code={`<!doctype html>
<body id="test" something="non-standard">
  <script>
    console.log(document.body.id); // test
    // non-standard attribute does not yield a property
    console.log(document.body.something); // undefined
  </script>
</body>`}
                />
                <p>
                  Please note that a standard attribute for one element can be
                  unknown for another one.
                </p>
                <p>So how do we access non-standard attributes?</p>
                <p>
                  - <code>elem.hasAttribute(name)</code> checks for existence.
                </p>
                <p>
                  - <code>elem.getAttribute(name)</code> gets the value.
                </p>
                <p>
                  - <code>elem.setAttribute(name, value)</code> sets the value.
                </p>
                <p>
                  - <code>elem.removeAttribute(name)</code> removes the
                  attribute.
                </p>
                <p>
                  HTML attributes are case-insensitive and their value is always
                  a string.
                </p>
                <p>
                  - <code>elem.attributes</code> collection is iterable and has
                  all the attributes of the element (standard and non-standard)
                  as objects with name and value properties.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  When a standard attribute changes, the corresponding property
                  is auto-updated, and (with some exceptions) vice versa.
                </p>
                <CodeSnippet
                  code={`<!doctype html>

<input />

<script>
  let input = document.querySelector('input');

  // attribute => property
  input.setAttribute('id', 'id');
  console.log(input.id); // id (updated)

  // property => attribute
  input.id = 'newId';
  console.log(input.getAttribute('id')); // newId (updated)
</script>`}
                />
                <p>
                  But there are exclusions, for instance{" "}
                  <code>input.value</code> synchronizes only from attribute → to
                  property, but not back:
                </p>
                <CodeSnippet
                  code={`<!doctype html>

<input />

<script>
  let input = document.querySelector('input');

  // attribute => property
  input.setAttribute('value', 'text');
  console.log(input.value); // text

  // NOT property => attribute
  input.value = 'newValue';
  console.log(input.getAttribute('value')); // text (not updated!)
</script>`}
                />
                <p>
                  That "feature" may actually come in handy, because the user
                  actions may lead to <code>value</code> changes, and then after
                  them, if we want to recover the "original" value from HTML,
                  it's in the attribute.
                </p>
                <p>
                  If you are confused, just know that the "attribute" is what
                  shows in the developer tool as <code>value = ""</code> for
                  example, while the "property" is the property of the DOM
                  object. Obviously, methods like <code>elem.getAttribute</code>{" "}
                  deal with the first, and things like{" "}
                  <code>elem.value = ""</code> deal with the second.
                </p>
                <p>In other words:</p>
                <ul>
                  <li>Attributes - is what's written in HTML.</li>
                  <li>Properties - is what's in DOM objects.</li>
                </ul>
                <p>
                  See{" "}
                  <a href="https://javascript.info/dom-attributes-and-properties#summary">
                    here
                  </a>{" "}
                  for table summary comparing the two.
                </p>
                <p>So for example if you do the following:</p>
                <CodeSnippet
                  code={`<!doctype html>

<input id="id" />

<script>
  const elem = document.querySelector("#id");

  elem.value = "ss";

  elem.setAttribute("value", "dd");

  console.log(elem.value); // ss
  console.log(elem.getAttribute("value")); // dd
</script>`}
                />
                <p>
                  You will see the input field with the value <code>ss</code>,
                  but if you go to developer tools you will see the attribute{" "}
                  <code>value="dd"</code>. Console logging them will reflect
                  those same values as well.
                </p>
                <p>Why aren't they synched? see the above explanation.</p>
                <p>
                  For most situations using DOM properties is preferable. We
                  should refer to attributes only when DOM properties do not
                  suit us, when we need exactly attributes, for instance:
                </p>
                <ul>
                  <li>
                    We need a non-standard attribute. But if it starts with
                    <code>data-</code>, then we should use <code>dataset</code>.
                  </li>
                  <li>
                    We want to read the value “as written” in HTML. The value of
                    the DOM property may be different, for instance the{" "}
                    <code>href</code> property is always a full URL, and we may
                    want to get the "original" value.
                  </li>
                </ul>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  DOM properties are not always strings. For instance, the
                  <code>input.checked</code> property (for checkboxes) is a
                  boolean.
                </p>
                <p>
                  There are other examples. The <code>style</code> attribute is
                  a string, but the <code>style</code> property is an object:
                </p>
                <CodeSnippet
                  code={`// string
console.log(elem.getAttribute('style')); // color:red;font-size:120%

// object
console.log(elem.style); // [object CSSStyleDeclaration]`}
                />
                <p>Most properties are strings though.</p>
                <p>
                  Quite rarely, even if a DOM property type is a string, it may
                  differ from the attribute. For instance, the <code>href</code>{" "}
                  DOM property is always a full URL, even if the attribute
                  contains a relative URL or just a <code>#hash</code>.
                </p>
                <CodeSnippet
                  code={`// attribute
console.log(a.getAttribute('href')); // #hello

// property
console.log(a.href ); // full URL in the form http://site.com/page#hello`}
                />
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  When writing HTML, we use a lot of standard attributes. But
                  what about non-standard, custom ones? First, let's see whether
                  they are useful or not? What for?
                </p>
                <p>
                  Sometimes non-standard attributes are used to pass custom data
                  from HTML to JavaScript, or to "mark" HTML-elements for
                  JavaScript.
                </p>
                <CodeSnippet
                  code={`<!doctype html>

<div show-info="name"></div>

<div show-info="age"></div>

<script>
  // the code finds an element with the mark and shows what's requested
  let user = {
    name: "Pete",
    age: 25
  };

  for(let div of document.querySelectorAll('[show-info]')) { // *
    // insert the corresponding info into the field
    let field = div.getAttribute('show-info');
    div.innerHTML = user[field]; // first Pete into "name", then 25 into "age"
  }
</script>`}
                />
                <p>
                  Why the <code>[]</code> around the attribute in line{" "}
                  <code>*</code>? because <code>querySelectorAll</code> accepts
                  a CSS selector, and thats how we target attributes in CSS.
                </p>
                <p>We can also use them to style elements for example:</p>
                <CodeSnippet
                  code={`<!doctype html>

<style>
  /* styles rely on the custom attribute "order-state" */
  .order[order-state="new"] {
    color: green;
  }

  .order[order-state="pending"] {
    color: blue;
  }

  .order[order-state="canceled"] {
    color: red;
  }
</style>

<div class="order" order-state="new">
  A new order.
</div>

<div class="order" order-state="pending">
  A pending order.
</div>

<div class="order" order-state="canceled">
  A canceled order.
</div>`}
                />
                <p>
                  Now, the question is, why use attributes instead of classes?
                  Because an attribute is more convenient to manage. The state
                  can be changed as easy as:
                </p>
                <CodeSnippet
                  code={`div.setAttribute('order-state', 'canceled');`}
                />
                <p>
                  There is an issue with custom attributes tho. What if we use a
                  custom name and then later the name is used in introduced in
                  the specifications to do something else? HTML is a live
                  language, new attributes are added as grows.
                </p>
                <p>
                  To avoid conflicts, there exist <code>data-*</code>{" "}
                  attributes.
                </p>
                <p>
                  All attributes starting with "data-"" are reserved for
                  programmers' use. They are available in the{" "}
                  <code>dataset</code> property.
                </p>
                <p>
                  For instance, if an <code>elem</code> has an attribute named
                  "data-about", it's available as{" "}
                  <code>elem.dataset.about</code>.
                </p>
                <p>
                  Multi-word attributes like <code>data-order-state</code>{" "}
                  become camel-cased: <code>dataset.orderState</code>.
                </p>
                <p>Lets redo the above example:</p>
                <CodeSnippet
                  code={`<!doctype html>
<style>
  .order[data-order-state="new"] {
    color: green;
  }

  .order[data-order-state="pending"] {
    color: blue;
  }

  .order[data-order-state="canceled"] {
    color: red;
  }
</style>

<div id="order" class="order" data-order-state="new">
  A new order.
</div>

<script>
  // read
  console.log(order.dataset.orderState); // new

  // modify
  order.dataset.orderState = "pending";
</script>`}
                />
              </>
            ),
            seeMore: [""],
          },
        ],
      },
      {
        chapterTitle: "Modifying the document",
        tips: [
          {
            content: (
              <>
                <p>
                  - <code>document.createElement(tag)</code> creates a new
                  element node with the given tag.
                </p>
                <p>
                  - <code>document.createTextNode(text)</code> creates a new
                  text node with the given text.
                </p>
                <p>
                  Lets create a <code>div</code>:
                </p>
                <CodeSnippet
                  code={`// 1. Create <div> element
let div = document.createElement('div');

// 2. Set its class to "alert"
div.className = "alert";

// 3. Fill it with the content
div.innerHTML = "<strong>Hi there!</strong> You've read an important message.";`}
                />
                <p>
                  We've created the element. But as of now it's only in a
                  variable named div, not in the page yet.
                </p>
                <p>
                  To insert the div in the document, there is a special method{" "}
                  <code>append</code> for that:
                </p>
                <CodeSnippet code={`document.body.append(div);`} />
                <p>There are more insertion methods:</p>
                <p>
                  - <code>node.append(...nodes or strings)</code> append nodes
                  or strings at the end of <code>node</code>,
                </p>
                <p>
                  - <code>node.prepend(...nodes or strings)</code> insert nodes
                  or strings at the beginning of <code>node</code>,
                </p>
                <p>
                  - <code>node.before(...nodes or strings)</code> insert nodes
                  or strings before <code>node</code>,
                </p>
                <p>
                  - <code>node.after(...nodes or strings)</code> insert nodes or
                  strings after <code>node</code>,
                </p>
                <p>
                  - <code>node.replaceWith(...nodes or strings)</code> replaces{" "}
                  <code>node</code> with the given nodes or strings.
                </p>
                <p>
                  Arguments of these methods are an arbitrary list of DOM nodes
                  to insert, or text strings (that become text nodes
                  automatically). So, no need to use{" "}
                  <code>document.createTextNode(text)</code> as you can just
                  pass the string directly to the method.
                </p>
                <p>
                  Strings here, just like <code>elem.textContent</code> are safe
                  with proper escaping of characters such as <code>{`<>`}</code>
                  .
                </p>
                <CodeSnippet
                  code={` div.before('<p>Hello</p>', document.createElement('hr'));

// result will be:
// &lt;p&gt;Hello&lt;/p&gt;
// <hr>`}
                />
                <p>
                  So what if we actually want to insert a string that contains
                  HTML and not escape it?
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  For that we can use another, pretty versatile method:{" "}
                  <code>elem.insertAdjacentHTML(where, html)</code>.
                </p>
                <p>
                  The first parameter is a code word, specifying where to insert
                  relative to <code>elem</code>. Must be one of the following:
                </p>
                <p>
                  - <code>"beforebegin"</code> insert <code>html</code>{" "}
                  immediately before <code>elem</code>,
                </p>
                <p>
                  - <code>"afterbegin"</code> insert <code>html</code> into{" "}
                  <code>elem</code>, at the beginning,
                </p>
                <p>
                  - <code>"beforeend"</code> insert <code>html</code> into{" "}
                  <code>elem</code>, at the end,
                </p>
                <p>
                  - <code>"afterend"</code> insert <code>html</code> immediately
                  after <code>elem</code>.
                </p>
                <p>
                  This method has two brothers:{" "}
                  <code>elem.insertAdjacentText(where, text)</code> and{" "}
                  <code>elem.insertAdjacentElement(where, elem)</code>. They
                  aren't used in practice tho as we already have the methods{" "}
                  <code>append/prepend/before/after</code>.
                </p>
                <p>
                  Because this momentarily confused you, note that{" "}
                  <code>div.append</code> and{" "}
                  <code>elem.insertAdjacentElement(where, elem)</code> take an
                  element, not an HTML string (elements and HTML string aren't
                  the same). Meanwhile,{" "}
                  <code>elem.insertAdjacentHTML(where, html)</code> takes an
                  HTML string.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  - <code>node.remove()</code> removes a the <code>node</code>.
                </p>
                <p>
                  Please note: if we want to move an element to another place -
                  there's no need to remove it from the old one.
                </p>
                <p>
                  All insertion methods automatically remove the node from the
                  old place.
                </p>
                <CodeSnippet
                  code={`<!doctype html>

<div id="first">First</div>
<div id="second">Second</div>
<script>
  // no need to call remove
  second.after(first); // take #second and after it insert #first
</script>`}
                />
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  Sometimes, cloning an element, modifying it, then appending it
                  is faster that creating another one from scratch.
                </p>
                <p>
                  - <code>elem.cloneNode(true)</code> creates a "deep" clone of
                  the element – with all attributes and children.
                </p>
                <p>
                  - <code>elem.cloneNode(false)</code> the clone is made without
                  child elements.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  <code>DocumentFragment</code> is a special DOM node that
                  serves as a wrapper to pass around lists of nodes.
                </p>
                <p>
                  We can append other nodes to it, but when we insert it
                  somewhere, then its content is inserted instead.
                </p>
                <CodeSnippet
                  code={`<!doctype html>

<ul id="ul"></ul>

<script>
function getListContent() {
  let fragment = new DocumentFragment();

  for(let i=1; i<=3; i++) {
    let li = document.createElement('li');
    li.append(i);
    fragment.append(li);
  }

  return fragment;
}

ul.append(getListContent()); // (*)
</script>`}
                />
                <p>The result will be:</p>
                <CodeSnippet
                  code={`<!doctype html>
                
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>`}
                />
                <p>
                  <code>DocumentFragment</code> is rarely used explicitly. Why
                  append to a special kind of node, if we can return an array of
                  nodes instead? Rewritten example:
                </p>
                <CodeSnippet
                  code={`<!doctype html>

<ul id="ul"></ul>

<script>
function getListContent() {
  let result = [];

  for(let i=1; i<=3; i++) {
    let li = document.createElement('li');
    li.append(i);
    result.push(li);
  }

  return result;
}

ul.append(...getListContent()); // append + "..." operator = friends!
</script>`}
                />
                <p>
                  We mention <code>DocumentFragment</code> mainly because there
                  are some concepts on top of it, like template element, that
                  we'll cover much later.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  There are some other old insert/remove methods that only exist
                  for historical reasons. We will mention them here because you
                  might find them in old code but we won't go into details.
                </p>
                <p>
                  - <code>parentElem.appendChild(node)</code>.
                </p>
                <p>
                  - <code>parentElem.insertBefore(node, nextSibling)</code>.
                </p>
                <p>
                  - <code>parentElem.replaceChild(node, oldChild)</code>.
                </p>
                <p>
                  - <code>parentElem.removeChild(node)</code>.
                </p>
                <p>
                  - <code>document.write</code> it appends HTML to the page
                  before it has finished loading and is blazing fast. However,
                  it only works as browser is parsing the HTML not after. This
                  one can still be useful, click on "see more" if you are
                  interested in learning more..
                </p>
              </>
            ),
            seeMore: [
              "https://javascript.info/modifying-document#a-word-about-document-write",
            ],
          },
        ],
      },
      {
        chapterTitle: "Styles and classes",
        tips: [
          {
            content: (
              <>
                <p>
                  We should always prefer CSS classes to <code>style</code>.
                </p>
                <p>
                  For example, style is acceptable if we calculate coordinates
                  of an element dynamically and want to set them from
                  JavaScript, like this:
                </p>
                <CodeSnippet
                  code={`let top = /* complex calculations */;
let left = /* complex calculations */;

elem.style.left = left; // e.g '123px', calculated at run-time
elem.style.top = top; // e.g '456px'`}
                />
                <p>
                  For other cases, like making the text red, adding a background
                  icon - describe that in CSS and then add the class
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  - <code>elem.className</code> returns classes in a string. If
                  we assign something to it, it will replaces all classes.
                </p>
                <p>
                  - <code>elem.classList</code> is a special object with methods
                  to <code>add/remove/toggle</code> a single class:
                </p>
                <CodeSnippet code={`document.body.classList.add('article');`} />
                <p>
                  - <code>elem.classList.add/remove("class")</code> adds/removes
                  the class.
                </p>
                <p>
                  - <code>elem.classList.toggle("class")</code> adds the class
                  if it doesn't exist, otherwise removes it.
                </p>
                <p>
                  - <code>elem.classList.contains("class")</code> checks for the
                  given class, returns <code>true/false</code>.
                </p>
                <p>
                  Also, <code>classList</code> is iterable:
                </p>
                <CodeSnippet
                  code={`for (let name of document.body.classList) {
  console.log(name);
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
                  The property <code>elem.style</code> is an object that
                  corresponds to what's written in the <code>"style"</code>{" "}
                  attribute. Setting <code>elem.style.width="100px"</code> works
                  the same as if we had in the attribute style a string{" "}
                  <code>width:100px</code>.
                </p>
                <p>
                  Fo browser-prefixed properties like{" "}
                  <code>-moz-border-radius</code> they become camel case with
                  letters after dashes become uppercase{" "}
                  <code>elem.style.MozBorderRadius = "5px"</code>.
                </p>
                <p>
                  If we assign a style property and later want to remove it,
                  just assign it to an empty string:
                </p>
                <CodeSnippet
                  code={`document.body.style.display = "none" // hide;
          
document.body.style.display = ""; // show

// do the above instead of this:
delete elem.style.display;`}
                />
                <p>
                  We can also do{" "}
                  <code>elem.style.removeProperty('style property')</code>.
                </p>
                <p>
                  Normally, we use <code>style.*</code> to assign individual
                  style properties. We can't set the full style like
                  <code>div.style="color: red; width: 100px"</code>, because
                  <code>div.style</code> is an object, and it's read-only.
                </p>
                <p>
                  To set the full style as a string, there's a special property
                  style.cssText:
                </p>
                <CodeSnippet
                  code={`div.style.cssText=\`color: red !important;
    background-color: yellow;
    width: 100px;
    text-align: center;
\`;`}
                />
                <p>
                  This property is rarely used, because such assignment removes
                  all existing styles: it does not add, but replaces them. May
                  occasionally delete something needed. But we can safely use it
                  for new elements, when we know we won't delete an existing
                  style.
                </p>
                <p>
                  The same can be accomplished by setting an attribute:{" "}
                  <code>div.setAttribute('style', 'color: red...')</code>.
                </p>
                <p>Mind the units:</p>
                <CodeSnippet
                  code={`document.body.style.margin = 20 // assignment is ignored

console.log(document.body.style.margin) // '' empty string`}
                />
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>So, modifying a style is easy. But how to read it?</p>
                <p>
                  The <code>style</code> property operates only on the value of
                  the <code>"style"</code> attribute, without any CSS cascade.
                  In other words, it doesn't see styles applied by css classes.
                </p>
                <CodeSnippet
                  code={`<!doctype html>

<head>
  <style> body { color: red; margin: 5px } </style>
</head>
<body>

  The red text
  <script>
    alert(document.body.style.color); // empty
    alert(document.body.style.marginTop); // empty
  </script>
</body>`}
                />
                <p>
                  We can use <code>getComputedStyle</code> for that:
                </p>
                <CodeSnippet code={`getComputedStyle(element, [pseudo])`} />
                <p>
                  <code>pseudo</code> a pseudo-element if required, for instance
                  <code>::before</code>.
                </p>
                <CodeSnippet
                  code={`let computedStyle = getComputedStyle(document.body);

// now we can read the margin and the color from it

console.log( computedStyle.marginTop ); // 5px`}
                />
                <p>There are two concepts in CSS:</p>
                <ol>
                  <li>
                    A computed style value is the value after all CSS rules and
                    CSS inheritance is applied, as the result of the CSS
                    cascade. It can look like <code>height:1em</code> or{" "}
                    <code>font-size:125%</code>.
                  </li>
                  <li>
                    A resolved style value is the one finally applied to the
                    element. Values like <code>1em</code> or <code>125%</code>{" "}
                    are relative. The browser takes the computed value and makes
                    all units fixed and absolute, for instance:{" "}
                    <code>height:20px</code> or <code>font-size:16px</code>. For
                    geometry properties resolved values may have a floating
                    point, like <code>width:50.5px</code>.
                  </li>
                </ol>
                <p>
                  A long time ago <code>getComputedStyle</code> was created to
                  get computed values, but it turned out that resolved values
                  are much more convenient, and the standard changed.
                </p>
                <p>
                  So nowadays <code>getComputedStyle</code> actually returns the
                  resolved value of the property, usually in <code>px</code> for
                  geometry.
                </p>
                <p>
                  With <code>getComputedStyle</code> use exact properties like{" "}
                  <code>getComputedStyle(elem).marginRight</code>. Things like{" "}
                  <code>getComputedStyle(elem).margin</code> are inconsistent
                  and might returns different results on different browsers.
                </p>
                <p>
                  Styles applied to <code>:visited</code> links are hidden!.
                  Visited links may be colored using <code>:visited</code> CSS
                  pseudo class.
                </p>
                <p>
                  But <code>getComputedStyle</code> does not give access to that
                  color, because otherwise an arbitrary page could find out
                  whether the user visited a link by creating it on the page and
                  checking the styles.
                </p>
              </>
            ),
            seeMore: [""],
          },
        ],
      },
      {
        chapterTitle: "Element size and scrolling",
        tips: [
          {
            content: (
              <>
                <p>
                  Usually paddings are shown empty on our illustrations, but if
                  there's a lot of text in the element and it overflows, then
                  browsers show the "overflowing" text at{" "}
                  <code>padding-bottom</code>, that's normal.
                </p>
                <p>
                  Values of the following properties are technically numbers,
                  but these numbers are "of pixels", so these are pixel
                  measurements.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  - <code>offsetParent</code> the nearest ancestor that the
                  browser uses for calculating coordinates during rendering.
                </p>
                <p>That's the nearest ancestor that is one of the following:</p>
                <ol>
                  <li>
                    CSS-positioned (position is <code>absolute</code>,{" "}
                    <code>relative</code>, <code>fixed</code> or{" "}
                    <code>sticky</code>), or
                  </li>
                  <li>
                    <code>{"<td>"}</code>, <code>{"<th>"}</code>, or{" "}
                    <code>{"<table>"}</code>, or
                  </li>
                  <li>
                    <code>{"<body>"}</code>
                  </li>
                </ol>
                <p>
                  Properties <code>offsetLeft</code> / <code>offsetTop</code>{" "}
                  provide x/y coordinates relative to <code>offsetParent</code>{" "}
                  upper-left corner.
                </p>
                <CodeSnippet
                  code={`<!doctype html>

<main style="position: relative" id="main">
  <article>
    <div id="example" style="position: absolute; left: 180px; top: 180px">...</div>
  </article>
</main>
<script>
  alert(example.offsetParent.id); // main
  alert(example.offsetLeft); // 180 (note: a number, not a string "180px")
  alert(example.offsetTop); // 180
</script>`}
                />
                <img src={offsetParent} alt="" />
                <p>
                  <code>offsetParent</code> will be <code>null</code> for hidden
                  elements <code>display: none</code>, for <code>body</code> and{" "}
                  <code>html</code> elements, and for elements with{" "}
                  <code>position:fixed</code>.
                </p>
                <p>
                  <code>offsetParent</code>, <code>offsetLeft</code>, and{" "}
                  <code>offsetTop</code> are rarely used in practice.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  Properties <code>offsetWidth</code> and{" "}
                  <code>offsetHeight</code> provide the outer width/height.
                  Including scrollbar and borders.
                </p>
                <p>
                  Please note that geometry properties are <code>zero</code> /{" "}
                  <code>null</code> for elements that are not displayed. So we
                  can use this to check if the element is displayed or not:
                </p>
                <CodeSnippet
                  code={`function isHidden(elem) {
  return !elem.offsetWidth && !elem.offsetHeight;
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
                  Inside the element we have the borders. To measure them, there
                  are properties <code>clientTop</code> and{" "}
                  <code>clientLeft</code>.
                </p>
                <img src={clientWidthHeight} alt="" />
                <p>
                  But to be precise - these properties are not border
                  width/height, but rather relative coordinates of the inner
                  side from the outer side. Whats the difference?
                </p>
                <p>
                  It becomes visible when the document is right-to-left (the
                  operating system is in Arabic). The scrollbar is then not on
                  the right, but on the left, and then <code>clientLeft</code>{" "}
                  also includes the scrollbar width.
                </p>
                <p>
                  In that case, <code>clientLeft</code> would be not{" "}
                  <code>25</code>, but with the scrollbar{" "}
                  <code>width 25 + 16 = 41</code>.
                </p>
                <img src={clientWidthHeight1} alt="" />
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  Properties <code>clientWidth</code> and{" "}
                  <code>clientHeight</code> include the content width/height
                  together with paddings, but without the scrollbar and borders.
                </p>
                <p>
                  If there are no paddings, then <code>clientWidth/Height</code>{" "}
                  is exactly the content area, inside the borders and the
                  scrollbar (if any).
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  Properties <code>scrollWidth</code> and{" "}
                  <code>scrollHeight</code> are like{" "}
                  <code>clientWidth/clientHeight</code> but they also include
                  the scrolled out (hidden) parts.
                </p>
                <p>
                  We can use these properties to expand the element wide to its
                  full width/height:
                </p>
                <CodeSnippet
                  code={`// expand the element to the full content height
element.style.height = element.scrollHeight + 'px';`}
                />
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  Properties <code>scrollLeft</code> / <code>scrollTop</code>{" "}
                  are the width/height of the hidden, scrolled out part of the
                  element.
                </p>
                <p>
                  In other words, <code>scrollTop</code> is "how much is
                  scrolled up".
                </p>
                <img src={scrollTopLeft} alt="" />
                <p>
                  Most of the geometry properties here are read-only, but
                  <code>scrollLeft/scrollTop</code> can be changed, and the
                  browser will scroll the element.
                </p>
                <p>
                  We can do something like <code>elem.scrollTop += 10</code> to
                  scroll down <code>10px</code>.
                </p>
                <p>
                  Setting <code>scrollTop</code> to <code>0</code> or a big
                  value, such as <code>1e9</code> will make the element scroll
                  to the very top/bottom respectively.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  Don't take width/height from CSS (with{" "}
                  <code>getComputedStyle</code>). Use geometry properties
                  described above instead.
                </p>
                <p>Why? a couple of reasons:</p>
                <ol>
                  <li>
                    First, CSS <code>width/height</code> depend on another
                    property: <code>box-sizing</code> that defines "what is" CSS
                    width and height. A change in <code>box-sizing</code> for
                    CSS purposes may break such JavaScript.
                  </li>
                  <li>
                    Second, CSS <code>width/height</code> may be{" "}
                    <code>auto</code>. So using <code>getComputedStyle</code>{" "}
                    will return <code>"auto"</code> which is kinda useless.
                  </li>
                  <li>
                    Scrollbar. Sometimes the code that works fine without a
                    scrollbar becomes buggy with it, because a scrollbar takes
                    the space from the content in some browsers. So the real
                    width available for the content is less than CSS width. And{" "}
                    <code>clientWidth/clientHeight</code> take that into
                    account.
                  </li>
                </ol>
                <p>
                  …But with <code>getComputedStyle(elem).width</code> the
                  situation is different. Some browsers (e.g. Chrome) return the
                  real inner width, minus the scrollbar, and some of them (e.g.
                  Firefox) - CSS width (ignore the scrollbar).
                </p>
                <p>
                  Open the example{" "}
                  <a href="https://javascript.info/size-and-scroll#don-t-take-width-height-from-css">
                    here
                  </a>{" "}
                  with Chrome and Firefox to see and compare the difference.
                </p>
              </>
            ),
            seeMore: [""],
          },
        ],
      },
      {
        chapterTitle: "Window sizes and scrolling",
        tips: [
          {
            content: (
              <>
                <p>
                  How do we find the width and height of the browser window? How
                  do we get the full width and height of the document, including
                  the scrolled out part? How do we scroll the page using
                  JavaScript?
                </p>
                <p>For the window:</p>
                <p>
                  For this type of information, we can use the root document
                  element <code>document.documentElement</code>, that
                  corresponds to the {"<html>"} tag. But there are additional
                  methods and peculiarities to consider.
                </p>
                <p>
                  Why not use <code>window.innerWidth/innerHeight</code>?
                  because it will give us width/height including scroll bar. We
                  don't want that, do we now?
                </p>
                <CodeSnippet
                  code={`console.log( window.innerWidth ); // full window width
console.log( document.documentElement.clientWidth ); // window width minus the scrollbar`}
                />
                <p>
                  Please note: top-level geometry properties may work a little
                  bit differently when there's no{" "}
                  <code>{"<!DOCTYPE HTML>"}</code> in HTML. Odd things are
                  possible. So please make sure it's included.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>For the document:</p>
                <p>
                  Theoretically, as the root document element is
                  <code>document.documentElement</code>, and it encloses all the
                  content, we could measure the document's full size as{" "}
                  <code>document.documentElement.scrollWidth/scrollHeight</code>
                  .
                </p>
                <p>
                  But on that element, for the whole page, these properties do
                  not work as intended. In Chrome/Safari/Opera, if there's no
                  scroll, then <code>documentElement.scrollHeight</code> may be
                  even less than <code>documentElement.clientHeight</code>!
                  Weird, right?
                </p>
                <p>
                  To reliably obtain the full document height, we should take
                  the maximum of these properties:
                </p>
                <CodeSnippet
                  code={`let scrollHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
);

console.log('Full document height, with scrolled out part: ' + scrollHeight);`}
                />
                <p>
                  Why so? Better don't ask. These inconsistencies come from
                  ancient times, not some kind of a "smart" logic.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  DOM elements have their current scroll state in their{" "}
                  <code>scrollLeft/scrollTop</code> properties.
                </p>
                <p>
                  For document scroll,{" "}
                  <code>document.documentElement.scrollLeft/scrollTop</code>{" "}
                  works in most browsers, except older WebKit-based ones, like
                  Safari (bug 5991), where we should use{" "}
                  <code>document.body</code> instead of{" "}
                  <code>document.documentElement</code>.
                </p>
                <p>
                  Luckily, we don't have to remember these peculiarities at all,
                  because the scroll is available in the special properties,
                  <code>window.pageXOffset/pageYOffset</code>:
                </p>
                <CodeSnippet
                  code={`console.log('Current scroll from the top: ' + window.pageYOffset);
console.log('Current scroll from the left: ' + window.pageXOffset);`}
                />
                <p>Not that:</p>
                <ul>
                  <li>
                    <code>window.pageXOffset</code> is an alias of{" "}
                    <code>window.scrollX</code>.
                  </li>
                  <li>
                    <code>window.pageYOffset</code> is an alias of{" "}
                    <code>window.scrollY</code>.
                  </li>
                </ul>
                <p>
                  They are the same. For historical reasons, both of them exist.
                </p>
                <p>Note all of these 4 properties are read only.</p>
                <p>
                  Note that to scroll the page, its DOM must have been fully
                  built. If you try to scroll in <code>{"<head>"}</code> it
                  won't work.
                </p>
                <p>
                  Regular elements can be scrolled by changing
                  scrollTop/scrollLeft.
                </p>
                <p>
                  We can do the same for the page using{" "}
                  <code>document.documentElement.scrollTop/scrollLeft</code>{" "}
                  (except Safari, where{" "}
                  <code>document.body.scrollTop/Left</code> should be used
                  instead).
                </p>
                <p>
                  Alternatively, there's a simpler, universal solution: special
                  methods <code>window.scrollBy(x,y)</code> and{" "}
                  <code>window.scrollTo(pageX,pageY)</code>.
                </p>
                <p>
                  - <code>scrollBy(x,y)</code> scrolls a page relative to its
                  current scroll position.
                </p>
                <p>
                  - <code>scrollTo(pageX,pageY)</code> scrolls a page to
                  absolute coordinates, so that the top-left corner of the
                  visible part has coordinates <code>(pageX, pageY)</code>{" "}
                  relative to the document's top-left corner. It's like setting{" "}
                  <code>scrollLeft/scrollTop</code>.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>For completeness, let's talk about other methods:</p>
                <p>
                  - <code>elem.scrollIntoView(top)</code> scrolls the page to
                  make elem visible. If <code>top=true</code> then the top of
                  the element will be aligned to the top of the screen after
                  scrolling, if <code>top=false</code>, then its aligned in the
                  bottom instead.
                </p>
                <p>
                  We can use{" "}
                  <code>document.body.style.overflow = "hidden"</code> to
                  prevent scrolling of document.
                </p>
                <p>
                  The drawback of the method is that the scrollbar disappears.
                  If it occupied some space, then that space is now free and the
                  content "jumps" to fill it.
                </p>
                <p>
                  That looks a bit odd, but can be worked around if we compare{" "}
                  <code>clientWidth</code> before and after the freeze. If it
                  increased (the scrollbar disappeared), then add padding to{" "}
                  <code>document.body</code> in place of the scrollbar to keep
                  the content width the same.
                </p>
                <p>
                  ** If memory serves me correctly, I think there is another
                  solution where we can keep the scrollbar with CSS even with{" "}
                  <code>overflow: hidden</code>.
                </p>
              </>
            ),
            seeMore: [""],
          },
        ],
      },
      {
        chapterTitle: "Coordinates",
        tips: [
          {
            content: (
              <>
                <p>
                  Most JavaScript methods deal with one of two coordinate
                  systems:
                </p>
                <ol>
                  <li>
                    Relative to the window: similar to{" "}
                    <code>position:fixed</code>, calculated from the window
                    top/left edge.
                    <ul>
                      <li>
                        We'll denote these coordinates as{" "}
                        <code>clientX/clientY</code>, the reasoning for such
                        name will become clear later, when we study event
                        properties.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Relative to the document - similar to{" "}
                    <code>position:absolute</code> in the document root,
                    calculated from the document top/left edge.
                    <ul>
                      <li>
                        We'll denote them <code>pageX/pageY</code>.
                      </li>
                    </ul>
                  </li>
                </ol>
                <p>
                  When the page is scrolled to the very beginning, so that the
                  top/left corner of the window is exactly the document top/left
                  corner, these coordinates equal each other. But after the
                  document shifts, window-relative coordinates of elements
                  change, as elements move across the window, while
                  document-relative coordinates remain the same.
                </p>
                <img src={windowVsDocument} alt="" />
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  The method <code>elem.getBoundingClientRect()</code> returns
                  window coordinates for a minimal rectangle that encloses{" "}
                  <code>elem</code> as an object of built-in DOMRect class.
                </p>
                <p>Main DOMRect properties:</p>
                <ul>
                  <li>
                    <code>x/y</code> X/Y-coordinates of the rectangle origin
                    relative to window,
                  </li>
                  <li>
                    <code>width/height</code> width/height of the rectangle (can
                    be negative).
                  </li>
                </ul>
                <p>Additionally, there are derived properties:</p>
                <ul>
                  <li>
                    <code>top/bottom</code> Y-coordinate for the top/bottom
                    rectangle edge,
                  </li>
                  <li>
                    <code>left/right</code> X-coordinate for the left/right
                    rectangle edge.
                  </li>
                </ul>
                <img src={getBoundingClientRect} alt="" />
                <p>
                  As you can see, <code>x/y</code> and <code>width/height</code>{" "}
                  fully describe the rectangle. Derived properties can be easily
                  calculated from them:
                </p>
                <ul>
                  <li>
                    <code>left = x</code>.
                  </li>
                  <li>
                    <code>top = y</code>.
                  </li>
                  <li>
                    <code>right = x + width</code>.
                  </li>
                  <li>
                    <code>bottom = y + height</code>.
                  </li>
                </ul>
                <p>
                  Why derived properties are needed? Why does{" "}
                  <code>top/left</code> exist if there's <code>x/y</code>?
                </p>
                <p>
                  Negative <code>width/height</code> values mean that the
                  rectangle starts at its bottom-right corner and then "grows"
                  left-upwards.
                </p>
                <p>
                  In practice though, <code>elem.getBoundingClientRect()</code>{" "}
                  always returns positive width/height, here we mention negative
                  width/height only for you to understand why these seemingly
                  duplicate properties are not actually duplicates.
                </p>
                <p>
                  Internet Explorer has no support for <code>x/y</code>. We can
                  use <code>top/left</code> instead, as they are always the same
                  as <code>x/y</code> for positive <code>width/height</code>, in
                  particular in the result of{" "}
                  <code>elem.getBoundingClientRect()</code>.
                </p>
                <p>
                  There are obvious similarities between window-relative
                  coordinates and CSS <code>position:fixed</code>.
                </p>
                <p>
                  However, in CSS position <code>right</code> is the distance
                  from the right edge and <code>bottom</code> is the distance
                  from the bottom edge.
                </p>
                <p>
                  In JS tho, as we can see in the image above, all window
                  coordinates are counted from the top-left corner.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  The call to <code>document.elementFromPoint(x, y)</code>{" "}
                  returns the most nested element at window coordinates{" "}
                  <code>(x, y)</code>. The syntax is:
                </p>
                <CodeSnippet
                  code={`let elem = document.elementFromPoint(x, y);`}
                />
                <p>
                  For example, the code below highlights and logs the element
                  that is now in the middle of the window:
                </p>
                <CodeSnippet
                  code={`let centerX = document.documentElement.clientWidth / 2;
let centerY = document.documentElement.clientHeight / 2;

let elem = document.elementFromPoint(centerX, centerY);

elem.style.background = "red";
console.log(elem.tagName);`}
                />
                <p>
                  For out-of-window coordinates the{" "}
                  <code>elementFromPoint</code> returns <code>null</code>.
                </p>
                <p>
                  Here is a typical error that might occur if we don't check for
                  it:
                </p>
                <CodeSnippet
                  code={`let elem = document.elementFromPoint(x, y);
// if the coordinates happen to be out of the window, then elem = null
elem.style.background = ''; // Error!`}
                />
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  There's no standard method to get the document coordinates of
                  an element. But it's easy to write it.
                </p>
                <ul>
                  <li>
                    <code>pageY</code> = <code>clientY</code> + height of the
                    scrolled-out vertical part of the document.
                  </li>
                  <li>
                    <code>pageX</code> = <code>clientX</code> + width of the
                    scrolled-out horizontal part of the document.
                  </li>
                </ul>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>To sum up, Any point on the page has coordinates:</p>
                <ol>
                  <li>
                    Relative to the window -{" "}
                    <code>elem.getBoundingClientRect()</code>.
                  </li>
                  <li>
                    Relative to the document -{" "}
                    <code>elem.getBoundingClientRect()</code> plus the current
                    page scroll.
                  </li>
                </ol>
                <p>
                  Window coordinates are great to use with{" "}
                  <code>position:fixed</code>, and document coordinates do well
                  with <code>position:absolute</code>.
                </p>
                <p>
                  ** Basically you will end up using{" "}
                  <code>element.style.top = value + "px"</code>, If that{" "}
                  <code>elem</code> has <code>position:fixed</code>, you better
                  get the <code>value</code> from{" "}
                  <code>elem.getBoundingClientRect().top</code>. Otherwise, if{" "}
                  <code>elem</code> has <code>position: absolute</code>, you
                  better get the value from{" "}
                  <code>elem.getBoundingClientRect()</code> plus current page
                  scroll. Like so:
                </p>
                <CodeSnippet
                  code={`let box = elem.getBoundingClientRect();                 
let top = box + window.pageYOffset;`}
                />
                <p>
                  ** So whatever to put into{" "}
                  <code>element.style.top = value + "px"</code>, will be
                  calculated relative to window if it has{" "}
                  <code>position:fixed</code> and relative to document if it has{" "}
                  <code>position: absolute</code>.
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
