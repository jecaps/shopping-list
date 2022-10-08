import { useContext } from "react";
import { ShoppingContext } from "../context/ShoppingContext";

import styled from "styled-components";

export default function SuggestedItem({ item }) {
  const { shoppingList, setShoppingList, setSearchItem } =
    useContext(ShoppingContext);

  function addToList() {
    setShoppingList([...shoppingList, item]);
    setSearchItem("");
    document.getElementById("input").value = "";
  }

  return (
    <ListItem className="suggestion" onClick={addToList}>
      {item.name.en}
    </ListItem>
  );
}

const ListItem = styled.li`
  border: 1px solid black;
  border-radius: 4px;
  width: 100px;
`;
