import { StrictMode } from "react";
import ReactDOM from "react-dom";

import DrumMachine from "./DrumMachine";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <DrumMachine />
  </StrictMode>,
  rootElement
);
