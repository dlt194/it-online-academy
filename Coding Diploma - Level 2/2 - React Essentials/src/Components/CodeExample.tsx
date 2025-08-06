function escapeHtml(str: string) {
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  };
  return str.replace(/[&<>"']/g, (m) => map[m as keyof typeof map]);
}

export default function CodeExample({ codeString }: { codeString: string }) {
  return (
    <pre>
      <code
        dangerouslySetInnerHTML={{
          __html: escapeHtml(codeString),
        }}
      />
    </pre>
  );
}
