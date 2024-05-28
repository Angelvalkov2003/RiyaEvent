import React from "react";

import { Footer, Genres, Musicians, Header, MakeOrder } from "./containers";
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
      <MakeOrder />
      <Footer />
    </div>
  );
};

export default App;
