import { styled } from 'styled-components'

export const StyledModal = styled.div`
  background: white;
  position: absolute;
  color: black;
  padding: 16px;
  place-self: center center;
  > div {
    display: grid;
    button {
      place-self: center end;
      background: transparent;
    }
  }
`
