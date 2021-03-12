import React from "react";
import { StyledTitle, StyledItem } from "./TableStyled.styled";

const Table = (props) => {
  return (
    <>
      <StyledTitle> Таблица товаров</StyledTitle>
      <StyledItem header>
        <div>Наименование товара</div>
        <div>Кол-во</div>
        <div>Стоимость</div>
        <button onClick={() => {}}></button>
      </StyledItem>

      <ItemsList {...props} />
    </>
  );
};

const Item = (props) => {
  return (
    <StyledItem>
      <div>{props.item.name}</div>
      <div>{props.item.amount}</div>
      <div>{props.item.cost}</div>
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
  return props.items.map((item) => {
    return <Item {...props} item={item} />;
  });
};

export default Table;
