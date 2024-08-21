# NotesWorkShop

## React app info

### Useful cmds

```bash
npm install 
npm run dev 
npm run build
```

###  How to think about data in app

TypeScript should help.

- `InputPane.tsx` sets `markdown` in `App.tsx` based on user input.
- `markdownProcessorEnginets` applies rules to `markdown` to create `processedMarkdown`.
- `RenderPane.tsx` consumes `processedMarkdown`.
