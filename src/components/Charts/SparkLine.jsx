import React from "react";
import { SparklineComponent, Inject, SparklineTooltip } from "@syncfusion/ej2-react-charts";

class SparkLine extends React.PureComponent {
  render() {
    const { id, height, width, color, data, type, currentColor } = this.props;
    return (
      <SparklineComponent
        id={id}
        height={height}
        width={width}
        lineWidth={1}
        valueType="Numeric"
        fill="rgb(0, 189, 174)"
        markerSettings={{ visible: ["All"], size: 2.5, fill: currentColor }}
        border={{ color: "#e5e7eb", width: 2 }}
        dataSource={data}
        xName="x"
        yName="yval"
        type={type}
        tooltipSettings={{
          visible: true,
          format: "${x} : data ${yval}",
          trackLineSettings: {
            visible: true,
          },
        }}
      >
        <Inject services={[SparklineTooltip]} />
      </SparklineComponent>
    );
  }
}

export default SparkLine;
