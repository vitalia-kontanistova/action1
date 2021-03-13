import React from "react";
import { useField } from "formik";
import { StyledInput } from "../table/TableStyled.styled";

const CustomInput = (props) => {
  const [field, meta] = useField(props);
  let error = !!(meta.touched && meta.error);

  return (
    <>
      <StyledInput {...field} {...props} error={error} />
    </>
  );
};

export default CustomInput;
