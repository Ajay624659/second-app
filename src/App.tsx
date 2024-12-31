import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [user, setUser] = useState<String>("Rajesh Dhiman");
  return (
    <div className="App">
      <h2>Hi {user}</h2>
      <p>This change is done on branch2</p>
      <p>Changes made on master on 31/12</p>
    </div>
  );
}

export default App;
