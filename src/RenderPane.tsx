import ReactMarkdown from 'react-markdown';
import { markdownString } from './App.type';

type RenderPaneProps = {
  processedMarkdown: markdownString;
}

export default function RenderPane({ processedMarkdown }: RenderPaneProps) {
  return (
    <div className="w-3/5 h-full overflow-auto border-4 border-purple-600 p-4 markdown-body">
      <ReactMarkdown
        components={{
          li: ({ node, ...props }) => {
            if (node?.children[0].type === 'text') {
              const content = node.children[0].value;
              if (content.startsWith('[x] ')) {
                return <li><s>{content}</s></li>;
              }
            }
            return <li {...props} />;
          }
        }}
      >{processedMarkdown}</ReactMarkdown>
    </div>
  )
}