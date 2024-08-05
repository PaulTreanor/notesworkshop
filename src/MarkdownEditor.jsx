import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

function MarkdownEditor() {
  const [markdown, setMarkdown] = useState('# Hello, Markdown!');

  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <textarea
        value={markdown}
        onChange={handleChange}
        style={{ width: '50%', height: '100%', resize: 'none' }}
      />
      <div style={{ width: '50%', height: '100%', overflow: 'auto', padding: '1rem' }}>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}

export default MarkdownEditor;