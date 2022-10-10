import { useState, useEffect } from "react";
import { ShoppingContext } from "./context/ShoppingContext";
import { saveToLocal, loadFromLocal } from "./lib/localStorage";
import "./App.css";

import Header from "./components/Header";
import ShoppingList from "./pages/ShoppingList";
import SuggestionList from "./pages/SuggestionList";
import Input from "./components/Input";
import LanguageBtn from "./components/LanguageBtn";

function App() {
  const [items, setItems] = useState([]);
  const [shoppingList, setShoppingList] = useState(
    loadFromLocal("saved shopping list") ?? []
  );
  const [searchItem, setSearchItem] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [language, setLanguage] = useState(
    loadFromLocal("saved language") ?? "en"
  );

  useEffect(() => {
    saveToLocal("saved shopping list", shoppingList);
  }, [shoppingList]);

  useEffect(() => {
    saveToLocal("saved language", language);
  }, [language]);

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
      <ShoppingContext.Provider
        value={{
          items,
          setItems,
          shoppingList,
          setShoppingList,
          searchItem,
          setSearchItem,
          suggestions,
          setSuggestions,
          language,
          setLanguage,
        }}
      >
        <Header>
          <LanguageBtn />
        </Header>
        <ShoppingList />
        <Input />
        <SuggestionList />
      </ShoppingContext.Provider>
    </div>
  );
}

export default App;
