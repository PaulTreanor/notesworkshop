import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

function MarkdownEditor() {
  const [markdown, setMarkdown] = useState('# Hello, Markdown!');

  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div className="flex h-screen">
      <textarea
        className="w-1/2 h-full resize-none border-4 border-green-600 p-2"
        value={markdown}
        onChange={handleChange}
      />
      <div className="w-1/2 h-full overflow-auto p-4 markdown-body">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}

export default MarkdownEditor;