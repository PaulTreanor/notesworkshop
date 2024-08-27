import { markdownString } from './App.type';
import { ruleType } from './rules/rules.type';

/**
 * On markdown change (user input), rerender triggers this func 
 * Split markdown into lines and store as JSON to be operated on
 * Operate on the JSON 
 * Join the JSON back into a markdownString to be rendered
 */
const markdownProcessorEngine = (markdown: markdownString, rules: ruleType[]): markdownString => {
  const lines = markdown.split('\n');
  const jsonData = lines.map((line, index) => ({ id: index, content: line, isDone: false }));

  const processedData = jsonData.map(item => {
    const processedItem = { ...item };

    rules.forEach(rule => {
      const conditionsMet = rule.conditions.every(condition => {
        switch (condition.type) {
          case 'includesStrings':
            return condition.value.some(str => 
              str.split(',').some(word => 
                processedItem.content.toLowerCase().includes(word.trim().toLowerCase())
              )
            );
          case 'startsWith':
            return processedItem.content.startsWith(condition.value);
          case 'isDone':
            return processedItem.content.startsWith('- [x]') === condition.value;
          // Add more condition types as needed
          default:
            return false;
        }
      });

      if (conditionsMet) {
        rule.effects.forEach(effect => {
          switch (effect.type) {
            case 'appendTextToItem':
              processedItem.content += ` ${effect.value}`;
              break;
            case 'makeItemBold':
              // Add a new line b/c bold
              processedItem.content = `\n**${processedItem.content}**`;
              break;
            // Add more effect types as needed
          }
        });
      }
    });

    return processedItem;
  });

  const processedMarkdown = processedData.map(item => item.content).join('\n');
  return processedMarkdown;
}

export default markdownProcessorEngine;