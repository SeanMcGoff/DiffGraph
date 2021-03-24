import functionPlot from "function-plot";
import {UModel, LogModel} from "./Form";


export const Plot = (fn: string, width: number, height: number, parent: string) =>  {
    const plot = functionPlot({
        target: parent,
        width,
        height,
        grid: true,
        data: [
            {
                fn: fn
            }
        ]
    });
    return plot;
};

export const PlotUninhibited = (p: UModel) => {
    const standardFn = p.c+"*exp("+p.k+"*x)"
    Plot(standardFn, 400, 400, "#standardGraph")
    const diffFn = p.k+"*x"
    Plot(diffFn, 400, 400, "#diffGraph")
}

export const PlotLogistic = (p: LogModel) => {
    const standardFn = p.m+"/(1+(("+p.m+"-"+p.z+")/"+p.z+"*exp(-"+p.k+"x)))"
    Plot(standardFn, 400, 400, "#standardGraph")
    const diffFn = "("+p.k+"/"+p.m+")*x*("+p.m+"-x)"
    Plot(diffFn, 400, 400, "#diffGraph")
}