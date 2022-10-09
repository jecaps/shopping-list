import { useEffect, useState } from "react";
import CategoryItem from "../components/CategoryItem";

import styled from "styled-components";

export default function ShoppingList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch(
        "https://fetch-me.vercel.app/api/shopping/categories"
      );
      const data = await res.json();
      setCategories(data.data);
    }
    getData();
  }, []);

  return (
    <CategoryList>
      {categories.map((category) => (
        <CategoryItem key={category._id} category={category} />
      ))}
    </CategoryList>
  );
}

const CategoryList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  list-style: none;
  padding: 0;
`;
