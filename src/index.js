import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import './index.css'
import { ContextProvider } from "./contexts/contextProvider";

//this hooks our react application to the root div
ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById("root")
); 
