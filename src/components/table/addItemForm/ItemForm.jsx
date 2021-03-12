import React from "react";
import * as yup from "yup";
import { Formik } from "formik";
import CustomInput from "./CustomInput/CustomInput";
import MaskedCostInput from "./CustomInput/MaskedInput";
import { StyledForm } from "../TableStyled.styled";

const ItemForm = (props) => {
  const costMask = [/\d/, /\d/, /\d/, ".", /\d/, /\d/];
  const costReg = /^\d{3}.\d{2}$/;
  const amountReg = /^\d+$/;
  const errors = {
    required: "Поле обязательно для заполнения",
    name: "Выберете название подлинее",
    amount: "Выберете название подлинее",
    cost: "Выберете название подлинее",
  };

  return (
    <>
      <Formik
        {...props}
        initialValues={{ name: "", amount: "", cost: "" }}
        validationSchema={yup.object({
          name: yup.string().min(2, errors.name).required(errors.required),
          amount: yup.string().matches(amountReg).notOneOf(["0"]).required(),
          cost: yup.string().matches(costReg).notOneOf(["000,00"]).required(),
        })}
        onSubmit={(values, { resetForm }) => {
          props.addItem(values.name, values.amount, values.cost);
          props.setAddItemsStatus(false);
          resetForm();
        }}
      >
        {(props) => {
          return (
            <StyledForm method="POST">
              <CustomInput type="text" name="name" placeholder="наименование" />
              <CustomInput type="number" name="amount" placeholder="кол-во" />
              <MaskedCostInput
                mask={costMask}
                type="text"
                name="cost"
                placeholder="цена"
              />
              <button type="submit">V</button>
            </StyledForm>
          );
        }}
      </Formik>
    </>
  );
};

export default ItemForm;
