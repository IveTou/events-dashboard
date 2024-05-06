import styled from 'styled-components';

export const SyledLayout = styled.div`
  display: grid;
  height: 100%;
  align-content: baseline;
  grid-template:
    'header  header header'
    'sidebar  main main'
    'footer footer footer';
`
export const StyledMain = styled.main`
  grid-area: main;
  min-height: 100%;
  background: white;
  color: #242424;
`
