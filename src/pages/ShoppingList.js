import { useContext } from "react";
import { ShoppingContext } from "../context/ShoppingContext";
import ShoppingItem from "../components/ShoppingItem";

export default function ShoppingList() {
  const { shoppingList } = useContext(ShoppingContext);

  return (
    <ul className="shopping-list">
      {shoppingList.map((item) => (
        <ShoppingItem key={item._id} item={item} />
      ))}
    </ul>
  );
}
