import React from "react";
import { BiLoader } from "react-icons/bi";

function Loader() {
  return (
    <div id="ftco-loader" className="fullscreen show">
      <span>
        <BiLoader /> Loading ...
      </span>
    </div>
  );
}

export default Loader;
