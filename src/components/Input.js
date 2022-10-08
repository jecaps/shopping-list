import { useEffect, useContext } from "react";
import { ShoppingContext } from "../context/ShoppingContext";
import FuzzySearch from "fuzzy-search";

import styled from "styled-components";

export default function Input() {
  const { items, setItems, searchItem, setSearchItem, setSuggestions } =
    useContext(ShoppingContext);

  const showItemSuggestions = (e) => {
    setSearchItem(e.target.value);
    const searcher = new FuzzySearch(items, ["name.en", "id"], {
      caseSensitive: false,
    });
    setSuggestions(searcher.search(searchItem));
  };

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://fetch-me.vercel.app/api/shopping/items"
      );
      const data = await response.json();
      setItems(data.data);
    }
    getData();
  });

  return (
    <Form>
      <label htmlFor="input">What do you wanna buy?</label>
      <input
        id="input"
        type="text"
        onChange={showItemSuggestions}
        placeholder="Search Item"
      />
    </Form>
  );
}

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    width: 30%;
  }
`;
