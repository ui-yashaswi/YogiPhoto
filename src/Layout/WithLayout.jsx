// Layout.js
import React from "react";
import Navbar from "./Navbar";

const WithLayout = (WrappedComponent) => {
  return (props) => (
    <div>
      <Navbar />
      <WrappedComponent {...props} />
    </div>
  );
};

export default WithLayout;
