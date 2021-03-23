import {useLayoutEffect} from 'react';
import { Plot } from './Plot';
import { Form, Model } from './Form';
import { Grid } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
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
