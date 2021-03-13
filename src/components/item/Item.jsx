import React from "react";
import { StyledItem } from "../table/TableStyled.styled";

const Item = (props) => {
  let changeItem = () => {
    props.setItemStatus(true);
  };

  return (
    <StyledItem>
      <div onClick={changeItem}>{props.item.name}</div>
      <div onClick={changeItem}>{props.item.amount}</div>
      <div onClick={changeItem}>${props.item.cost}</div>
      <button
        onClick={() => {
          props.deleteItem(props.item.id);
        }}
      >
        X
      </button>
    </StyledItem>
  );
};

export default Item;
