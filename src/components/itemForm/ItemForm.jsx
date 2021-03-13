import React from "react";
import * as yup from "yup";
import { Formik } from "formik";
import CustomInput from "../itemForm/CustomInput";
import {
  StyledForm,
  StyledButtonsBlock,
  StyledTableButton,
} from "../table/TableStyled.styled";

const ItemForm = (props) => {
  return (
    <>
      <Formik
        initialValues={{
          name: props.name,
          amount: props.amount,
          cost: props.cost,
        }}
        validationSchema={yup.object({
          name: yup.string().min(2).matches(props.stringReg).required(),
          amount: yup
            .string()
            .matches(props.amountReg)
            .notOneOf(["0"])
            .required(),
          cost: yup.string().matches(props.costReg).notOneOf(["0"]).required(),
        })}
        onSubmit={(values) => {
          props.submitChanges(values);
        }}
      >
        {({ separate = props.separate, dropChanges = props.dropChanges }) => {
          return (
            <StyledForm separate={separate}>
              <CustomInput type="text" name="name" placeholder="товар" />
              <CustomInput type="number" name="amount" placeholder="кол-во" />
              <CustomInput type="number" name="cost" placeholder="цена" />
              <StyledButtonsBlock>
                <StyledTableButton type="submit">✓</StyledTableButton>
                <StyledTableButton red onClick={dropChanges}>
                  ✗
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
