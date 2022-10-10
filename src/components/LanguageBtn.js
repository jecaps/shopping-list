import { useContext } from "react";
import { ShoppingContext } from "../context/ShoppingContext";
import styled from "styled-components";

export default function LanguageBtn() {
  const { setLanguage } = useContext(ShoppingContext);

  const chooseLanguage = (language) => {
    setLanguage(language);
  };

  return (
    <LanguageContainer>
      <Button onClick={() => chooseLanguage("en")}>EN</Button>
      <span>|</span>
      <Button onClick={() => chooseLanguage("de")}>DE</Button>
    </LanguageContainer>
  );
}

const LanguageContainer = styled.div`
  position: absolute;
  right: 5px;
  top: 0;
  font-size: 0.75rem;
`;

const Button = styled.button`
  all: unset;
  color: #f7c59f;
  padding: 5px;

  &:hover {
    color: #d64933;
  }
`;
