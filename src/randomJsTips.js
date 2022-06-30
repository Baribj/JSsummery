/* import CodeSnippet from "./components/CodeSnippet";
import snippets from "./snippets"; */

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
];

export default randomJsTips;
