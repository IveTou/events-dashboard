import { styled } from 'styled-components'

export const StyledModal = styled.div`
  background: white;
  position: absolute;
  color: #242424;
  padding: 16px;
  place-self: center center;
  border-radius: 4px;
  min-width: 40%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  z-Index: 10;

  @media only screen and (min-width: 500px) {
    max-width: 80%;
    width: 100%;
  }

  @media only screen and (min-width: 768px) {
    max-width: 50%;
    width: 100%;
  }

  >:first-child {
    display: flex;
    justify-content: end;
  }
`

export const StyledHeader = styled.div`
  display: grid;

  button {
    place-self: center end;
    background: transparent;
    color: #242424;
  }
`
