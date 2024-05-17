import React from "react";

import { Footer, Genres, Musicians, Header } from "./containers";
import { Navbar } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Genres />
      <Musicians />
      <Footer />
    </div>
  );
};

export default App;
