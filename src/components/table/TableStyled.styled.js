import { Form } from "formik";
import styled from "styled-components";

let colors = {
  white: "#ffffff",
  black: "#666697",
  grey: "#E8F0FE",
  darkBlue: "#6C7AE0",
  blue: "#C4D3F6",
  lightBlue: "#ECECFF",
  red: "#DC545E",
  lightRed: "#F2B0B1",
  almastWhite: "#F8F8FF",
};

export const StyledWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 100px 60px;
  color: ${colors.black};

  @media (max-width: 600px) {
    padding: 60px 20px;
  }
  @media (max-width: 550px) {
    overflow: scroll;
  }
`;

export const StyledContent = styled.div`
  max-width: 960px;
  margin: 0 auto;
  font-size: 18px;

  @media (max-width: 600px) {
    font-size: 15px;
  }
  @media (max-width: 550px) {
    min-width: 500px;
  }
`;

export const StyledTitle = styled.h1`
  font-size: 28px;
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const StyledTable = styled.div`
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid ${colors.darkBlue};
`;

export const StyledHeader = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 2fr 2fr 100px;
  align-items: center;
  background: ${colors.darkBlue};
  color: ${colors.white};

  div {
    line-height: 150%;
    padding: 20px;
  }
`;

export const StyledItem = styled(StyledHeader)`
  background: ${colors.white};
  color: ${colors.black};
  border-bottom: 1px solid ${colors.lightBlue};
  white-space: wrap;
  :last-child {
    border: none;
  }
  :hover {
    background: ${colors.lightBlue};
  }
  button {
    background: none;
    height: 100%;
    :hover {
      background: ${colors.blue};
    }
  }
`;

export const StyledTableButton = styled.button`
  background: ${(props) => (props.red ? colors.lightRed : colors.blue)};
`;

export const StyledForm = styled(Form)`
  max-width: 100%;
  display: grid;
  grid-template-columns: 3fr 2fr 2fr 100px;

  border-top: 2px solid ${colors.darkBlue};
  border-bottom: 2px solid ${colors.darkBlue};
  overflow: hidden;
  margin-top: ${(props) => (props.separate ? "40px" : "")};
  border: ${(props) => (props.separate ? `2px solid ${colors.darkBlue}` : "")};
  border-radius: ${(props) => (props.separate ? "10px" : "")};
`;

export const StyledButtonsBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const StyledInput = styled.input`
  background: ${(props) => (props.error ? colors.lightRed : colors.grey)};
  font-size: 18px;
  line-height: 150%;
  padding: 20px;
  color: ${colors.darkBlue};
  min-width: 50px;
  -moz-appearance: textfield;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  @media (max-width: 600px) {
    font-size: 15px;
  }
`;

export const StyledButton = styled.button`
  padding: 2px 10px;
  background: lightgray;
  white-space: nowrap;
  background: ${colors.darkBlue};
  color: ${colors.white};
  border-radius: 10px;
  font-size: 18px;
  line-height: 150%;
  padding: 10px 15px;
  min-width: 220px;

  @media (max-width: 600px) {
    font-size: 15px;
    margin-top: 20px;
  }
`;

export const StyledTotalCost = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 2px solid ${colors.darkBlue};
  min-width: 220px;
  padding: 10px;
  line-height: 150%;

  span {
    font-weight: bold;
    padding-left: 5px;
  }
`;
export const StyledBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;

  @media (max-width: 600px) {
    flex-direction: column-reverse;
  }
`;
