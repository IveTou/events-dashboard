import styled from 'styled-components';

export const StyledSideBar = styled.aside`
  display: none;
  grid-area: sidebar;
  background-color: #e6e6e6;
  padding: 0 8px 16px;
  justify-content: space-between;

  @media only screen and (min-width: 768px) {
    display: flex;
    flex-flow: column;
  }

  h2 {
    font-size: larger;
    color: #242424;
    background: white;
    margin: 0;
    padding: 32px 0;
  }

  nav {
    display: grid;
    padding: 16px 0;
    padding: 16px 0;
    line-height: 40px;

    a.active {
      background: lavender;
      border-radius: 8px;
    }
  }
`
