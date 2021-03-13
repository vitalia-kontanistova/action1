import React, { useState } from "react";
import ItemForm from "../table/addItemForm/ItemForm";
import Item from "./Item";

function ItemContainer(props) {
  let [isItemActive, setItemStatus] = useState(false);

  if (isItemActive) {
    return <ItemForm {...props} setItemStatus={setItemStatus} />;
  }
  return <Item {...props} setItemStatus={setItemStatus} />;
}

export default ItemContainer;
