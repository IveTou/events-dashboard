import styled from "styled-components";

export const StyledDialog = styled.dialog`
  position: absolute;
  top: 0;
  padding: 24px;
  color: #242424;
  background: white;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border: none;
  z-Index: 10;

  p {
    padding: 16px;
  }

  section {
    display: flex;
    flex-flow: column;
    gap: 16px;
  }

  footer {
    display: flex;
    justify-content: center;
    gap: 32px;
  }
`
