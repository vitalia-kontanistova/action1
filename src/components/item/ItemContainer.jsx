import React, { useState } from "react";
import ItemFormContainer from "../itemForm/ItemFormContainer";
import Item from "./Item";

function ItemContainer(props) {
  let [isEditItemActive, setEditItemStatus] = useState(false);
  let changeItem = () => {
    setEditItemStatus(true);
  };
  let deleteItem = () => {
    props.deleteItem(props.item.id);
  };

  if (isEditItemActive) {
    return (
      <ItemFormContainer
        item={props.item}
        editItem={props.editItem}
        addItem={props.addItem}
        setAddItemsStatus={props.setAddItemsStatus}
        setEditItemStatus={setEditItemStatus}
        separate={props.separate}
      />
    );
  }
  return (
    <Item item={props.item} changeItem={changeItem} deleteItem={deleteItem} />
  );
}

export default ItemContainer;
