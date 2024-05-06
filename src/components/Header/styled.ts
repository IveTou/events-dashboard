import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  flex-flow: column;
  grid-area: header;
  height: fit-content;
`
export const StyledHeading = styled.section`
  display: flex;
  justify-content: flex-start;
  gap: 16px;
  padding: 0 16px;

  span {
    font-size: 1.5rem;
  }

  * {
    align-self: center;
  }
`

export const StyledNav = styled.nav`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  padding: 8px 32px;
  background-color: white;

  nav {
    display: flex;
    gap: 16px;
    align-items: center;
    font-size: 1.2rem;
    color: #242424;

    a {
      border-radius: 8px;
      padding: 8px 24px;
      min-width: 50px;
    }

    a.active {
      background: lavender;
    }
  }
`

export const StyledIcon = styled.div`
  padding: 8px;
  font-size: 3em;
`
