import { useGetData } from '../../hooks';
import { Loading } from '../utils';

const RoutingTable = () => {
  const { data: routingTable, isLoading } = useGetData('/routing_table');

  return (
    <>
      <h1>Routing Table</h1>
      {isLoading && <Loading text={'Loading...'} iconSize={30} />}
      {isLoading || !routingTable?.length ? (
        <div>No routing table data</div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Destination</th>
              <th>Gateway</th>
              <th>Interface</th>
              <th>Metric</th>
              <th>Protocol</th>
            </tr>
          </thead>
          <tbody>
            {routingTable?.map((entry, index) => (
              <tr key={index}>
                <td>{entry.destination}</td>
                <td>{entry.gateway}</td>
                <td>{entry.interface}</td>
                <td>{entry.metric}</td>
                <td>{entry.protocol}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default RoutingTable;
