import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [user, setUser] = useState<String>("Rajesh Dhiman");
  return (
    <div className="App">
      <h2>Hi {user}</h2>
      <p>This change is done on branch2</p>
      <p>Today I made some changes on branch 2</p>
    </div>
  );
}

export default App;
