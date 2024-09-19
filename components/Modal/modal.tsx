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

    // votes = [3, 2, 3, 2, 3, 2, 3, 1, 999]
  // Alternar entre preto e vermelho
  const backgroundColors = votes.map((_, index) => (index % 2 === 0 ? 'black' : 'red'));

  const data = {
    labels: ['0', '1', '2', '3', '5', '8', '13', '∞'], // Rótulos para cada opção
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


export default function Modal({votes, average}) {

  const quantities = votes.map(vote => vote.quantity);

    return (
        <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Análise da votação</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body row">
                      <div className="col-9">
                        <span>Proporção dos votos</span>
                      <div style={{ width: '100%', height: '300px' }}> 
                            <SimpleBarChart votes={quantities} />
                        </div>
                      </div>
                      <div className="col-3 row d-flex justify-content-center align-items-center fs-4">
                       Média {average>= 999 ? "∞": average}
                      </div>
                        
                    </div>
                    {/* <div className="modal-footer">
                        <button type="button" className="btn btn-secondary bg-danger" data-bs-dismiss="modal">Close</button>
                    </div> */}
                </div>
            </div>
        </div>
    );
}


