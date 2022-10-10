import { useContext } from "react";
import { ShoppingContext } from "../context/ShoppingContext";

import styled from "styled-components";

export default function ShoppingItem({ item }) {
  const {
    shoppingList,
    setShoppingList,
    language,
    recentlyUsed,
    setRecentlyUsed,
  } = useContext(ShoppingContext);

  function removeFromList() {
    setRecentlyUsed(
      [
        ...new Set([
          ...recentlyUsed,
          shoppingList.filter(
            (shoppingItem) =>
              shoppingItem["name"][language] === item["name"][language]
          ),
        ]),
      ].flat()
    );
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
  background-color: #f7c59f;
  color: #d64933;
  border: 1px solid #ff6b35;
  border-radius: 4px;
  padding: 5px 10px;
`;
