import React, { useLayoutEffect } from "react";
import Highcharts, { Chart } from "highcharts";
import style from "./chart.module.css";
import highcharts3d from "highcharts/highcharts-3d";
import { Options } from "highcharts";
import { useWindowSize } from "hooks/useWindowSize";

export default function PieChart() {
  const size = useWindowSize();

  const windowWidth = size[0];
  let normalWidth = (windowWidth - 120) / 2;
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
            shadow: true,
            dataLabels: {
              enabled: true,
              format: "{point.name}",
              style: { fontSize: chartFontSize, color: "white" },
            },
            point: {
              events: {
                mouseOver: function () {
                  this.select(true);
                },
                mouseOut: function () {
                  this.select(false);
                },
              },
            },
          },
          series: {
            states: {
              hover: {
                opacity: 1,
                brightness: 0,
              },
              inactive: {
                opacity: 1,
                animation: {},
              },
              select: {},
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
                sliced: false,
                color: "#EB5757",
                selected: false,
                // connectorColor: "#ffffff",
              },
              {
                name: "16% Lucis team",
                y: 16,
                sliced: false,
                color: "#5780EB",
                selected: false,
              },
              {
                name: "16% Advisor",
                y: 16,
                sliced: false,
                color: "#434348",
                selected: false,
              },
              {
                name: "16% Ecosystem development",
                y: 16,
                sliced: false,
                color: "#22D3FD",
                selected: false,
              },
              {
                name: "16% Game reward/ play to earn",
                y: 16,
                sliced: false,
                color: "#562CA2",
                selected: false,
              },
              {
                name: "20% Liquidity/ staking reward",
                y: 20,
                sliced: false,
                color: "#0D1841",
                selected: false,
              },
            ],
          },
        ],
      };

      Highcharts.chart("container", options);
    }, 200);
  });
  function findCenter() {
    // var plot = this.plotBox;
    // centerStyle.textContent =
    // `.highcharts-point, .highcharts-halo {
    //    transform-origin: ${plot.width/2}px ${plot.height/2}px;
    //  }`;
    // console.log(centerStyle.textContent);
  }

  //@ts-ignore
  return (
    <div className={`${style.highchartsFigure} ${style.container_chart}`}>
      <div className={style.im_token}>
        <img
          src="/assets/token_allocation/img_token_allocation.png"
          // style={{ maxWidth: imgWidth }}
        />
      </div>
      <div id="container" style={{ maxWidth: chartWidth }} ></div>
    </div>
  );
}
// style={{ maxWidth: chartWidth }}