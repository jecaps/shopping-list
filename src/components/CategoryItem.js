import styled from "styled-components";
import { useState, useContext } from "react";
import { ShoppingContext } from "../context/ShoppingContext";
import ShoppingItem from "./ShoppingItem";

export default function CategoryItem({ category }) {
  const [showShoppingList, setShowShoppingList] = useState(true);

  const { shoppingList, language } = useContext(ShoppingContext);

  const toggleShoppingList = () => {
    setShowShoppingList(!showShoppingList);
  };

  return (
    <StyledCategoryItem>
      <ListToggler>
        <h3>{category["name"][language]}</h3>
        <button type="button" onClick={toggleShoppingList}>
          {showShoppingList ? "▴" : "▾"}
        </button>
      </ListToggler>

      <List variant={showShoppingList}>
        {shoppingList
          .filter((item) => item.category._ref === category._id)
          .map((item) => (
            <ShoppingItem key={item._id} item={item} />
          ))}
      </List>
    </StyledCategoryItem>
  );
}

const StyledCategoryItem = styled.li`
  width: 500px;

  h3 {
    margin: 0;
    padding: 5px;
    color: #ff8e72;
  }
`;

const ListToggler = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  position: relative;
  margin: auto;

  button {
    all: unset;
    position: absolute;
    right: 0;
    color: #ff6b35;
    font-size: 1.25rem;
  }
`;

const List = styled.ul`
  display: ${({ variant }) => (variant ? "flex" : "none")};
  justify-content: center;
  flex-wrap: wrap;
  gap: 5px;
  list-style: none;
  padding: 0;
`;
