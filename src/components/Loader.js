import React from "react";
import "./loader.css";

const Loader = () => {
  return (
    <div className="h-screen w-screen z-50 flex items-center justify-center fixed mt-12 bg-transparent top-0 left-0">
      <div className="flex flex-col items-center">
        <p className="text-white">API Response are taking more time than usual. Please wait and have patience</p>
        <p classNameName="cirlce">
          <span className="ouro ouro3">
            <span className="left">
              <span className="anim"></span>
            </span>
            <span className="right">
              <span className="anim"></span>
            </span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Loader;
