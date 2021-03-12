import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Table from "./Table";

function TableContainer(props) {
  let itemsList = [
    { id: 0, name: "item 1", amount: 2, cost: 50 },
    { id: 1, name: "item 2", amount: 1, cost: 20 },
    { id: 2, name: "item 3", amount: 3, cost: 30 },
  ];
  let [items, setItems] = useState(itemsList);

  let deleteItem = (id) => {
    setItems((prevState) => prevState.filter((item) => item.id !== id));
  };
  let addItem = (name, amount, cost) => {
    let id = items[items.length - 1].id;
    let item = { id, name, amount, cost };
    setItems((prevState) => {
      return prevState.push(item);
    });
  };

  return <Table {...props} items={items} deleteItem={deleteItem} />;
}

const mapState = (state) => ({});

export default TableContainer;
