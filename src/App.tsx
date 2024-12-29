import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [user, setUser] = useState<String>("Bhwana");
  return (
    <div className="App">
      <h2>Hi {user}</h2>
    </div>
  );
}

export default App;
