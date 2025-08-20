import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CodeExample({
  component,
  showLineNumbers = true,
}: {
  component: string;
  showLineNumbers?: boolean;
}) {
  return (
    <SyntaxHighlighter
      language="tsx"
      style={darcula}
      showLineNumbers={showLineNumbers}
    >
      {component}
    </SyntaxHighlighter>
  );
}
