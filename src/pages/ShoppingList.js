import { useContext } from "react";
import { ShoppingContext } from "../context/ShoppingContext";
import ShoppingItem from "../components/ShoppingItem";

import styled from "styled-components";

export default function ShoppingList() {
  const { shoppingList } = useContext(ShoppingContext);

  return (
    <List className="shopping-list">
      {shoppingList.map((item) => (
        <ShoppingItem key={item._id} item={item} />
      ))}
    </List>
  );
}

const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 5px;
  list-style: none;
  padding: 0;
`;
