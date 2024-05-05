import styled from 'styled-components';

export const StyledSideBar = styled.aside`
  display: flex;
  flex-flow: column;
  grid-area: sidebar;
  background-color: rgb(218, 222, 239);
  padding: 16px 8px;
  justify-content: space-between;

  h2 {
    font-size: larger;
    color: black;
    background: light-grey;
  }

  nav {
    padding: 16px 0;
    padding: 16px 0;
    line-height: 40px;
  }
`
