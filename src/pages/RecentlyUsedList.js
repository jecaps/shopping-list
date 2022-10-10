import styled from "styled-components";

export default function RecentlyUsedList({ children, language, searchItem }) {
  return (
    <>
      <Text>
        "{searchItem}" {language === "en" ? "Not Found" : "Nicht Gefunden"}
      </Text>
      <Title>
        {language === "en"
          ? "Recently Used Items"
          : "Kürzlich Verwendete Artikel"}
      </Title>
      {children}
    </>
  );
}

const Text = styled.p`
  margin: 0;
  padding-top: 1rem;
`;

const Title = styled.h4`
  margin: 0;
  padding-top: 1rem;
  color: #ff6b35;
`;
