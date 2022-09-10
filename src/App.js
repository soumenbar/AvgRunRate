import { useState } from "react";
import DynamicScore from "./DynamicScore";
import StaticScore from "./StaticScore";
import './App.css';


function App() {
  let [source, setSoure] = useState("test")
  
  return (
    <div className="App">
      <div className="source">
        <form onChange={(e) => setSoure(e.target.value)}>
          Source of data:
          <input id="src-test" type="radio"
            name="data-source" value="test" defaultChecked />
          <label htmlFor="src-local">Test Data</label>
          <input id="src-server" type="radio"
            name="data-source" value="server" />
          <label htmlFor="src-server">Server Data</label>
        </form>
      </div>
      <hr/>




      {source === 'test' ? <StaticScore /> :
        <DynamicScore />}

    </div>
  );
}

export default App;
