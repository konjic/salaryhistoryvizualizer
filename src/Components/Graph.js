import '@progress/kendo-theme-default/dist/all.css';  

import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
  } from "@progress/kendo-react-charts";



const ChartContainer = (props) => (
    
    <Chart>
    
      <ChartCategoryAxis>
        <ChartCategoryAxisItem

          categories={props.timespan}
        />
      </ChartCategoryAxis>
      <ChartSeries>
        <ChartSeriesItem type="line" data={props.valori} />

      </ChartSeries>
    </Chart>
  );

  export default ChartContainer