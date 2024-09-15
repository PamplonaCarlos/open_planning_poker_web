// components/SimpleBarChart.tsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';


ChartJS.register(CategoryScale, LinearScale, BarElement);

interface SimpleBarChartProps {
  votes: number[];
}

const SimpleBarChart: React.FC<SimpleBarChartProps> = ({ votes }) => {

    votes = [10, 30]
  // Alternar entre preto e vermelho
  const backgroundColors = votes.map((_, index) => (index % 2 === 0 ? 'black' : 'red'));

  const data = {
    labels: ['Opção 1', 'Opção 2', 'Opção 3', 'Opção 4', 'Opção 5'], // Rótulos para cada opção
    datasets: [
      {
        data: votes, // Quantidade de votos
        backgroundColor: backgroundColors, // Alternar cores
        borderRadius: 4,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        display: true, // Mostrar o eixo X
      },
      y: {
        display: true, // Ocultar o eixo Y
      },
    },
    plugins: {
      datalabels: {
        color: 'black', // Cor dos valores
        anchor: 'end',
        align: 'start',
        formatter: (value: number) => value, // Exibir os valores dos votos
      },
      legend: {
        display: false, // Ocultar legenda
      },
    },
    maintainAspectRatio: false, // Responsivo
  };

  return <Bar data={data} options={options} />;
};

export default SimpleBarChart;