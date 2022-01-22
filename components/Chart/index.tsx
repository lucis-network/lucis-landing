import React, { useLayoutEffect } from "react";
import Highcharts from "highcharts";
import style from "./chart.module.css";
import highcharts3d from "highcharts/highcharts-3d";
import { Options } from "highcharts";
import { useWindowSize } from "hooks/useWindowSize";

export default function PieChart() {
  const size = useWindowSize();

  const windowWidth = size[0];
  let normalWidth = (windowWidth - 216) / 2;
  let chartWidth = normalWidth; // >= 424
  let imgWidth = normalWidth;
  let chartFontSize = "16px";

  if (windowWidth < 1024) {
    imgWidth = Math.min(windowWidth - 100, 610);
    chartWidth = windowWidth - 100;
    chartFontSize = "13px";
  }
  //   console.log("windowWidth: ", windowWidth);
  //   console.log("chartWidth: ", chartWidth);
  //   console.log("imgidth: ", imgWidth);

  useLayoutEffect(() => {
    setTimeout(() => {
      highcharts3d(Highcharts);
      const options: Options = {
        chart: {
          backgroundColor: "transparent",
          width: chartWidth,
          polar: true,
          type: "pie",
          options3d: {
            enabled: true,
            alpha: 45,
            beta: 0,
          },
        },
        title: {
          text: "",
        },
        accessibility: {
          point: {
            valueSuffix: "%",
          },
        },
        tooltip: {
          pointFormat: "",
          //   pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: "pointer",
            depth: 35,
            dataLabels: {
              enabled: true,
              format: "{point.name}",
              style: { fontSize: chartFontSize, color: "white" },
            },
          },
        },
        series: [
          {
            type: "pie",
            name: "Share",
            data: [
              {
                name: "16% Private sale",
                y: 16,
                sliced: true,
                // selected: true,
                color: "#EB5757",
                // connectorColor: "#ffffff",
              },
              {
                name: "16% Lucis team",
                y: 16,
                sliced: true,
                color: "#5780EB",
              },
              {
                name: "16% Advisor",
                y: 16,
                sliced: true,
                color: "#434348",
              },
              {
                name: "16% Ecosystem development",
                y: 16,
                sliced: true,
                color: "#22D3FD",
              },
              {
                name: "16% Game reward/ play to earn",
                y: 16,
                sliced: true,
                color: "#562CA2",
              },
              {
                name: "20% Liquidity/ staking reward",
                y: 20,
                sliced: true,
                color: "#0D1841",
              },
            ],
          },
        ],
      };

      Highcharts.chart("container", options);
    }, 200);
  });

  //@ts-ignore
  return (
    <div className={style.highchartsFigure}>
      <img
        src="/assets/token_allocation/img_token_allocation.png"
        style={{ maxWidth: imgWidth }}
      />
      <div id="container" style={{ maxWidth: chartWidth }}></div>
    </div>
  );
}
