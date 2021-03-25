import {useState, useLayoutEffect} from "react";
import {TextField, Grid} from '@material-ui/core';
import {PlotLogistic, PlotUninhibited} from "./Plot";
export enum Model {
    Uninhibited,
    Logistic,
}

interface Props {
    model: Model;
};

export interface UModel {
    [k:string]: string,
    c: string,
}

export interface LogModel {
    [k:string]: string,
    m: string,
    z: string,
}

export const Form = (props: Props) => {
    //Uninhibited Model
    const [uModel, setUModel] = useState<UModel>({
        "k": "1",
        "c": "1",
    })
    const submitUninhibited = () => {
        PlotUninhibited(uModel);
    }
    const handleUChange = (idx: string, val: string) => {
        setUModel(prev => {
        let newState = {...prev};
        if (val === "") {
            newState[idx] = "0";
        } else {
            newState[idx] = val;
        }
        return newState;
        });
        submitUninhibited();
    }

    //Mixture Model

    //Logistic Model
    const [logModel, setLogModel] = useState<LogModel>({
        "k": "1",
        "m": "1",
        "z": "1",
    })
    const submitLogistic = () => {
        PlotLogistic(logModel);
    }
    const handleLChange = (idx: string, val: string) => {
        setLogModel(prev => {
            let newState = {...prev};
            if (val === "") {
                newState[idx] = "0";
            } else {
                newState[idx] = val;
            }
            return newState;
        });
        submitLogistic();
    }
    useLayoutEffect(() => {
        switch(props.model) {
        case Model.Uninhibited:
            submitUninhibited();
            break;
        case Model.Logistic:
            submitLogistic();
            break;
        }
    });
    switch(props.model) {

        case Model.Uninhibited:
            return (
            <div>
            <h2>Parameters:</h2>
                <form> 
                    <Grid container direction={"row"} spacing={5}>
                        <Grid item>
                        <TextField className="graph-input" 
                        label="Proportion Constant" 
                        variant="outlined" 
                        type="number" 
                        value={uModel["k"]}
                        onChange={e => {
                            handleUChange("k",e.target.value);
                        }}/>
                        </Grid>
                        <Grid item>
                        <TextField className="graph-input" 
                        label="Y(0)" 
                        variant="outlined" 
                        type="number" 
                        value={uModel["c"]}
                        onChange={e => {
                            handleUChange("c",e.target.value);
                        }}/>
                        </Grid>
                    </Grid>
                </form> 
            </div>
            );
        
        case Model.Logistic:
            return (
            <div>
            <h2>Parameters:</h2>
                <form> 
                    <Grid container direction={"row"} spacing={5}>
                        <Grid item>
                        <TextField className="graph-input" 
                        label="Relative Growth Constant" 
                        variant="outlined" 
                        type="number" 
                        value={logModel.k}
                        onChange={e => {
                            handleLChange("k",e.target.value);
                        }}/>
                        </Grid>
                        <Grid item>
                        <TextField className="graph-input" 
                        label="Carrying Capacity" 
                        variant="outlined" 
                        type="number" 
                        value={logModel.m}
                        onChange={e => {
                            handleLChange("m",e.target.value);
                        }}/>
                        </Grid>
                        <Grid item>
                        <TextField className="graph-input" 
                        label="Y(0)" 
                        variant="outlined" 
                        type="number" 
                        value={logModel.z}
                        onChange={e => {
                            handleLChange("z",e.target.value);
                        }}/>
                        </Grid>
                    </Grid>
                </form> 
            </div>
            );
        default:
            return (<h2>Not Implemented Yet :/</h2>);
    }
}; 