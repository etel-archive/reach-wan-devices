import { AiOutlineDelete } from 'react-icons/ai';
import {
  BsFillCaretDownSquareFill,
  BsFillCaretUpSquareFill,
} from 'react-icons/bs';
import { useDelete, useGetData, usePostData } from '../../hooks';
import { Loading } from '../utils';
import { useState } from 'react';

const FirewallPolicy = () => {
  return (
    <div>
      <h1>Firewall Policy</h1>
      <OutboundRuleStatus />
      <InboundRuleStatus />
    </div>
  );
};

const OutboundRuleStatus = () => {
  const { data: outboundRuleStatus, isLoading } = useGetData(
    '/outbound_rule_status'
  );
  const [disableUpDown, setDisableUpDown] = useState(false);

  const { deleteData, isLoading: isDeleting } = useDelete();

  const { postData } = usePostData();

  return (
    <>
      <h2>Outbound Rule Status</h2>
      {isLoading && <Loading text={'Loading...'} iconSize={30} />}
      {isLoading || !outboundRuleStatus?.length ? (
        <div>No outbound rule status data</div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Destination</th>
              <th>Interface</th>
              <th>Port</th>
              <th>Rule No</th>
              <th>Source</th>
              <th>Action</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {outboundRuleStatus.map((entry) => (
              <tr key={entry.rule_number}>
                <td>{entry.destination}</td>
                <td>{entry.interface}</td>
                <td>{entry.port}</td>
                <td style={{ display: 'flex', justifyContent: 'space-around' }}>
                  <span>{entry.rule_number}</span>
                  <span style={{ display: 'flex', gap: '0 10px' }}>
                    <BsFillCaretUpSquareFill
                      size={15}
                      cursor={disableUpDown ? 'not-allowed' : 'pointer'}
                      aria-disabled={disableUpDown}
                      onClick={async () => {
                        setDisableUpDown(true);
                        await postData(
                          '/outbound_rule_up',
                          JSON.stringify(entry)
                        );
                        window.location.reload();
                      }}
                    />
                    <BsFillCaretDownSquareFill
                      size={15}
                      cursor={disableUpDown ? 'not-allowed' : 'pointer'}
                      aria-disabled={disableUpDown}
                      onClick={async () => {
                        setDisableUpDown(true);
                        await postData(
                          '/outbound_rule_down',
                          JSON.stringify(entry)
                        );
                        window.location.reload();
                      }}
                    />
                  </span>
                </td>
                <td>{entry.source}</td>
                <td>
                  {entry.action.toLowerCase() === 'deny' ? (
                    <>🚫 DENY</>
                  ) : (
                    '✅ ' + entry.action
                  )}
                </td>
                <td
                  onClick={() =>
                    deleteData('/ufw_delete?rule_number=' + entry.rule_number)
                  }
                  aria-disabled={isDeleting}
                >
                  <AiOutlineDelete
                    size={15}
                    color="crimson"
                    style={{ cursor: 'pointer' }}
                  />
                </td>
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
  const [disableUpDown, setDisableUpDown] = useState(false);

  const { deleteData, isLoading: isDeleting } = useDelete();

  const { postData } = usePostData();

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
              <th>Rule No</th>
              <th>Source</th>
              <th>Action</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {inboundRuleStatus.map((entry, index) => (
              <tr key={index}>
                <td>{entry.destination}</td>
                <td>{entry.interface}</td>
                <td>{entry.port}</td>
                <td style={{ display: 'flex', justifyContent: 'space-around' }}>
                  <span>{entry.rule_number}</span>
                  <span style={{ display: 'flex', gap: '0 10px' }}>
                    <BsFillCaretUpSquareFill
                      size={15}
                      cursor={disableUpDown ? 'not-allowed' : 'pointer'}
                      aria-disabled={disableUpDown}
                      onClick={async () => {
                        setDisableUpDown(true);
                        await postData(
                          '/inbound_rule_up',
                          JSON.stringify(entry)
                        );
                        window.location.reload();
                      }}
                    />
                    <BsFillCaretDownSquareFill
                      size={15}
                      cursor={disableUpDown ? 'not-allowed' : 'pointer'}
                      aria-disabled={disableUpDown}
                      onClick={async () => {
                        setDisableUpDown(true);
                        await postData(
                          '/inbound_rule_down',
                          JSON.stringify(entry)
                        );
                        window.location.reload();
                      }}
                    />
                  </span>
                </td>
                <td>{entry.source}</td>
                <td>
                  {entry.action.toLowerCase() === 'deny' ? (
                    <>🚫 DENY</>
                  ) : (
                    '✅ ' + entry.action
                  )}
                </td>
                <td
                  onClick={() =>
                    deleteData('/ufw_delete?rule_number=' + entry.rule_number)
                  }
                  aria-disabled={isDeleting}
                >
                  <AiOutlineDelete
                    size={15}
                    color="crimson"
                    style={{ cursor: 'pointer' }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default FirewallPolicy;
