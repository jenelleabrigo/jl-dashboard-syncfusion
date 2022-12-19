import React from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  AccumulationLegend,
  AccumulationDataLabel,
  AccumulationTooltip,
  PyramidSeries,
  AccumulationSelection,
} from "@syncfusion/ej2-react-charts";

import { PyramidData } from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";
import { Header } from "../../components";

const Pyramid = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 my-24 md:p-10 p-4 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Pyramid" title="Food Comparison Chart" />
      <div className="w-full">
        <AccumulationChartComponent id="pyramid-chart" legendSettings={{ background: "white" }} tooltip={{ enable: true }} background={currentMode === "Dark" ? "#33373E" : "#fff"}>
          <Inject services={[AccumulationLegend, PyramidSeries, AccumulationTooltip, AccumulationDataLabel, AccumulationSelection]} />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              dataSource={PyramidData}
              name="Food"
              xName="x"
              yName="y"
              type="Pyramid"
              width="45%"
              height="80%"
              gapRatio={0.03}
              explode
              emptyPointSettings={{ mode: "Drop", fill: "red" }}
              dataLabel={{ visible: true, position: "Inside", name: "text" }}
            ></AccumulationSeriesDirective>
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  );
};

export default Pyramid;
