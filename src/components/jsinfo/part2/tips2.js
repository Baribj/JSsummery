import CodeSnippet from "../../CodeSnippet";

// Section 2

const tips2 = [
  {
    sectionTitle: "Introduction to Events",
    chapters: [
      {
        chapterTitle: "Introduction to browser events",
        tips: [
          {
            content: (
              <>
                <p>
                  All DOM nodes generate such signals (but events are not
                  limited to DOM).
                </p>
                <p>Mouse Events:</p>
                <p>
                  - <code>click</code>.
                </p>
                <p>
                  - <code>contextmenu</code> when the mouse right-clicks on an
                  element.
                </p>
                <p>
                  - <code>mouseover</code> / <code>mouseout</code>.
                </p>
                <p>
                  - <code>mousedown</code> / <code>mouseup</code>.
                </p>
                <p>
                  - <code>mousemove</code>.
                </p>
                <p>Keyboard events:</p>
                <p>
                  - <code>keydown</code> / <code>keyup</code> when a keyboard
                  key is pressed and released.
                </p>
                <p>Form element events:</p>
                <p>
                  - <code>submit</code>.
                </p>
                <p>
                  - <code>focus</code> when the visitor focuses on an element.
                </p>
                <p>Document events:</p>
                <p>
                  - <code>DOMContentLoaded</code>.
                </p>
                <p>CSS events:</p>
                <p>
                  - <code>transitionend</code>.
                </p>
                <p>
                  There are many other events. We'll get into more details of
                  particular events in next chapters.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  There are several ways to assign a handler. Let's see them,
                  starting from the simplest one:
                </p>
                <p>HTML-attribute:</p>
                <CodeSnippet
                  code={`<!doctype html>
<input value="Click me" onclick="alert('Click!')" type="button">
`}
                />
                <p>DOM property:</p>
                <CodeSnippet
                  code={`elem.onclick = function() {
    console.log('Thank you');
};`}
                />
                <p>
                  Note in the first scenario, the browser reads the function in
                  the HTML, and create a new DOM property equals to that
                  function. Exactly how we manually set it in the second
                  scenario.
                </p>
                <p>
                  As there's only one <code>onclick</code> property, we can't
                  assign more than one event handler (common sense don't ya
                  think?).
                </p>
                <p>
                  To remove a handler - assign <code>elem.onclick = null</code>.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  The value of <code>this</code> inside a handler is the
                  element.
                </p>
                <CodeSnippet
                  code={`<!doctype html>
<button onclick="alert(this.innerHTML)">Click me</button>
`}
                />
                <p>
                  Note that we need <code>()</code> in HTML markup. Not in JS
                  tho, a possible mistake:
                </p>
                <CodeSnippet
                  code={`// right
button.onclick = sayThanks;

// wrong
button.onclick = sayThanks();

// callback logic, for the billionth time!`}
                />
                <p>
                  The difference is easy to explain. When the browser reads the
                  attribute, it creates a handler function with body from the
                  attribute content. In other words, it wraps whatever we pass
                  in a function.
                </p>
                <p>
                  Don't use <code>setAttribute</code> for handlers. Why? because
                  as we mentioned earlier, attributes are always a string. You
                  assign a function there and you shall be opening doors to
                  hell.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  The two ways to assign a handler we mentioned above have one
                  fundamental limitation. You guessed it, because we can't
                  assign more than one handler.
                </p>
                <p>
                  - <code>addEventListener</code> to the rescue.
                </p>
                <CodeSnippet
                  code={`element.addEventListener(event, handler, [options]);`}
                />
                <p>
                  Let's talk about that <code>options</code> object argument, it
                  has the following properties:
                </p>
                <ul>
                  <li>
                    <code>once</code>: if <code>true</code>, then the listener
                    is automatically removed after it triggers.
                  </li>
                  <li>
                    <code>capture</code>: the phase where to handle the event,
                    to be covered later in the chapter{" "}
                    <a href="https://javascript.info/bubbling-and-capturing">
                      {" "}
                      Bubbling and capturing
                    </a>
                    . For historical reasons, <code>options</code> can also be{" "}
                    <code>false/true</code>, that's the same as{" "}
                    <code>{"{capture: false/true}"}</code>.
                  </li>
                  <li>
                    <code>passive</code>: if <code>true</code>, then the handler
                    will not call <code>preventDefault()</code>, we'll explain
                    that later in{" "}
                    <a href="https://javascript.info/default-browser-action">
                      Browser default actions
                    </a>
                    .
                  </li>
                </ul>
                <p>
                  To remove the handler, use <code>removeEventListener</code>:
                </p>
                <CodeSnippet
                  code={`element.removeEventListener(event, handler, [options]);`}
                />
                <p>
                  Note you need to pass the same exact function. This won't
                  work:
                </p>
                <CodeSnippet
                  code={`elem.addEventListener( "click" , () => alert('Thanks!'));
// ....
elem.removeEventListener( "click", () => alert('Thanks!')); // won't work`}
                />
                <p>
                  For some events, handlers only work with{" "}
                  <code>addEventListener</code>. Examples include{" "}
                  <code>DOMContentLoaded</code> and <code>transitionend</code>.
                </p>
                <CodeSnippet
                  code={`// will never run
document.onDOMContentLoaded = function() {
  alert("DOM built");
};

// This works
document.addEventListener("DOMContentLoaded", function() {
  alert("DOM built");
});`}
                />
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  When an event happens, the browser creates an event object,
                  puts details into it and passes it as an argument to the
                  handler.
                </p>
                <p>
                  Some of the properties of the event object include{" "}
                  <code>type</code>, <code>currentTarget</code>,{" "}
                  <code>clientX</code> and <code>clientY</code>.
                </p>
                <p>The event object is also available in HTML handlers:</p>
                <CodeSnippet
                  code={`<~doctype html>
<input type="button" onclick="alert(event.type)" value="Event type">
`}
                />
                <p>
                  That's possible because as we mentioned earlier the browser
                  will create a handler like this:{" "}
                  <code>{"function(event) {console.log(event.type)}"}</code>.
                  That is: its first argument is called "<code>event</code>",
                  and the body is taken from the attribute (wrapped in a
                  function).
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  We can assign not just a function, but an object as an event
                  handler using <code>addEventListener</code>. When an event
                  occurs, its <code>handleEvent</code> method is called.
                </p>
                <CodeSnippet
                  code={`let obj = {
  handleEvent(event) {
    console.log(event.type + " at " + event.currentTarget);
  }
};

elem.addEventListener('click', obj);`}
                />
                <p>
                  ** We could also use a class for that (but we skipped the
                  Classes section now didn't we?). Maybe come back to this bit
                  after you you are done with the Classes section?
                </p>
              </>
            ),
            seeMore: [""],
          },
        ],
      },
      {
        chapterTitle: "Bubbling and capturing",
        tips: [
          {
            content: (
              <>
                <p>
                  When an event happens on an element, it first runs the
                  handlers on it, then on its parent, then all the way up on
                  other ancestors. The process is called "bubbling".
                </p>
                <p>
                  Almost all events bubble. However, there are some exceptions
                  that don't bubble which include <code>focus</code> events.
                </p>
                <p>
                  - <code>event.target</code>. The most deeply nested element
                  that caused the event.
                </p>
                <p>
                  Note the differences from{" "}
                  <code>this (=event.currentTarget)</code>:
                </p>
                <ul>
                  <li>
                    <code>event.target</code> is the "target" element that
                    initiated the event, it doesn't change through the bubbling
                    process.
                  </li>
                  <li>
                    <code>this/event.currentTarget</code> is the "current"
                    element, the one that has a currently running handler on it.
                  </li>
                </ul>
                <p>
                  What up with <code>this</code>? for the billionth time, it's
                  the object before the dot:
                </p>
                <CodeSnippet
                  code={`elem.onclick = func // "this" inside "func" is the object before the dot (elem)
                  
// Tho I am not sure about this:
elem.addEventListener("click", func)

// need to wrap my head around this since I didn't encounter passing a callback to a property before. Tho it makes sense if you imagine it the following way:
function addEventListener(func){
  // do something
  func.call(this)
}

// just like:
let obj = {
  name: "John",
  func1(func2) {
  func2.call(this); // or just take the code of func2 and run it directly here? .. as in, replace this line with console.log(this) .. how does that even work? how can you take code out of function and paste it??
  },
};

function func2() {
  console.log(this); 
}

obj.func1(func2);

// On a separate note, this could be somehow related to how we can access "event" inside handler without passing it?
elem.addEventListener("click", func)
function func(){
  console.log(event.type) // works without passing event .. go figure
}
// EDIT1: Noop, turns out browsers assign "window.event" with the current event, in other words it's a global object. 
// (see: https://www.reddit.com/r/learnjavascript/comments/wc2a31/where_is_the_event_object_coming_from/)
// Note that since handler function are inevitably created within the global lexical environment, they can reference its variables.
// This is stupid since everything can access global variables. (leaving it here tho to document a strange thought process indeed.)

// or the case with ".then" and alert:
promise.then(alert) // alerts the result, go figure`}
                />
                <p>
                  For example, in <code>form.onclick</code> handler:
                </p>
                <ul>
                  <li>
                    <code>this (=event.currentTarget)</code> is the{" "}
                    <code>{"<form>"}</code> element, because the handler runs on
                    it.
                  </li>
                  <li>
                    <code>event.target</code> is the actual element inside the
                    form that was clicked.
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
                  A bubbling event goes from the target element straight up.
                  Normally it goes upwards till <code>{"<html>"}</code>, and
                  then to <code>document</code> object, and some events even
                  reach <code>window</code>, calling all handlers on the path.
                </p>
                <p>To stop that, we can use:</p>
                <ul>
                  <li>
                    <code>event.stopPropagation()</code> to stop the move
                    upwards, but on the current element all other handlers will
                    run.
                  </li>
                  <li>
                    <code>event.stopImmediatePropagation()</code> to stop the
                    bubbling and prevent handlers on the current element from
                    running
                  </li>
                </ul>
                <CodeSnippet
                  code={`// parent
pa.addEventListener("click", (e) => {
  console.log("parent clicked");
});

//child
ch.addEventListener("click", () => {
  e.stopPropagation(); // prevents bubbling but the second handler still run
  e.stopImmediatePropagation(); // prevents bubbling and the second handler from running.
  console.log("child clicked 1");
});

ch.addEventListener("click", (e) => {
  console.log("child clicked 2");
});`}
                />
                <p>
                  Don't stop bubbling without a need! If we later decide to add
                  a tracking library for example that tracks clicks on th whole
                  window to track user behavior (which usually uses{" "}
                  <code>document.addEventListener('click'…)</code> to get all
                  clicks), now we will have a dead zone if we are using{" "}
                  <code>event.stopPropagation</code>.
                </p>
                <p>
                  There's usually no real need to prevent the bubbling. A task
                  that seemingly requires that may be solved by other means. One
                  of them is to use custom events, we'll cover them later. Also
                  we can write our data into the <code>event</code> object in
                  one handler and read it in another one, so we can pass to
                  handlers on parents information about the processing below.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  Skipping Capturing for now since its rarely used in real code.
                </p>
              </>
            ),
            seeMore: [""],
          },
        ],
      },
      {
        chapterTitle: "Event delegation",
        tips: [
          {
            content: (
              <>
                <p>
                  The idea is that if we have a lot of elements handled in a
                  similar way, then instead of assigning a handler to each of
                  them - we put a single handler on their common ancestor.
                </p>
                <p>
                  In the handler we get <code>event.target</code> to see where
                  the event actually happened and handle it.
                </p>
                <p>
                  Lets say we have a <code>{"<table>"}</code> element with many
                  cells <code>{"<td>"}</code>, and we want to change the
                  background cells when they are clicked:
                </p>
                <CodeSnippet
                  code={`let selectedTd;

table.onclick = function(event) {
  let target = event.target; // where was the click?

  if (target.tagName != 'TD') return; // not on TD? Then we're not interested

  highlight(target); // highlight it
};

function highlight(td) {
  if (selectedTd) { // remove the existing highlight if any
    selectedTd.classList.remove('highlight');
  }
  selectedTd = td;
  selectedTd.classList.add('highlight'); // highlight the new td
}`}
                />
                <p>
                  Above example is not complete. What if a click happens inside
                  an element that is inside a <code>{"<td>"}</code> fo example?
                  in the above code, it will just be ignored. That's not what we
                  want. Lets fix it:
                </p>
                <CodeSnippet
                  code={`table.onclick = function(event) {
  let td = event.target.closest('td'); // (1) // returns <td> itself if event.target was a <td>. In other words, td.closest('td) will return the td itself 

  if (!td) return; // return if the clicked element isn't inside a <td>

  if (!table.contains(td)) return; // return if the <td> is not inside the table (just in case of nested tables)

  highlight(td); 
};`}
                />
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  Skipping the part: Delegation example: actions in markup
                  because it contains classes.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  We can also use event delegation to add "behaviors" to
                  elements declaratively, with special attributes and classes.
                </p>
                <CodeSnippet
                  code={`<!doctype html>

Counter: <input type="button" value="1" data-counter />
One more counter: <input type="button" value="2" data-counter />

<script>
  document.addEventListener('click', function(event) {

    if (event.target.dataset.counter != undefined) { // if the attribute exists...
      event.target.value++;
    }

  });
</script>
`}
                />
                <p>
                  Another example of using event delegation is to use it to
                  toggle elements:
                </p>
                <CodeSnippet
                  code={`<!doctype html>
                  
<button data-toggle-id="subscribe-mail">
  Show the subscription form
</button>

<form id="subscribe-mail" hidden>
  Your mail: <input type="email">
</form>

<script>
  document.addEventListener('click', function(event) {
    let id = event.target.dataset.toggleId;
    if (!id) return;

    let elem = document.getElementById(id);

    elem.hidden = !elem.hidden;
  });
</script>`}
                />
                <p>
                  Note we attached the event listener to at the{" "}
                  <code>document</code> level.
                </p>
                <p>
                  That may become really convenient - no need to write
                  JavaScript for every such element. Just use the behavior. The
                  document-level handler makes it work for any element of the
                  page.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  So in summary, event delegation usually follows this
                  algorithm:
                </p>
                <ol>
                  <li>Put a single handler on the container.</li>
                  <li>
                    in the handler - check the source element{" "}
                    <code>event.target</code>.
                  </li>
                  <li>
                    If the event happened inside an element that interests us,
                    then handle the event.
                  </li>
                </ol>
                <p>Benefits of events delegation:</p>
                <ol>
                  <li>
                    Simplifies initialization and saves memory: no need to add
                    many handlers.
                  </li>
                  <li>
                    Less code when adding or removing elements, no need to
                    add/remove handlers.
                  </li>
                  <li>
                    DOM modifications: we can mass add/remove elements with{" "}
                    <code>innerHTML</code> and the like (not sure I get this
                    one? though I have a feeling that is easy).
                  </li>
                </ol>
                <p>Limitations of event delegations:</p>
                <ol>
                  <li>
                    First, the event must be bubbling. Some events do not
                    bubble. Also, low-level handlers should not use{" "}
                    <code>event.stopPropagation()</code>.
                  </li>
                  <li>
                    Second, the delegation may add CPU load, because the
                    container-level handler reacts on events in any place of the
                    container, no matter whether they interest us or not. But
                    usually the load is negligible, so we don't take it into
                    account.
                  </li>
                </ol>
              </>
            ),
            seeMore: [""],
          },
        ],
      },
      {
        chapterTitle: "Browser default actions",
        tips: [
          {
            content: (
              <>
                <p>
                  Many events automatically lead to certain actions performed by
                  the browser. A click on a link initiates navigation, a lick on
                  from submit button initiates submission to the server .. etc.
                </p>
                <p>
                  There are two ways to tell the browser we don’t want it to
                  act:
                </p>
                <ul>
                  <li>
                    The main way is to use the <code>event</code> object.
                    There's a method <code>event.preventDefault()</code>.
                  </li>
                  <li>
                    If the handler is assigned using <code>{"on<event>"}</code>{" "}
                    (not by <code>addEventListener</code>), then returning false
                    also works the same.
                  </li>
                </ul>
                <p>
                  Note that the value returned by an event handler is usually
                  ignored. The only exception is return false from a handler
                  assigned using <code>{"on<event>"}</code>.
                </p>
                <p>
                  We use <code>{"<a>"}</code> for navigation because many people
                  like to use right click {">>"} open in a new tab, and also
                  search engines follow links links in <code>{"<a>"}</code>{" "}
                  which is not the case when we use buttons to send traffic to a
                  some page.
                </p>
                <p>
                  Certain events flow one into another. If we prevent the first
                  event, there will be no second.
                </p>
                <p>
                  For instance, <code>mousedown</code> on an{" "}
                  <code>{"<input>"}</code> field leads to focusing in it, and
                  the focus event. If we prevent the mousedown event (
                  <code>e.preventDefault()</code>), there's no focus.
                </p>
                <p>
                  The optional <code>passive: true</code> option of
                  <code>addEventListener</code> signals the browser that the
                  handler is not going to call <code>preventDefault()</code>.
                </p>
                <p>Why is this needed?</p>
                <p>
                  There are some events like <code>touchmove</code> on mobile
                  devices (when the user moves their finger across the screen),
                  that cause scrolling by default, but that scrolling can be
                  prevented using <code>preventDefault()</code> in the handler.
                </p>
                <p>
                  So when the browser detects such event, it has first to
                  process all handlers, and then if <code>preventDefault</code>{" "}
                  is not called anywhere, it can proceed with scrolling. That
                  may cause unnecessary delays and “jitters” in the UI.
                </p>
                <p>
                  The <code>passive: true</code> options tells the browser that
                  the handler is not going to cancel scrolling. Then browser
                  scrolls immediately providing a maximally fluent experience
                </p>
                <p>
                  For some browsers (Firefox, Chrome), <code>passive</code> is{" "}
                  <code>true</code> by default for <code>touchstart</code> and{" "}
                  <code>touchmove</code> events.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  The property <code>event.defaultPrevented</code> is{" "}
                  <code>true</code> if the default action was prevented, and
                  false otherwise.
                </p>
                <p>There's an interesting use case for it.</p>
                <p>
                  Sometimes we can use it instead of{" "}
                  <code>event.stopPropagation()</code> which we have established
                  is BAD.
                </p>
                <p>
                  Let's say we would like to implement a document-wide context
                  menu (when user click on mouse's left button), but also would
                  like to have a context menu for a button for example.
                </p>
                <p>
                  Now obviously when user right click on the button, the event
                  will bubble and handler for bother the button and the document
                  will fire. We don't wan't that, we also don't want to use{" "}
                  <code>event.stopPropagation()</code>, how can we achieve this?
                </p>
                <CodeSnippet
                  code={`<!doctype html>

<p>Right-click for the document menu</p>
<button id="elem">Right-click for the button menu</button>

<script>
  elem.oncontextmenu = function(event) {
    event.preventDefault();
    console.log("Button context menu");
  };

  document.oncontextmenu = function(event) {
    if (event.defaultPrevented) return;

    event.preventDefault();
    console.log("Document context menu");
  };
</script>`}
                />
                <p>
                  Here we used <code>event.defaultPrevented</code> to check in
                  the <code>document</code> handler if the default action was
                  prevented? If it is so, then the event was handled, and we
                  don't need to react on it.
                </p>
                <p>
                  ** I think we can also just write our own property{" "}
                  <code>e.handled = true</code>, then just check{" "}
                  <code>if(e.handled) return;</code>
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

export default tips2;
