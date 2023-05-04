import { useRef } from 'react';
import { useGetData, usePostData } from '../../hooks';
import '../css/interface.css';
import { Loading } from '../utils';

const VppQosInterfaceList = () => {
  const { data: deviceInterfaces, isLoading } = useGetData('/interfaces');

  return (
    <>
      <h2>Device configuration</h2>
      {isLoading && <Loading text={'Loading...'} iconSize={30} />}
      {isLoading || deviceInterfaces?.length === 0 ? (
        <div>No devices</div>
      ) : (
        <table>
          <thead>
            <tr>
              {[
                'Name',
                'Type',
                'Gateway',
                'IPV4',
                'MAC',
                'MTU',
                'Public Ip',
                'Static/DHCP',
              ].map((item) => (
                <th key={item}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {deviceInterfaces?.map((device) => (
              <tr key={device.mac_addr}>
                <td>{device.interface_name}</td>
                <td>{device.int_type}</td>
                <td>{device.gateway}</td>
                <td>{device.ipv4_address}</td>
                <td>{device.mac_addr}</td>
                <td>{device.mtu}</td>
                <td>{device.public_ip}</td>
                <td>{device['static/dhcp']}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <hr />
      <div className="add-interface">
        <AddInterface />
      </div>
    </>
  );
};

const AddInterface = () => {
  const intRef = useRef();
  const { isLoading, postData, error } = usePostData();

  return (
    <>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const interface_name = intRef.current.value;
          const res = await postData('/interface_name', { interface_name });
          console.log(res);
        }}
      >
        {error && <div className="error">Something went wrong...</div>}
        <input type="text" ref={intRef} required disabled={isLoading} /> &nbsp;
        <input type="submit" value={'Save Interface'} disabled={isLoading} />
      </form>
    </>
  );
};

export default VppQosInterfaceList;
