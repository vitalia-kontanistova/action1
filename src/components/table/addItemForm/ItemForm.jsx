import React from "react";
import * as yup from "yup";
import { Formik } from "formik";
import CustomInput from "./CustomInput";
import {
  StyledForm,
  StyledButtonsBlock,
  StyledTableButton,
} from "../TableStyled.styled";

const ItemForm = (props) => {
  const numberReg = /^\d+$/;
  const stringReg = /[a-zA-Zа-яА-Я]/;
  let separate = props.separate;

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
  };
  let dropChanges = () => {
    if (id !== "" && id > -1) {
      props.setItemStatus(false);
    } else {
      props.setAddItemsStatus(false);
    }
  };
  return (
    <>
      <Formik
        {...props}
        initialValues={{ name: name, amount: amount, cost: cost }}
        validationSchema={yup.object({
          name: yup.string().min(2).matches(stringReg).required(),
          amount: yup.string().matches(numberReg).notOneOf(["0"]).required(),
          cost: yup.string().matches(numberReg).notOneOf(["0"]).required(),
        })}
        onSubmit={(values) => {
          submitChanges(values);
          dropChanges();
        }}
      >
        {(props) => {
          return (
            <StyledForm separate={separate} method="POST">
              <CustomInput type="text" name="name" placeholder="товар" />
              <CustomInput type="number" name="amount" placeholder="кол-во" />
              <CustomInput type="number" name="cost" placeholder="цена" />
              <StyledButtonsBlock>
                <StyledTableButton type="submit">V</StyledTableButton>
                <StyledTableButton red onClick={dropChanges}>
                  X
                </StyledTableButton>
              </StyledButtonsBlock>
            </StyledForm>
          );
        }}
      </Formik>
    </>
  );
};

export default ItemForm;
