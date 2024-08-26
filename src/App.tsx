import { useState } from 'react';
import RulesPane from './RulesPane';
import InputPane from './InputPane';
import RenderPane from './RenderPane';
import { markdownString } from './App.type';
import markdownProcessorEngine from './markdownProcessorEngine';
import initialTodoListString from './assets/data/startingString';
import { RulesProvider } from './context/rulesContext';

function App() {
  const [markdown, setMarkdown] = useState<markdownString>(initialTodoListString);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(event.target.value);
  };

  const processedMarkdown = markdownProcessorEngine(markdown)

  return (
    <div className='h-screen'>
      <h1 className="text-4xl font-bold text-center">NotesWorkShop</h1>
      <RulesProvider>
      <div className="flex flex-col h-full">
        <div className="flex h-3/5">
          <InputPane markdown={markdown} handleInputChange={handleInputChange} />
          <RenderPane processedMarkdown={processedMarkdown} />
        </div>
          <RulesPane />
        </div>
      </RulesProvider>
    </div>
  );
}

export default App;