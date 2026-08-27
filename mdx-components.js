function stripWhitespaceChildren(children) {
  if (!Array.isArray(children)) return children;
  return children.filter(
    (child) => typeof child !== "string" || child.trim() !== ""
  );
}

export function useMDXComponents() {
  return {
    table: ({ children }) => <table>{stripWhitespaceChildren(children)}</table>,
    thead: ({ children }) => (
      <thead>{stripWhitespaceChildren(children)}</thead>
    ),
    tbody: ({ children }) => (
      <tbody>{stripWhitespaceChildren(children)}</tbody>
    ),
    tfoot: ({ children }) => (
      <tfoot>{stripWhitespaceChildren(children)}</tfoot>
    ),
    tr: ({ children }) => <tr>{stripWhitespaceChildren(children)}</tr>,
  };
}
