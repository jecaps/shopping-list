import { useContext } from "react";
import { ShoppingContext } from "../context/ShoppingContext";
import FuzzySearch from "fuzzy-search";

import styled from "styled-components";

export default function Input() {
  const { items, searchItem, setSearchItem, setSuggestions, language } =
    useContext(ShoppingContext);

  const showItemSuggestions = (e) => {
    setSearchItem(e.target.value);
    const searcher = new FuzzySearch(items, [`name.${language}`, "id"], {
      caseSensitive: false,
    });
    setSuggestions(
      searcher
        .search(searchItem)
        .sort(() => 0.5 - Math.random())
        .slice(0, 10)
    );
  };

  return (
    <Form>
      <label htmlFor="input">
        {language === "en"
          ? "What do you wanna buy?"
          : "Was möchtest Du kaufen?"}
      </label>
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
