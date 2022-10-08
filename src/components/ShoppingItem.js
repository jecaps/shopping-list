import { useContext } from "react";
import { ShoppingContext } from "../context/ShoppingContext";

import styled from "styled-components";

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
    <ListItem className="shopping-item" onClick={removeFromList}>
      {item.name.en}
    </ListItem>
  );
}

const ListItem = styled.li`
  border: 1px solid black;
  border-radius: 4px;
  width: 100px;
`;
