import React from "react";
import { StyledItem } from "../table/TableStyled.styled";

const Item = (props) => {
  return (
    <StyledItem>
      <div onClick={props.changeItem}>{props.item.name}</div>
      <div onClick={props.changeItem}>{props.item.amount}</div>
      <div onClick={props.changeItem}>${props.item.cost}</div>
      <button onClick={props.deleteItem}>✗</button>
    </StyledItem>
  );
};

export default Item;
