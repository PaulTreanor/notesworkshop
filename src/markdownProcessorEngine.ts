import { markdownString } from './App.type';

/**
 * On markdown change (user input), rerender triggers this func 
 * Split markdown into lines and store as JSON to be operated on
 * Operate on the JSON 
 * Join the JSON back into a markdownString to be rendered
 */
const markdownProcessorEngine = (markdown: markdownString): markdownString => {
  const lines = markdown.split('\n');
  const jsonData = lines.map((line, index) => ({ id: index, content: line }));
  const processedLines = jsonData.map((line) => {
    if (line.content.includes('cow')) {
      return `${line.content} 🐮`;
    }
    return line.content;
  });
  const processedMarkdown = processedLines.join('\n');

  return processedMarkdown;
}

export default markdownProcessorEngine;