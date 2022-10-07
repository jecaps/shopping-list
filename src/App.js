import { useState } from "react";
import { ShoppingContext } from "./context/ShoppingContext";
import "./App.css";

import ShoppingList from "./pages/ShoppingList";
import SuggestionList from "./pages/SuggestionList";
import Input from "./components/Input";

function App() {
  const [items, setItems] = useState([]);
  const [shoppingList, setShoppingList] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [suggestions, setSuggestions] = useState([]);

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
        }}
      >
        <ShoppingList />
        <Input />
        <SuggestionList />
      </ShoppingContext.Provider>
    </div>
  );
}

export default App;
