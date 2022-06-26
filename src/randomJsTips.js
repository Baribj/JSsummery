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
          <code>innerHtml</code>) to output HTML but I am sure there is a safer
          way to do it.
        </p>
      </>
    ),
    seeMore: ["https://www.youtube.com/watch?v=PB5RQk5gAdQ"],
  },
];

export default randomJsTips;
