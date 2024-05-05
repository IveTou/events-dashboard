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
  background-color: rgb(218, 222, 239);

  div {
    display: flex;
    gap: 16px;
    align-items: center;
    font-size: 1.2rem;
    color: #242424;
  }
`

export const StyledIcon = styled.div`
  padding: 8px;
  font-size: 3em;
`
