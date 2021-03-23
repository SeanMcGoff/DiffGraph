import {useState} from "react";
import {TextField, Button} from '@material-ui/core';
import {PlotProportional} from "./Plot";
export enum Model {
    Proportional,
    Logistic,
    Mixture,
}

interface Props {
    model: Model;
};

interface ProportionalDEParams {
    k: number,
    c: number,
}

export const Form = (props: Props) => {
    
    const [k, setK] = useState<string>("1");
    const [c, setC] = useState<string>("1");
    const submitProportional = () => {
          PlotProportional(k,c)
    }    
    switch(props.model) {

        case Model.Proportional:
            return (
                <div>
                <h1>Parameters:</h1>
                <form> 
                    <TextField id="k-input" 
                    label="Proportion Constant" 
                    variant="outlined" 
                    type="number" 
                    value={k}
                    onChange={e => setK(e.target.value)}/>
                    <TextField id="c-input" 
                    label="Y(0)" 
                    variant="outlined" 
                    type="number" 
                    value={c}
                    onChange={e => setC(e.target.value)} />
                    <Button onClick={submitProportional}>Graph It!</Button>
                </form> 
                </div>

            );
        default:
            return (<h1>Not Implemented Yet :/</h1>);
    }
}; 