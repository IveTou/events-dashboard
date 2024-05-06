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
  gap: 8px;

  div:hover {
    span {
      visibility: visible;
    }
  }

  div {
    position: relative;

    span {
      visibility: hidden;
      width: 120px;
      background-color: black;
      color: #fff;
      text-align: center;
      padding: 5px 0;
      border-radius: 6px;
      position: absolute;
      z-index: 1;
      top: 32px;
      right: 20px;
    }
  }

  svg {
    cursor: pointer;
    place-self: center;
  }

`

