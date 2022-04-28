import React from "react"
import {useEffect, useState} from "react";
import {Bar} from 'react-chartjs-2';

import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
} from 'chart.js';

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);

export const options = {
   responsive: true,
   plugins: {
       legend: {
           position: 'right',
           textAlign: 'center'
       },
       title:{
            display: true,
            text: "Queue to entrances",
            color: '#2a7aeb',
            font: {
                size:20,
                family:'Arial'
            },
            padding: {
                bottom: 50
            }
       }
   },
};

export function BarChart() {

    const [chartBar, chartBarSet] = useState(null);

    useEffect(()=>{

    const ent = async () => {
        let data = {
            labels: [],
            datasets: [
                {
                    label: 'Place',
                    data: [],
                    backgroundColor: '#2a7aeb'
                }
            ]
        }

        const res = await fetch("http://localhost:3001/api/entrance")
        const dataRes = await res.json();

        data.datasets[0].data = dataRes.map(item => {
            return item.isQueue;
        })

        data.labels = dataRes.map(item => {
            return item.place;
        })

        chartBarSet(data);
    }
    ent()
    },[]);

    if(!chartBar) {
        return null;
    }


    return <Bar options={options} data={chartBar}/>;
}