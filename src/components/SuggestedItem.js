export default function SuggestedItem({
  item,
  shoppingList,
  setShoppingList,
  setSearchItem,
}) {
  function addToList() {
    setShoppingList([...shoppingList, item]);
    setSearchItem("");
    document.getElementById("input").value = "";
  }

  return (
    <li className="suggestion" onClick={addToList}>
      {item.name.en}
    </li>
  );
}
