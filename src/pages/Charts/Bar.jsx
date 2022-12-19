import React from "react";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, ColumnSeries, DataLabel } from "@syncfusion/ej2-react-charts";
import { barCustomSeries, barPrimaryYAxis, barPrimaryXAxis } from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";

import { Header } from "../../components";

const Bar = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 my-24 md:p-10 p-4 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Bar" title="Olympic Medal Counts - RIO" />
      <div className="w-full">
        <ChartComponent
          id="bar-chart"
          primaryXAxis={barPrimaryXAxis}
          primaryYAxis={barPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          background={currentMode === "Dark" ? "#33373e" : "#fff"}
          legendSettings={{ background: "white" }}
        >
          <Inject services={[ColumnSeries, DataLabel, Legend, Tooltip, Category]} />
          <SeriesCollectionDirective>
            {barCustomSeries.map((item, index) => (
              <SeriesDirective key={index} {...item} />
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Bar;
