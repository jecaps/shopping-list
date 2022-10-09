import { useContext } from "react";
import { ShoppingContext } from "../context/ShoppingContext";

import styled from "styled-components";

export default function SuggestedItem({ item, id }) {
  const { shoppingList, setShoppingList, setSearchItem } =
    useContext(ShoppingContext);

  function addToList() {
    setShoppingList([...shoppingList, item]);
    setSearchItem("");
    document.getElementById("input").value = "";
  }

  return (
    <>
      {!shoppingList.some((shoppingItem) => shoppingItem._id === id) && (
        <ListItem className="suggestion" onClick={addToList}>
          {item.name.en}
        </ListItem>
      )}
    </>
  );
}

const ListItem = styled.li`
  border: 1px solid black;
  border-radius: 4px;
  padding: 2px 10px;
`;
