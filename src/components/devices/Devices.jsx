import DeviceCard from './DeviceCard';
import '../css/devices.css';
import { useGetData } from '../../hooks';
import { Loading } from '../utils';

const Devices = () => {
  const { data: devices, isLoading } = useGetData('/');

  return (
    <>
      <h2>Devices</h2>
      <div className="devices">
        {isLoading && <Loading text={'Loading...'} iconSize={30} />}
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
