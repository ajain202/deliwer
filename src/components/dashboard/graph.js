import Chart from "chart.js/auto";
import React, { useEffect } from "react";

function Graph() {
  useEffect(() => {
    let yLabels = {
      0: "$0",
      6: "$6K",
      10: "$10K",
      14: "$15K",
      20: "$20K",
      40: "$40K",
    };
    let line_chart = new Chart(document.getElementById("line_chart"), {
      type: "line",
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            data: [6, 8, 20, 18, 10, 40, 60, 16, 19, 16, 14, 10],
            borderColor: "#F0ABFC",
            fill: false,
            label: "Expenditure",
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
          display: false,
        },
        scales: {
          yAxes: [
            {
              gridLines: {
                display: false,
              },
              ticks: {
                beginAtZero: true,
                stepSize: 5,
                callback: function (value, index, values) {
                  return yLabels[value];
                },
              },
            },
          ],
        },
      },
    });
  });
  return (
    <>
      <div className="card mt-5 w-full bg-white p-4 rounded-lg shadow">
        <div className="lg:flex justify-between w-full items-center">
          <div className="py-3 md:px-4 flex items-center bg-gray-50 rounded-xl">
            <p className="text-xs font-medium leading-none text-center">
              Show:
            </p>
            <div className="px-2 sm:px-3.5 border-r border-gray-300">
              <p className="text-xs leading-none">Month</p>
            </div>
            <div className="px-2 sm:px-3.5">
              <p className="text-xs font-bold leading-none text-indigo-700">
                Year
              </p>
            </div>
          </div>
          <div className="flex items-center mt-4 lg:mt-0">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-pink-300 rounded-full" />
              <p className="w-20 text-xs leading-none ml-1.5">Expenditure</p>
            </div>
          </div>
        </div>
        <div className="mt-8 h-80">
          <div className="chartjs-size-monitor">
            <div className="chartjs-size-monitor-expand">
              <div className />
            </div>
            <div className="chartjs-size-monitor-shrink">
              <div className />
            </div>
          </div>
          <canvas
            id="line_chart"
            style={{ display: "block" }}
            className="chartjs-render-monitor"
          />
        </div>
      </div>
    </>
  );
}

export default Graph;
