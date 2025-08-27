import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CodeExample({
  component,
  showLineNumbers = true,
  language = "tsx",
}: {
  component: string;
  showLineNumbers?: boolean;
  language?: string;
}) {
  return (
    <SyntaxHighlighter
      language={language}
      style={darcula}
      showLineNumbers={showLineNumbers}
    >
      {component}
    </SyntaxHighlighter>
  );
}
