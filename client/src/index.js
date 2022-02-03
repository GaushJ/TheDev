import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import VideoComponent from "./Components/VideoComponent";


ReactDOM.render(
  <BrowserRouter>
     <App />  
     {/* <VideoComponent /> */}
  </BrowserRouter>,

  document.getElementById("root")
);
