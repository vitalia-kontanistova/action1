import React, { useState } from "react";
import Table from "./Table";

function TableContainer(props) {
  let itemsList = [
    { id: 0, name: "item 1", amount: 2, cost: 50 },
    { id: 1, name: "item 2", amount: 1, cost: 20 },
    { id: 2, name: "item 3", amount: 3, cost: 30 },
  ];
  let [items, setItems] = useState(itemsList);
  let [isAddItemActive, setAddItemsStatus] = useState(false);

  let deleteItem = (id) => {
    setItems((prevState) => prevState.filter((item) => item.id !== id));
  };
  let addItem = (name, amount, cost) => {
    let id = items[items.length - 1].id + 1;
    let costTransformed = parseFloat(cost).toFixed(2);

    let item = { id, name, amount, cost: costTransformed };

    setItems((prevState) => {
      return [...prevState, item];
    });
  };

  return (
    <Table
      {...props}
      items={items}
      deleteItem={deleteItem}
      addItem={addItem}
      isAddItemActive={isAddItemActive}
      setAddItemsStatus={setAddItemsStatus}
    />
  );
}

export default TableContainer;
