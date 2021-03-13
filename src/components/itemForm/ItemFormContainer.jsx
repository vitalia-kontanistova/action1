import React from "react";
import ItemForm from "./ItemForm";

const ItemFormContainer = (props) => {
  const amountReg = /^\d{1,5}$/;
  const costReg = /^\d{1,6}$/;
  const stringReg = /[a-zA-Zа-яА-Я]/;

  let id = props.item ? props.item.id : "";
  let name = props.item ? props.item.name : "";
  let amount = props.item ? props.item.amount : "";
  let cost = props.item ? props.item.cost : "";

  let submitChanges = (values) => {
    if (id !== "" && id > -1) {
      props.editItem(id, values.name, values.amount, values.cost);
    } else {
      props.addItem(values.name, values.amount, values.cost);
    }
    dropChanges();
  };

  let dropChanges = () => {
    if (id !== "" && id > -1) {
      props.setEditItemStatus(false);
    } else {
      props.setAddItemsStatus(false);
    }
  };

  return (
    <ItemForm
      separate={props.separate}
      amountReg={amountReg}
      costReg={costReg}
      stringReg={stringReg}
      name={name}
      amount={amount}
      cost={cost}
      submitChanges={submitChanges}
      dropChanges={dropChanges}
    />
  );
};

export default ItemFormContainer;
