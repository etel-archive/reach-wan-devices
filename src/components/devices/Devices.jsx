import DeviceCard from './DeviceCard';
import '../css/devices.css';
import { useGetData } from '../../hooks';

import { MoonLoader } from 'react-spinners';

const Devices = () => {
  const { data: devices, isLoading } = useGetData('/');

  return (
    <>
      <h2>Devices</h2>
      <div className="devices">
        {isLoading && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <MoonLoader size={30} />
            <h3>Loading...</h3>
          </div>
        )}
        {!isLoading && devices?.length === 0 ? (
          <div>No devices</div>
        ) : (
          devices?.map((device) => (
            <DeviceCard key={device?.machine_id} device={device} />
          ))
        )}
      </div>
    </>
  );
};

export default Devices;
