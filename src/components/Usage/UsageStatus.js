import React from "react";
import { Bar } from "react-chartjs-2";
import { UsageData } from "./Usagedata";
import { useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";

import {
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {

  type: 'bar',
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  tooltips: {
    mode: 'index',
    intersect: true,
  },
  stacked: false,
  scales: {
    x:{
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
      display: false,
      position: 'right',
      ticks: {
        stepSize: 10
      },
      beginAtZero: true,
    },
  },
  hover: {
    mode: 'index',
    intersect: false,
  },
  plugins: {
    legend:{
      
        display: false
    },
    tooltip: {
        responsive: "true",
        backgroundColor: "#1E1E1E",
        yAlign: "bottom",
        callbacks: {
          labelPointStyle: function(context) {
              return {
                  pointStyle: 'circle',
                  rotation: 0,
              };
          },
          title: function(context) {
              let title = "Usage Status";
              return title;
          },
      },

    },
  }
  

};



function UsageStatus() {

    const [userData, setUserData] = useState({
        labels: UsageData.map((data) => data.time),
        datasets: [
          {
            label: "Consumed",
            data: UsageData.map((data) => data.usage),
            backgroundColor: [
              "#252525",
            ],
            hoverBackgroundColor: ["#FFC000"],
            barPercentage: 0.2,
            borderRadius: 5,
            barThickness: 40,      
          },
        ],
      });

      return <Bar options={options} data={userData} />;

}

export default UsageStatus;