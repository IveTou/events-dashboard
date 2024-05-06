import { styled } from 'styled-components'

export const StyledModal = styled.div`
  background: white;
  position: absolute;
  color: #242424;
  padding: 16px;
  place-self: center center;
  border-radius: 4px;
  min-width: 50%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

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
