import { useContext } from "react";
import { ShoppingContext } from "../context/ShoppingContext";

import styled from "styled-components";

export default function SuggestedItem({ item, id }) {
  const {
    suggestions,
    shoppingList,
    setShoppingList,
    setSearchItem,
    language,
  } = useContext(ShoppingContext);

  function addToList() {
    setShoppingList([...shoppingList, item]);
    setSearchItem("");
    document.getElementById("input").value = "";
    document.getElementById("input").focus();
  }

  return (
    <>
      {!shoppingList.some((shoppingItem) => shoppingItem._id === id) && (
        <ListItem className="suggestion" onClick={addToList}>
          {item["name"][language]}
        </ListItem>
      )}
      {suggestions.length === 1 &&
        shoppingList.some((shoppingItem) => shoppingItem._id === id) && (
          <p>
            {language === "en"
              ? "Item already exists"
              : "Artikel bereits in der Liste"}
          </p>
        )}
    </>
  );
}

const ListItem = styled.li`
  background-color: #f29559;
  color: #ffeedb;
  border: 1px solid #f29559;
  border-radius: 4px;
  padding: 5px 10px;
`;
