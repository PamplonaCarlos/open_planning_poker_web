import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Modal } from 'react-bootstrap';
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

  const backgroundColors = votes.map((_, index) => (index % 2 === 0 ? 'black' : 'red'));

  const data = {
    labels: ['0', '1', '2', '3', '5', '8', '13', '∞'], // Rótulos para cada opção
    datasets: [
      {
        data: votes,
        backgroundColor: backgroundColors,
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
        display: true,
      },
    },
    plugins: {
      datalabels: {
        color: 'black',
        anchor: 'end',
        align: 'start',
        formatter: (value: number) => value,
      },
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
  };

  return <Bar data={data} options={options} />;
};

export default function Analytic({votes, average, showAnalytic, setShowAnalytic}) {

  const quantities = votes.map((vote: { quantity: any; }) => vote.quantity);

    return (
      <>
      <Modal show={showAnalytic} size="lg">
        <Modal.Header closeButton onClick={()=>setShowAnalytic(false)}>
          <Modal.Title>Análise da Votação</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-9">
              <span>Proporção dos votos</span>
              <div style={{ width: '100%', height: '300px' }}>
                <SimpleBarChart votes={quantities} />
              </div>
            </div>
            <div className="col-3 d-flex justify-content-center align-items-center fs-4">
              Média: {average === Number.POSITIVE_INFINITY ? '∞' : average}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
    );
}