import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeSnippet = ({ code, lang }) => {
  const style = {
    padding: "30px",
    margin: "0px 0px var(--bottomMargin) 0px",
    backgroundColor: "#131627",
    borderRadius: "5px",
  };

  return (
    <div className="code-snippet">
      <SyntaxHighlighter
        language={lang ? { lang } : "javascript"}
        style={atomOneDark}
        customStyle={style}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeSnippet;
