import React from "react";
import ItemContainer from "../item/ItemContainer";
import {
  StyledTitle,
  StyledTable,
  StyledHeader,
  StyledButton,
  StyledTotalCost,
  StyledBlock,
} from "./TableStyled.styled";
import ItemFormContainer from "../itemForm/ItemFormContainer";

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
        <ItemsList
          items={props.items}
          editItem={props.editItem}
          deleteItem={props.deleteItem}
        />
      </StyledTable>

      {props.isAddItemActive ? (
        <ItemFormContainer
          editItem={props.editItem}
          separate={true}
          addItem={props.addItem}
          setAddItemsStatus={props.setAddItemsStatus}
        />
      ) : (
        []
      )}

      <StyledBlock>
        <StyledButton onClick={props.toggleAddItemsStatus}>
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
