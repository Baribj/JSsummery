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
    ],
  },
];

export default tips2;
