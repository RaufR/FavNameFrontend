import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="jumbotron">
      <h1> FavName</h1>
      <p>A analysis on children name on different ethnicity and years</p>
      <Link to="detail" className="btn btn-info btn-lg">
        Single name
      </Link>
    </div>
  );
};

export default HomePage;
