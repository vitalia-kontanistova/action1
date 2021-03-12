import { Form } from "formik";
import styled from "styled-components";
import MaskedInput from "react-text-mask";

export const StyledContent = styled.div`
  border: solid 1px plum; //--
  max-width: 700px;
  margin: 0 auto;
  padding: 40px;
`;

export const StyledTitle = styled.h1`
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
`;

export const StyledTable = styled.div``;

export const StyledItem = styled.div`
  display: grid;
  width: 100%;
  margin: 0 auto;
  border: solid 1px grey;
  grid-template-columns: 3fr 2fr 2fr 1fr;
  font-weight: ${(props) => (props.header ? "bold" : "normal")};

  div {
    border: solid 1px grey;
    line-height: 150%;
    padding: 2px 5px;
  }
  button {
    border: solid 1px grey;
  }
`;

export const StyledInput = styled.input`
  background: white;
  border: solid ${(props) => (props.error ? "red" : "grey")} 1px;
  line-height: 150%;
  padding: 2px 5px;
`;

export const StyledForm = styled(Form)`
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 2fr 2fr 1fr;
  margin-top: 20px;
  margin-bottom: 20px;
  border: solid 1px grey;

  button {
    border: solid 1px grey;
  }
`;

export const StyledMaskedInput = styled(MaskedInput)`
  background: white;
  border: solid ${(props) => (props.error ? "red" : "grey")} 1px;
`;

export const StyledButton = styled.button`
  padding: 2px 10px;
  background: lightgray;
  white-space: nowrap;
  margin: 20px 0;
`;
