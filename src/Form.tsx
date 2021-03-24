import {useState} from "react";
import {TextField, Grid} from '@material-ui/core';
import {PlotUninhibited} from "./Plot";
export enum Model {
    Uninhibited,
    Logistic,
    Mixture,
}

interface Props {
    model: Model;
};

export const Form = (props: Props) => {
    //Uninhibited Model
    const [k, setK] = useState<string>("1");
    const [c, setC] = useState<string>("1");
    //Mixture Model

    //Logistic Model

    const submitUninhibited = () => {
          PlotUninhibited(k,c)
    }
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
                        value={k}
                        onChange={e => {
                            setK(e.target.value);
                            submitUninhibited();
                        }}/>
                        </Grid>
                        <Grid item>
                        <TextField className="graph-input" 
                        label="Y(0)" 
                        variant="outlined" 
                        type="number" 
                        value={c}
                        onChange={e => {
                            setC(e.target.value);
                            submitUninhibited();
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