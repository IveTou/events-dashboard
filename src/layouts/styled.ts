import styled from 'styled-components';

export const SyledLayout = styled.div`
  display: grid;
  grid-template:
    'header header header header'
    'sidebar main main main';
`

export const StyledMain = styled.main`
  grid-area: main;
`
