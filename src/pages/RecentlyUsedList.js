import styled from "styled-components";

export default function RecentlyUsedList({ children }) {
  return (
    <>
      <Title>Recently Added Items</Title>
      {children}
    </>
  );
}

const Title = styled.h4`
  margin: 0;
  padding-top: 1rem;
  color: #ff6b35;
`;
