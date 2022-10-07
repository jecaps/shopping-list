import { useEffect, useContext } from "react";
import { ShoppingContext } from "../context/ShoppingContext";
import FuzzySearch from "fuzzy-search";

export default function Form() {
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
    <input
      id="input"
      type="text"
      onChange={showItemSuggestions}
      placeholder="Search Item"
    />
  );
}
