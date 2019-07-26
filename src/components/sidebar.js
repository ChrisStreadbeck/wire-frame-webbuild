import React from "react";

import logo from "../../static/assets/logos/logo.png";

export default function() {
  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-top-wrapper">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="button-wrapper">
          <button className="btn" type="submit">
            button
          </button>
          <button className="btn" type="submit">
            button
          </button>
          <button className="btn" type="submit">
            button
          </button>
          <button className="btn" type="submit">
            button
          </button>
          <button className="btn" type="submit">
            button
          </button>
          <button className="btn" type="submit">
            button
          </button>
        </div>
      </div>
      <div className="sidebar-bottom-wrapper">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
      </div>
    </div>
  );
}
