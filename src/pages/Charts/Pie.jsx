import React from "react";

import { pieChartData } from "../../data/dummy";
import { Header, Pie as PieChart } from "../../components";

const Pie = () => (
  <div className="m-4 md:m-10 my-24 md:p-10 p-4 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <Header category="Pie" title="Project Cost Breakdown" />
    <div className="w-full">
      <PieChart id="chart-pie" data={pieChartData} legendVisiblity height="full" />
    </div>
  </div>
);

export default Pie;
