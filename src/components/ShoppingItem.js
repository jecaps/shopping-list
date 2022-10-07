import { useContext } from "react";
import { ShoppingContext } from "../context/ShoppingContext";

export default function ShoppingItem({ item }) {
  const { shoppingList, setShoppingList } = useContext(ShoppingContext);

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
