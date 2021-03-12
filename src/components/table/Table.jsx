import React from "react";
import ItemForm from "./addItemForm/ItemForm";
import ItemsList from "./items/Items";
import {
  StyledTitle,
  StyledTable,
  StyledItem,
  StyledButton,
} from "./TableStyled.styled";

const Table = (props) => {
  return (
    <>
      <StyledTitle> Таблица товаров</StyledTitle>
      <StyledTable>
        <StyledItem header>
          <div>Наименование товара</div>
          <div>Кол-во</div>
          <div>Стоимость</div>
          <button onClick={() => {}}></button>
        </StyledItem>

        <ItemsList {...props} />
      </StyledTable>

      {props.isAddItemActive ? <ItemForm {...props} /> : null}

      <StyledButton
        onClick={() => {
          props.setAddItemsStatus(!props.isAddItemActive);
        }}
      >
        Добавить новый товар
      </StyledButton>
    </>
  );
};

export default Table;
