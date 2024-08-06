import { useState, useEffect } from 'react';
import RulesPane from './RulesPane';
import InputPane from './InputPane';
import RenderPane from './RenderPane';

const todoListString = `
## To-Do List
- [ ] Task 1
- [ ] Task 2
- [ ] Task 3
`;

function App() {
  const [markdown, setMarkdown] = useState(todoListString);
  const [jsonLines, setJsonLines] = useState([]);

  useEffect(() => {
    const lines = markdown.split('\n');
    const jsonData = lines.map((line, index) => ({ id: index, content: line }));
    setJsonLines(jsonData);
  }, [markdown]);

  const handleInputChange = (event) => {
    setMarkdown(event.target.value);
  };

  const processedMarkdown = jsonLines
    .map(line => line.content.includes('cow') ? `${line.content} 🐮` : line.content)
    .join('\n');

  return (
    <div className='h-screen'>
      <h1 className="text-4xl font-bold text-center">NotesWorkShop</h1>
      <div className="flex flex-col h-full">
        <div className="flex h-3/5">
          <InputPane markdown={markdown} handleInputChange={handleInputChange} />
          <RenderPane processedMarkdown={processedMarkdown} />
        </div>
        <RulesPane />
      </div>
    </div>
  );
}

export default App;