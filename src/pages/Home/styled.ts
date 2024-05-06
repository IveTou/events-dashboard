import styled from 'styled-components'

export const StyledView = styled.article`
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;

  section {
    margin: 16px 16px 48px;
    height: 500px;
  }

  ul {
    text-align: initial;
  }

  h1 {
    font-size: 2rem;
    font-weight: bold;
  }
`
