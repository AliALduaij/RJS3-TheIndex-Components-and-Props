import React from "react";
import authors from "./data";
import Sidebar from "./Sidebar";
import Authorlist from "./Authorlist";

function App() {
  return (
    <div id="app" className="container-fluid">
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="content col-10">
          <Authorlist authors={authors} />
        </div>
      </div>
    </div>
  );
}

export default App;
