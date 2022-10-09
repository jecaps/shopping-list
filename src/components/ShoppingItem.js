import { useContext } from "react";
import { ShoppingContext } from "../context/ShoppingContext";

import styled from "styled-components";

export default function ShoppingItem({ item }) {
  const { shoppingList, setShoppingList, language } =
    useContext(ShoppingContext);

  function removeFromList() {
    setShoppingList(
      shoppingList.filter(
        (shoppingItem) =>
          shoppingItem["name"][language] !== item["name"][language]
      )
    );
  }

  return (
    <ListItem className="shopping-item" onClick={removeFromList}>
      {item["name"][language]}
    </ListItem>
  );
}

const ListItem = styled.li`
  border: 1px solid black;
  border-radius: 4px;
  padding: 2px 10px;
`;
