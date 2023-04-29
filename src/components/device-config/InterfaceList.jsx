import { useRef } from 'react';
import { 
  useGetData, 
  // usePostData 
} from '../../hooks';
import '../css/interface.css';
import { MoonLoader } from 'react-spinners';

const InterfaceList = () => {
  const { data: deviceInterfaces, isLoading } = useGetData('/interfaces');

  return (
    <>
      <h2>Device configuration</h2>
      {isLoading && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <MoonLoader size={30} />
          <h3>Loading...</h3>
        </div>
      )}
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
  // const { isLoading, postData } = usePostData();

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(intRef.current.value);
          // postData()
        }}
      >
        <input type="text" ref={intRef} /> &nbsp;
        <input type="submit" value={'Save Interface'} />
      </form>
    </>
  );
};

export default InterfaceList;
