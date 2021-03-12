import React from "react";
import { useField } from "formik";
import { StyledMaskedInput } from "../../TableStyled.styled";

const MaskedCostInput = (props) => {
  const [field, meta] = useField(props);
  let error = !!(meta.touched && meta.error);

  return (
    <StyledMaskedInput error={error} mask={props.mask} {...field} {...props} />
  );
};

export default MaskedCostInput;
