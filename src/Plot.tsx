import functionPlot from "function-plot";


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

export const PlotProportional = (k: string, c: string) => {
    const standardFn = c+"*exp("+k+"*x)"
    Plot(standardFn, 400, 400, "#standardGraph")
    const diffFn = k+"*x"
    Plot(diffFn, 400, 400, "#diffGraph")
}
