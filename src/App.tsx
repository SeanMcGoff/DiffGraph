import {useState, useLayoutEffect} from 'react';
import { Plot } from './Plot';
import { Form, Model } from './Form';
import { Grid } from '@material-ui/core';
import {ToggleButtonGroup, ToggleButton} from '@material-ui/lab';
import GitHubIcon from '@material-ui/icons/GitHub';
import "./App.css";

function App() {
  useLayoutEffect(() => {
    Plot("exp(x)", 400, 400, "#standardGraph");
    Plot("x", 400, 400, "#diffGraph")
  });
  const [model, setModel] = useState(Model.Uninhibited);
  const handleModelSelect = (e: React.MouseEvent<HTMLElement>, v: Model) => {
    setModel(v)
  }
  return (
    <div id="App">
        <div id="model-select">
          <h2>Select Model</h2>
          <ToggleButtonGroup 
          color="primary" 
          aria-label="Select Model"
          exclusive
          onChange={handleModelSelect}
          value={model}>
            <ToggleButton value={Model.Uninhibited}>Uninhibited</ToggleButton>
            <ToggleButton value={Model.Mixture}>Mixture</ToggleButton>
            <ToggleButton value={Model.Logistic}>Logistic</ToggleButton>
          </ToggleButtonGroup>
        </div>
      <div id="options">
      <Form model={model}/>
      </div>
      <div className={"graphs"}>
        <Grid container direction={"column"} 
        alignItems={"center"}>
        <Grid item>
        <h2>Y(t) Graph</h2>
        </Grid>
        <Grid item>
        <div id="standardGraph"></div>
        </Grid>
        </Grid>
      <Grid container direction={"column"} 
        alignItems={"center"}>
        <Grid item>
        <h2>dy/dt Graph</h2>
        </Grid>
        <Grid item>
        <div id="diffGraph"></div>
        </Grid>
        </Grid>  
      </div>
      <div className="footer">
        <p>Created by Sean McGoff - 2021</p>
        <a href="https://github.com/Seentheshadow/DiffGraph">
        <GitHubIcon />
        </a>
      </div>
    </div>
  );
}

export default App;
