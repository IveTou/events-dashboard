import styled from "styled-components"

export const StyledModal = styled.div`
  padding: 8px 24px;

  h2 {
    font-size: x-large;
    color: #242424;
    margin-bottom: 16px;
  }

  span {
    color: red;
  }

`

export const StyledButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
`

export const StyledInput = styled.div`
  display: flex;
  flex-flow: column;
  height: 90px;

  input {
    color: white;
    border-radius: 4px;
    padding: 8px;
  }
`
