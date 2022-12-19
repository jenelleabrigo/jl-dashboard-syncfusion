import React from "react";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, HiloSeries, Tooltip, DateTime, Zoom, Logarithmic, Crosshair } from "@syncfusion/ej2-react-charts";

import { financialChartData, financialPrimaryXAxis, financialPrimaryYAxis } from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";
import { Header } from "../../components";

const date1 = new Date("2017, 1, 1");

function filterValue(value) {
  if (value.x >= date1) {
    // eslint-disable-next-line no-sequences
    return value.x, value.high, value.low;
  }
}
const returnValue = financialChartData.filter(filterValue);

const Financial = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 my-24 md:p-10 p-4 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Financial" title="APPLE Historical" />
      <div className="w-full">
        <ChartComponent
          id="charts"
          primaryXAxis={financialPrimaryXAxis}
          primaryYAxis={financialPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true, shared: true }}
          crosshair={{ enable: true, lineType: "Vertical", line: { width: 0 } }}
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
        >
          <Inject services={[HiloSeries, Tooltip, DateTime, Logarithmic, Crosshair, Zoom]} />
          <SeriesCollectionDirective>
            <SeriesDirective dataSource={returnValue} xName="x" yName="low" name="Apple Inc" type="Hilo" low="low" high="high" />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Financial;
