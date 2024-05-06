import styled from "styled-components";

export const StyledList = styled.div`
 margin: 16px 16px 64px;
 max-height: 500px;
 overflow: auto;
`

export const StyledListItem = styled.div`
  display: flex;
  gap: 8px;
  justify-content: space-between;
  padding: 8px;
  border-bottom: 1px solid #2424243b;
  box-sizing: border-box;
`

export const StyledItemContent = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  color: #242424;

  span {
    font-weight: 300;
  }

  span:first-child {
    font-weight: 500;
  }

`

export const StyledItemActions = styled.div`
  display: flex;
  gap: 4px;
`

