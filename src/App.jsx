import React from "react";
import Search from "./component/Search";
import Stories from "./component/Stories";
import Paggination from "./component/Paggination";
import "./App.css";

const App = () => {
  return (
    <div className="hide-scrollbar">
      <Search />
      <Paggination />
      <Stories />
    </div>
  );
};

export default App;
