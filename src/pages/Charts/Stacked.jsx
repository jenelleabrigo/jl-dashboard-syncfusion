import React from "react";

import { Header, Stacked as StackedChart } from "../../components";

const Stacked = () => (
  <div className="m-4 md:m-10 my-24 md:p-10 p-4 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <Header category="Stacked" title="Revenue Breakdown" />
    <div className="w-full">
      <StackedChart />
    </div>
  </div>
);

export default Stacked;
