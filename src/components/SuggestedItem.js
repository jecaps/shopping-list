import { useContext } from "react";
import { ShoppingContext } from "../context/ShoppingContext";

export default function SuggestedItem({ item }) {
  const { shoppingList, setShoppingList, setSearchItem } =
    useContext(ShoppingContext);

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
