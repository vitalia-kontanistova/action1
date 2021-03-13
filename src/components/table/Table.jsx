import React from "react";
import ItemForm from "./addItemForm/ItemForm";
import ItemContainer from "../item/ItemContainer";
import {
  StyledTitle,
  StyledTable,
  StyledHeader,
  StyledButton,
  StyledTotalCost,
  StyledBlock,
} from "./TableStyled.styled";

const Table = (props) => {
  return (
    <>
      <StyledTitle> Таблица товаров</StyledTitle>
      <StyledTable>
        <StyledHeader>
          <div>Товар</div>
          <div>Количество</div>
          <div>Стоимость</div>
          <div></div>
        </StyledHeader>

        <ItemsList {...props} />
      </StyledTable>

      {props.isAddItemActive ? <ItemForm separate {...props} /> : null}

      <StyledBlock>
        <StyledButton
          onClick={() => {
            props.setAddItemsStatus(!props.isAddItemActive);
          }}
        >
          Добавить новый товар
        </StyledButton>
        <StyledTotalCost>
          Общая сумма: <span>${props.totalCost}</span>
        </StyledTotalCost>
      </StyledBlock>
    </>
  );
};

const ItemsList = (props) => {
  let itemsList = props.items.map((item) => (
    <ItemContainer key={item.id} {...props} item={item} />
  ));
  return itemsList;
};

export default Table;
