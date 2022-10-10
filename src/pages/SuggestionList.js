import { useContext } from "react";
import { ShoppingContext } from "../context/ShoppingContext";
import SuggestedItem from "../components/SuggestedItem";
import RecentlyUsedList from "./RecentlyUsedList";

import styled from "styled-components";

export default function SuggestionList() {
  const { searchItem, suggestions, recentlyUsed, language } =
    useContext(ShoppingContext);

  const sortedRecentlyUsed = [...new Set(recentlyUsed)];

  return (
    <>
      {searchItem && suggestions.length === 0 && recentlyUsed.length > 0 && (
        <RecentlyUsedList language={language} searchItem={searchItem} />
      )}
      <List className="suggestions-list">
        {searchItem &&
          suggestions.length === 0 &&
          sortedRecentlyUsed.map((suggestion) => (
            <SuggestedItem
              key={suggestion._id}
              item={suggestion}
              id={suggestion._id}
            />
          ))}
        {searchItem &&
          suggestions.map((suggestion) => (
            <SuggestedItem
              key={suggestion._id}
              item={suggestion}
              id={suggestion._id}
            />
          ))}
      </List>
    </>
  );
}

const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5px;
  list-style: none;
  padding: 0;
`;
