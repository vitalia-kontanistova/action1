import "./App.css";
import TableContainer from "./components/table/TableContainer";
import {
  StyledContent,
  StyledWrapper,
} from "./components/table/TableStyled.styled";

function App() {
  return (
    <StyledWrapper>
      <StyledContent>
        <TableContainer />
      </StyledContent>
    </StyledWrapper>
  );
}

export default App;
