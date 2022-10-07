export default function ShoppingItem({ item, shoppingList, setShoppingList }) {
  function removeFromList() {
    setShoppingList(
      shoppingList.filter(
        (shoppingItem) => shoppingItem.name.en !== item.name.en
      )
    );
  }

  return (
    <li className="shopping-item" onClick={removeFromList}>
      {item.name.en}
    </li>
  );
}
