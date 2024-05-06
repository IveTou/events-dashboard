import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  flex-flow: column;
  grid-area: header;
  height: fit-content;
`
export const StyledHeading = styled.section`
  a {
    display: flex;
    justify-content: flex-start;
    gap: 16px;
    padding: 0 16px;

    span {
      font-size: 1.5rem;
      color: white;
    }

    * {
      align-self: center;
    }
  }
`

export const StyledNav = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  background-color: #e6e6e6;

  @media only screen and (min-width: 768px) {
    display: none;
  }

  nav {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    color: #242424;
    width: 100%;
    justify-content: center;

    a {
      border-radius: 8px;
      padding: 8px 24px;
      width: 100%;
    }

    a.active {
      background: lavender;
    }
  }

  div {
    display: flex;
    width: 100%;
    justify-content: end;
    padding: 24px 0 0;
    background-color: white;

    button {
      padding: 8px 24px;
      margin: 0 16px;
      min-width: 50px;
      font-size: 1.2rem;
    }
  }
`

export const StyledIcon = styled.div`
  padding: 8px;
  font-size: 3em;
`
