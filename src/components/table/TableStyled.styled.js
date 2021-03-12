import styled from "styled-components";

export const StyledTitle = styled.h1`
  font-size: 24px;
  text-align: center;
`;

export const StyledItem = styled.div`
  display: grid;
  width: 400px;
  margin: 0 auto;
  border: solid 1px grey;
  grid-template-columns: 3fr 2fr 2fr 1fr;
  font-weight: ${(props) => (props.header ? "bold" : "normal")};

  div {
    border: solid 1px grey;
    line-height: 150%;
    padding: 2px 5px;
  }
`;
export const StyledItemsList = styled.div`
  border: solid 1px plum;
`;
