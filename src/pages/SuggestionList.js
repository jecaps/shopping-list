import { useContext } from "react";
import { ShoppingContext } from "../context/ShoppingContext";
import SuggestedItem from "../components/SuggestedItem";

import styled from "styled-components";

export default function SuggestionList() {
  const { searchItem, suggestions, language } = useContext(ShoppingContext);

  return (
    <List className="suggestions-list">
      {searchItem ? (
        suggestions.length === 0 ? (
          <p>
            {language === "en"
              ? `"${searchItem}" Not Found`
              : `"${searchItem}" nicht gefunden`}
          </p>
        ) : (
          suggestions.map((suggestion) => (
            <SuggestedItem
              key={suggestion._id}
              item={suggestion}
              id={suggestion._id}
            />
          ))
        )
      ) : (
        ""
      )}
    </List>
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
