import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeSnippet = ({ code }) => {
  const style = {
    padding: "30px",
    margin: "0px 0px var(--bottomMargin) 0px",
    backgroundColor: "#131627",
  };

  return (
    <div className="code-snippet">
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={style}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeSnippet;
