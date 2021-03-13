import React, { useEffect, useState } from "react";
import Table from "./Table";

function TableContainer(props) {
  let initialList = localStorage.getItem("itemsList")
    ? JSON.parse(localStorage.getItem("itemsList"))
    : [];
  let [items, setItems] = useState(initialList);
  let [isAddItemActive, setAddItemsStatus] = useState(false);
  let [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    let cost = 0;
    items.forEach((item) => {
      cost += item.cost * item.amount;
    });

    setTotalCost(cost);
    localStorage.setItem("itemsList", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    let itemsList = JSON.parse(localStorage.getItem("itemsList"));

    if (itemsList.length == 0) {
      itemsList = getItemsList();
      localStorage.setItem("itemsList", JSON.stringify(itemsList));
    }
    setItems(itemsList);
  }, []);

  let deleteItem = (id) => {
    setItems((prevState) => prevState.filter((item) => item.id !== id));
  };
  let addItem = (name, amount, cost) => {
    let id = items[items.length - 1].id + 1;
    let item = { id, name, amount, cost };

    setItems((prevState) => [...prevState, item]);
  };
  let toggleAddItemsStatus = () => {
    setAddItemsStatus((prevState) => !prevState);
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
      items={items}
      deleteItem={deleteItem}
      addItem={addItem}
      isAddItemActive={isAddItemActive}
      setAddItemsStatus={setAddItemsStatus}
      totalCost={totalCost}
      editItem={editItem}
      toggleAddItemsStatus={toggleAddItemsStatus}
    />
  );
}

export default TableContainer;

function getItemsList() {
  let itemsNames = [
    "Монстера Адансона (Monstera Adansonii)",
    "Эпипремнум 'Happy Leaf' (Epipremnum 'Happy Leaf')",
    "Крассула Марнье (Crassula Marnieriana)",
    "Плющ Обыкновенный (Hedéra Hélix)",
    "Пилея Пеперомиевидная (Pilea Peperomioides)",
    "Замиокулькас Замиели́cтный (Zamioculcas Zamiifolia)",
    "Сансевие́рия (Sansevieria)",
    "Пеперо́мия (Peperomia Raindrop)",
    "Церопегия Вуда (Ceropegia Woodii)",
    "Кресто́вник Роули (Senécio Rowleyanus)",
  ];
  let id = 0;
  let itemsList = itemsNames.map((name) => {
    let item = {
      id,
      name,
      amount: Math.floor(Math.random() * 7) + 3,
      cost: Math.floor(Math.random() * 95) + 5,
    };
    id++;
    return item;
  });
  return itemsList;
}
