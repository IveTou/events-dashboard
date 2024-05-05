import { styled } from 'styled-components'

export const StyledModal = styled.div`
  background: white;
  position: absolute;
  color: black;
  padding: 16px;
  place-self: center center;
  border-radius: 4px;
  min-width: 50%;

  >:first-child {
    display: grid;
    button {
      place-self: center end;
      background: transparent;
    }
  }
`

export const StyledHeader = styled.div`
  display: grid;

  button {
    place-self: center end;
    background: transparent;
    color: black;
  }
`
