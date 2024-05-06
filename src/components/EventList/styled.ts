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
  width: 100%;

  div {
    font-weight: 300;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  > span {
    font-weight: 500;
    width: 50%;
    max-height: 26px;
    font-size: 1em;
    lin-height: 1em;
    overflow: hidden;
    text-align: start;
    text-wrap: balance;
  }

`

export const StyledItemActions = styled.div`
  display: flex;
  gap: 4px;
`

