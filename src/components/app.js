import React, { Component } from "react";

import Sidebar from "./sidebar";
import MainContent from "./main-content";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Sidebar />
        <MainContent />
      </div>
    );
  }
}
