import React, { useLayoutEffect } from "react";
import Highcharts, { Chart } from "highcharts";
import style from "./chart.module.css";
import highcharts3d from "highcharts/highcharts-3d";
import { Options } from "highcharts";
import { useWindowSize } from "hooks/useWindowSize";

export default function PieChart() {
  // const size = useWindowSize();

  // const windowWidth = size[0];
  // let normalWidth = (windowWidth - 120) / 2;
  // let chartWidth = normalWidth; // >= 424
  // let imgWidth = normalWidth;
  // let chartFontSize = "16px";
  // let chartDepth = 35
  // if (windowWidth < 1024) {
  //   imgWidth = Math.min(windowWidth - 100, 610);
  //   chartWidth = windowWidth - 100;
  //   chartFontSize = "13px";
  // }
  // if(windowWidth < 768) {
  //   chartDepth = 15
  // }

 

  // useLayoutEffect(() => {
  //   setTimeout(() => {
  //     highcharts3d(Highcharts); // loi dong nay a???

  //     const data = [
  //       {
  //         name: "3% Lucis Seed",
  //         y: 3,
  //         sliced: false,
  //         color: "#67b7dc",
  //         selected: false,
  //         // connectorColor: "#ffffff",
  //       },
  //       {
  //         name: "9.5% Private Sales",
  //         y: 9.5,
  //         sliced: false,
  //         color: "#8067dc",
  //         selected: false,
  //       },
  //       {
  //         name: "10% Staking Rewards",
  //         y: 10,
  //         sliced: false,
  //         color: "#dc67ce",
  //         selected: false,
  //       },
  //       {
  //         name: "13.5% Ecosystem",
  //         y: 13.5,
  //         sliced: false,
  //         color: "#dc6967",
  //         selected: false,
  //       },
  //       {
  //         name: "8% Liquidity",
  //         y: 8,
  //         sliced: false,
  //         color: "#dcd267",
  //         selected: false,
  //       },
  //       {
  //         name: "34.5% Community",
  //         y: 34.5,
  //         sliced: false,
  //         color: "#e49534",
  //         selected: false,
  //       },
  //       {
  //         name: "5% Advisors",
  //         y: 5,
  //         sliced: false,
  //         color: "#7ddc67",
  //         selected: false,
  //       },
  //       {
  //         name: "1.5% Pulic Sales",
  //         y: 1.5,
  //         sliced: false,
  //         color: "#13e72d",
  //         selected: false,
  //       },
  //       {
  //         name: "15% Team",
  //         y: 15,
  //         sliced: false,
  //         color: "#e7d713",
  //         selected: false,
  //       },
  //     ];

  //     const options: Options = {
  //       chart: {
  //         backgroundColor: "transparent",
  //         // width: chartWidth,
  //         polar: true,
  //         type: "pie",
  //         options3d: {
  //           enabled: true,
  //           alpha: 45,
  //           beta: 0,
  //         },
  //       },
  //       legend: {
  //         itemStyle: {
  //            fontFamily: 'Saira',
  //            color: '#FFF'
  //         },
  //         itemHoverStyle: {
  //            color: '#FFF'
  //         },
  //         itemHiddenStyle: {
  //            color: '#444'
  //           }
  //       },
  //       title: {
  //         text: "",
  //       },
  //       accessibility: {
  //         point: {
  //           valueSuffix: "%",
  //         },
  //       },
  //       tooltip: {
  //         pointFormat: "",
  //         //   pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
  //       },
  //       plotOptions: {
  //         pie: {
  //           allowPointSelect: true,
  //           cursor: "pointer",
  //           depth: 35,
  //           shadow: true,
  //           dataLabels: {
  //             enabled: true,
  //             format: "{point.name}",
  //             style: { fontSize: "16px", color: "white" },
  //           },
  //           point: {
  //             events: {
  //               mouseOver: function () {
  //                 this.select(true);
  //               },
  //               mouseOut: function () {
  //                 this.select(false);
  //               },
  //             },
  //           },
  //         },
  //         series: {
  //           states: {
  //             hover: {
  //               opacity: 1,
  //               brightness: 0,
  //             },
  //             inactive: {
  //               opacity: 1,
  //               animation: {},
  //             },
  //             select: {},
  //           },
  //         },
  //       },
  //       series: [
  //         {
  //           type: "pie",
  //           name: "Share",
  //           data: data,
  //         },
  //       ],
  //       responsive: {
  //         rules: [{
  //           condition: {
  //             maxWidth: 500
  //           },
  //           chartOptions: {
  //             plotOptions: {
  //               pie: {
  //                 allowPointSelect: true,
  //                 cursor: 'pointer',
  //                 dataLabels: {
  //                   enabled: false,
  //                 },
  //                 showInLegend: true,
  //                 point: {
  //                   events: {
  //                     legendItemClick: function() {
  //                       return false;
  //                     }
  //                   }
  //                 }            
  //               }
  //             }
  //           },
  //         }]
  //       }
  //     };
  //     const pieChart = Highcharts.chart("chart-container", options);
  //     pieChart.reflow();
  //   }, 200);
  // });
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
    <div className={`${style.highchartsFigure}`}>
      <div className={style.im_token}>
        <img
          src="/assets/token_allocation/img_token_allocation.png"
          // style={{ maxWidth: imgWidth }}
        />
      </div>
      <div id="chart-container" style={{marginTop: '30px'}} className={style.chartContainer} >
        <img src="/assets/token_allocation/im_chart.png" alt="" />
      </div>
    </div>
  );
}
// style={{ maxWidth: chartWidth }}