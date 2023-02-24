import React from "react";

function Footer() {
  return (
    <div className="bg-dark mt-4 py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="mb-0 text-white">
              Copyright © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
