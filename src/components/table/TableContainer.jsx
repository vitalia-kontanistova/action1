import React, { useEffect, useState } from "react";
import Table from "./Table";

function TableContainer(props) {
  let itemsList = [
    { id: 0, name: "item 1", amount: 2, cost: 50 },
    { id: 1, name: "item 2", amount: 1, cost: 20 },
    { id: 2, name: "item 3", amount: 3, cost: 30 },
  ];
  let [items, setItems] = useState(itemsList);
  let [isAddItemActive, setAddItemsStatus] = useState(false);
  let [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    let cost = 0;
    items.forEach((item) => {
      cost += item.cost * item.amount;
    });

    setTotalCost(cost);
  }, [items]);

  let deleteItem = (id) => {
    setItems((prevState) => prevState.filter((item) => item.id !== id));
  };
  let addItem = (name, amount, cost) => {
    let id = items[items.length - 1].id + 1;
    let item = { id, name, amount, cost };

    setItems((prevState) => {
      return [...prevState, item];
    });
  };
  let editItem = (id, name, amount, cost) => {
    let currentItem = { id, name, amount, cost };
    let index = items.findIndex((item) => item.id === id);

    if (index > -1) {
      let itemsList = items.slice();
      itemsList.splice(index, 1, currentItem);
      setItems(itemsList);
    }
  };

  return (
    <Table
      {...props}
      items={items}
      deleteItem={deleteItem}
      addItem={addItem}
      isAddItemActive={isAddItemActive}
      setAddItemsStatus={setAddItemsStatus}
      totalCost={totalCost}
      editItem={editItem}
    />
  );
}

export default TableContainer;
