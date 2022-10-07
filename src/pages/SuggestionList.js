import { useContext } from "react";
import { ShoppingContext } from "../context/ShoppingContext";
import SuggestedItem from "../components/SuggestedItem";

export default function SuggestionList() {
  const { searchItem, suggestions } = useContext(ShoppingContext);

  return (
    <ul className="suggestions-list">
      {searchItem &&
        suggestions.map((suggestion) => (
          <SuggestedItem key={suggestion._id} item={suggestion} />
        ))}
    </ul>
  );
}
