import React from "react";
import { Link } from "react-router-dom";

function Breadcrumb({ title }) {
  return (
    <section className="breadcrumb mb-0">
      <div className="container">
        <ul className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active">
            <Link to="#" className="text-muted">
              {title}
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Breadcrumb;
