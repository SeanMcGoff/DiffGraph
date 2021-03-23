import React, {useLayoutEffect, useState} from 'react';
import {TextField} from '@material-ui/core';
import { Plot } from './Plot';
import { Form, Model } from './Form';
import "./App.css";

function App() {
  useLayoutEffect(() => {
    Plot("0", 400, 400, "#standardGraph");
    Plot("0", 400, 400, "#diffGraph")
  });
  const [model, setModel] = useState(Model.Proportional);
  return (
    <div id="App">
      <div id="options">
      <Form model={model}/>
      </div>
      <div id="graphs">
      <div className="graph-with-label">
        <h2>Y(x) Graph:</h2>
        <div id="standardGraph"></div>
      </div>
      <div className="graph-with-label">
        <h2>dy/dx Graph: </h2>
        <div id="diffGraph"></div>        
      </div>    
      </div>
    </div>
  );
}

export default App;
