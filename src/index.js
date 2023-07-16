import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./containers/App";
import  {robots}  from "./robots";
import CardList from "./components/CardList";
import 'tachyons/css/tachyons.min.css';



const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
<CardList robots={robots}/>
