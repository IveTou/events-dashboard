import styled from 'styled-components'

export const StyledView = styled.article`
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;

  section {
    margin: 0 16px 8px;
    height: 500px;
  }

  h3 {
    font-size: 1rem;
    font-weight: bold;
  }
`
