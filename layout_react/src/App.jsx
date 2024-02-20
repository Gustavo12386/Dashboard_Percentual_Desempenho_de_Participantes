import React, { useState, useEffect } from 'react';
import api from "./services/api";
import {Doughnut} from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js/auto';
import './App.css';

ChartJS.register(ArcElement, Tooltip, Legend);

function getRandomColor() {
  // Função para gerar cores aleatórias em formato hexadecimal
  return '#' + Math.floor(Math.random()*16777215).toString(16);
}

function App() {
  const [participantes, setParticipantes] = useState(null); 

  useEffect(() => {
    api
      .get('/')
      .then((response) => {
        console.log(response.data);
        setParticipantes(response.data); // Atualize o estado usando um novo array
      })
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err);
      });
  }, []);
  
  const data = {
    labels: participantes ? participantes.map(participante => `${participante.first_name} ${participante.last_name}`) : [],
    datasets: [{
      data: participantes ? participantes.map(participante => parseFloat(participante.participation)) : [], // Convertendo para float
      backgroundColor: participantes ? participantes.map(() => getRandomColor()) : []
    }]
  };

  const options = {    
    aspectRatio: 1
  };

 

  return (
    <>
      <h1>Dashboard percentual de desempenho dos Participantes</h1>
      <div className='App'>
        <p>Dashboard que mostra o percentual de cada participante na distribuição</p>
      </div>
      <div className='container'>
        {Array.isArray(participantes) && participantes.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th></th>
                <th className="conteudo">First Name</th>
                <th className="conteudo">Last Name</th>
                <th className="conteudo">Participation</th>
              </tr>
            </thead>
            <tbody>
              {participantes.map((participante) => (
                <tr key={participante._id}>
                  <td>{participante._id}</td>
                  <td className="conteudo">{participante.first_name}</td>
                  <td className="conteudo">{participante.last_name}</td>
                  <td className="conteudo">{participante.participation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Loading...</p>
        )}
        <div className='chart'>
          <Doughnut data={data} options={options}></Doughnut>
        </div>
      </div>
    </>
  )
}

export default App;