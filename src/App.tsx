import { useState } from 'react';
import RulesPane from './RulesPane';
import InputPane from './InputPane';
import RenderPane from './RenderPane';
import { markdownString } from './App.type';
import markdownProcessorEngine from './markdownProcessorEngine';
import initialTodoListString from './assets/data/startingString';
import { RulesProvider, useRules } from './context/RulesContext';

function AppContent() {
  const [markdown, setMarkdown] = useState<markdownString>(initialTodoListString);
  const { rules } = useRules();

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(event.target.value);
  };

  const processedMarkdown = markdownProcessorEngine(markdown, rules);

  return (
    <div className="flex flex-col h-full">
      <div className="flex h-3/5">
        <InputPane markdown={markdown} handleInputChange={handleInputChange} />
        <RenderPane processedMarkdown={processedMarkdown} />
      </div>
      <RulesPane />
    </div>
  );
}

function App() {
  return (
    <div className='h-screen'>
      <h1 className="text-4xl font-bold text-center">NotesWorkShop</h1>
      <RulesProvider>
        <AppContent />
      </RulesProvider>
    </div>
  );
}

export default App;