import styled from "styled-components";

export default function Header({ children }) {
  return (
    <StyledHeader>
      <h1>Happy Shopping</h1>
      {children}
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff6b35;
  color: #ffffff;
  width: 100%;
`;
