import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const todoListString = `
## To-Do List
- [ ] Task 1
- [ ] Task 2
- [ ] Task 3
`;

function MarkdownEditor() {
  const [markdown, setMarkdown] = useState(todoListString);

  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div className="flex h-full">
      <div className="w-1/2 h-full">
        <textarea
          className="w-full h-1/2 resize-none border-4 border-sky-600"
          value={markdown}
          onChange={handleChange}
        />
        <div className="w-full h-1/2 border-4 border-purple-600">
          <h2 className="text-2xl font-bold mb-4">Rules</h2>
          <p>This is a filler text area. You can add your rules or any other content here.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>

      <div className="w-1/2 h-full overflow-auto border-4 border-purple-600 p-4 markdown-body">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
      
    </div>
  );
}

export default MarkdownEditor;