import React from "react";
import { StyledItem } from "../TableStyled.styled";

const Item = (props) => {
  return (
    <StyledItem>
      <div>{props.item.name}</div>
      <div>{props.item.amount}</div>
      <div>${props.item.cost}</div>
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

const ItemsList = (props) => {
  let itemsList = props.items.map((item) => (
    <Item key={item.id} {...props} item={item} />
  ));
  return itemsList;
};

export default ItemsList;
