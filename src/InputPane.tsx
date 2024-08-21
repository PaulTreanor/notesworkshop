export default function InputPane({ markdown, handleInputChange}) {
  return (
    <div className="w-3/5 h-full">
      <textarea
        className="w-full h-full resize-none border-4 border-sky-600"
        value={markdown}
        onChange={handleInputChange}
      />
    </div>
  )
}