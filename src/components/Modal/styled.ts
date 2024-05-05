import { styled } from 'styled-components'

export const StyledModal = styled.div`
  background: white;
  position: absolute;
  color: black;
  padding: 16px;
  place-self: center center;
  border-radius: 4px;
  max-width: 50%;

  > div:first-child {
    display: grid;
    button {
      place-self: center end;
      background: transparent;
    }
  }
`
