import React, { useReducer } from "react";
import reducer, { initialState } from "./reducers/index.js";
import {
  applyNumber,
  changeOperation,
  clearDisplay,
  memoryPlus,
  memoryMR,
  memoryClear,
} from "./actions/index.js";
import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  function sayiHandler(sayi) {
    dispatch(applyNumber(sayi));
  }
  function operationHandler(islem) {
    dispatch(changeOperation(islem));
  }
  function handleClear() {
    dispatch(clearDisplay());
  }
  function handleMemoryPlus() {
    dispatch(memoryPlus());
  }
  function handlememoryMR() {
    dispatch(memoryMR());
  }
  function handleMemoryClear() {
    dispatch(memoryClear());
  }
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation: </b>
                {state.operation}
              </span>
              <span id="memory">
                <b>Memory: </b>
                {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} onClick={() => handleMemoryPlus()} />
              <CalcButton value={"MR"} onClick={() => handlememoryMR()} />
              <CalcButton value={"MC"} onClick={() => handleMemoryClear()} />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => sayiHandler(1)} />
              <CalcButton value={2} onClick={() => sayiHandler(2)} />
              <CalcButton value={3} onClick={() => sayiHandler(3)} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => sayiHandler(4)} />
              <CalcButton value={5} onClick={() => sayiHandler(5)} />
              <CalcButton value={6} onClick={() => sayiHandler(6)} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => sayiHandler(7)} />
              <CalcButton value={8} onClick={() => sayiHandler(8)} />
              <CalcButton value={9} onClick={() => sayiHandler(9)} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => operationHandler("+")} />
              <CalcButton value={"*"} onClick={() => operationHandler("*")} />
              <CalcButton value={"-"} onClick={() => operationHandler("-")} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => handleClear()} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
