import React from "react";
import '../components/styles/pnf.css';
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="pnf">
      <h1>404</h1>
      <p>Page Not Found</p>
      <Link to='/' className="btn-primary button">Go to Home Page</Link>{" "}
    </div>
  );
};

export default PageNotFound;
