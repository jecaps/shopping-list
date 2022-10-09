import { useContext } from "react";
import { ShoppingContext } from "../context/ShoppingContext";
import styled from "styled-components";

export default function LanguageBtn() {
  const { setLanguage } = useContext(ShoppingContext);

  const chooseLanguage = (language) => {
    setLanguage(language);
  };

  return (
    <>
      <Button onClick={() => chooseLanguage("en")}>EN</Button>
      <span>|</span>
      <Button onClick={() => chooseLanguage("de")}>DE</Button>
    </>
  );
}

const Button = styled.button`
  text-align: end;
  all: unset;
  color: blue;
  padding: 10px;

  &:hover {
    color: red;
  }
`;
