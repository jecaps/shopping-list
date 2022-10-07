export default function Form({ showItemSuggestions }) {
  return (
    <input
      id="input"
      type="text"
      onChange={showItemSuggestions}
      placeholder="Search Item"
    />
  );
}
