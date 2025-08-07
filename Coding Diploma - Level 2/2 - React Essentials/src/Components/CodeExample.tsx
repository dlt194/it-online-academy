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
    <pre className="bg-gray-100 p-4 rounded">
      <code
        className="text-sm text-gray-800"
        dangerouslySetInnerHTML={{
          __html: escapeHtml(codeString),
        }}
      />
    </pre>
  );
}
