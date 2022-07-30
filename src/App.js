import "./styles.css";

import { useState } from "react";
import "./styles.css";

export default function App() {

      const [Alert, setAlert] = useState("");
  function ClickedMe(e) {
  
  setAlert(alert(e.target.value));
  
  }
  return (
  
  <div className="App">
  
  <h1>Hello CodeSandbox</h1>
  
  <label for="cars">Choose a car:</label>
  
  <select id="cars" onChange={ClickedMe}>
  
  <option></option>
  
  <option>Volvo</option>
  
  <option>Saab</option>
  
  <option>Opel</option>
  
  <option>Audi</option>
  
  </select>
  
    </div>
  );
}