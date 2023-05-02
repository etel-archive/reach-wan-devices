import { useGetData } from '../../hooks';
import { Loading } from '../utils';

const FirewallPolicy = () => {
  return (
    <div>
      <h1>Firewall Policy</h1>
      <InboundRuleStatus />
      <OutboundRuleStatus />
    </div>
  );
};

const OutboundRuleStatus = () => {
  const { data: outboundRuleStatus, isLoading } = useGetData(
    '/outbound_rule_status'
  );

  return (
    <>
      <h2>Outbound Rule Status</h2>
      {isLoading && <Loading text={'Loading...'} iconSize={30} />}
      {isLoading || !outboundRuleStatus?.length ? (
        <div>No inbound rule status data</div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Destination</th>
              <th>Interface</th>
              <th>Port</th>
              <th>Source</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {outboundRuleStatus.map((entry, index) => (
              <tr key={index}>
                <td>{entry.destination}</td>
                <td>{entry.interface}</td>
                <td>{entry.port}</td>
                <td>{entry.source}</td>
                <td>{entry.action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

const InboundRuleStatus = () => {
  const { data: inboundRuleStatus, isLoading } = useGetData(
    '/inbound_rule_status'
  );

  return (
    <>
      <h2>Inbound Rule Status</h2>
      {isLoading && <Loading text={'Loading...'} iconSize={30} />}
      {isLoading || !inboundRuleStatus?.length ? (
        <div>No inbound rule status data</div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Destination</th>
              <th>Interface</th>
              <th>Port</th>
              <th>Source</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {inboundRuleStatus.map((entry, index) => (
              <tr key={index}>
                <td>{entry.destination}</td>
                <td>{entry.interface}</td>
                <td>{entry.port}</td>
                <td>{entry.source}</td>
                <td>{entry.action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default FirewallPolicy;
