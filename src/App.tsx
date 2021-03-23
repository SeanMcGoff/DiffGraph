import {useLayoutEffect} from 'react';
import { Plot } from './Plot';
import { Form, Model } from './Form';
import "./App.css";

function App() {
  useLayoutEffect(() => {
    Plot("exp(x)", 400, 400, "#standardGraph");
    Plot("x", 400, 400, "#diffGraph")
  });
  return (
    <div id="App">
      <div id="model-select">

      </div>
      <div id="options">
      <Form model={Model.Proportional}/>
      </div>
      <div id="graphs">
      <div className="graph-with-label">
        <h2>Y(t) Graph:</h2>
        <div id="standardGraph"></div>
      </div>
      <div className="graph-with-label">
        <h2>dy/dt Graph: </h2>
        <div id="diffGraph"></div>        
      </div>    
      </div>
    </div>
  );
}

export default App;
