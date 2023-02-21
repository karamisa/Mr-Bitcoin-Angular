import { Component } from "@angular/core";

@Component({
  selector: "chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.scss"],
})
export class ChartComponent {

  // Chart type
  chartType = "LineChart";

  // Chart events
  chartEvents = [
    {
      eventName: "ready",
      callback: () => {
        console.log("Chart ready");
      },
    },
  ];

  // Chart columns
  chartColumns = [
    { type: "string", label: "Date" },
    { type: "number", label: "Value" },
  ];

  // Chart options
  chartOptions = {
    responsive: true,
  };

  // Chart data
  chartData = [
    ["2019-01-01", 100],
    ["2019-01-02", 200],
    ["2019-01-03", 300],

    ["2019-01-04", 400],
    ["2019-01-05", 500],
    ["2019-01-06", 600],
    
    ["2019-01-07", 700],
    ["2019-01-08", 800],
    ["2019-01-09", 900],
  ];

  // Chart labels
  chartLabels = ["January", "February", "March", "April", "May", "June", "July"];



}
