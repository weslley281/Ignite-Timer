import { useContext } from 'react';
import { Header } from '../../components/Header';
import { CyclesContext } from '../../contexts/CyclesContext';
import { HistoryContainer, HistoryList, Status } from './styles';

export function History() {
  const { cycles } = useContext(CyclesContext);

  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>
                <Status statusColor="green">Concuído</Status>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Há 2 mes</td>
              <td>
                <Status statusColor="green">Concuído</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Há 2 mes</td>
              <td>
                <Status statusColor="green">Concuído</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Há 2 mes</td>
              <td>
                <Status statusColor="green">Concuído</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Há 2 mes</td>
              <td>
                <Status statusColor="green">Concuído</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Há 2 mes</td>
              <td>
                <Status statusColor="green">Concuído</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Há 2 mes</td>
              <td>
                <Status statusColor="green">Concuído</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Há 2 mes</td>
              <td>
                <Status statusColor="yellow">Em andamento</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Há 2 mes</td>
              <td>
                <Status statusColor="red">Interronpido</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
