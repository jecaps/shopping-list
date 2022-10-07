import { useEffect, useState } from "react";
import FuzzySearch from "fuzzy-search";

import "./App.css";

import SuggestedItem from "./components/SuggestedItem";
import ShoppingItem from "./components/ShoppingItem";

function App() {
  const [items, setItems] = useState([]);
  const [shoppingList, setShoppingList] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [suggestions, setSuggestions] = useState([]);

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
  }, []);

  return (
    <div className="App">
      <ul className="shopping-list">
        {shoppingList.map((item) => (
          <ShoppingItem
            key={item._id}
            item={item}
            shoppingList={shoppingList}
            setShoppingList={setShoppingList}
          />
        ))}
      </ul>
      <input
        id="input"
        type="text"
        onChange={showItemSuggestions}
        placeholder="Search Item"
      />
      <ul className="suggestions-list">
        {searchItem &&
          suggestions.map((suggestion) => (
            <SuggestedItem
              key={suggestion._id}
              item={suggestion}
              shoppingList={shoppingList}
              setShoppingList={setShoppingList}
              setSearchItem={setSearchItem}
            />
          ))}
      </ul>
    </div>
  );
}

export default App;
