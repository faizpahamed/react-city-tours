import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import TourList from "./components/TourList";

import "./App.scss";

export default class App extends Component {
  render() {
    return (
      <main>
        <Navbar></Navbar>
        <TourList></TourList>
      </main>
    );
  }
}
