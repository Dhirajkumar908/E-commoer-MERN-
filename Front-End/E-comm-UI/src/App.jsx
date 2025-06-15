import { useState } from "react";
import {BrowserRouter as Router, Routes, Route,Link} from "react-router-dom";
import "./app.css";

import Home from "./Pages/Home";

function App() {
  return (
    <>
     <Home/>
    </>
  );
}

export default App;
