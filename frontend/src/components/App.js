import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./Home/HomePage";
import DetailPage from "./Detail/DetailPage";

function App() {
  return (
    <div className="container-fluid">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/detail" component={DetailPage} />
    </div>
  );
}

export default App;
