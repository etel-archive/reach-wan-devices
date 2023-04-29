import PropTypes from 'prop-types';
import { AiFillPlayCircle, AiFillDelete } from 'react-icons/ai';
import { RiRefreshFill, RiStopCircleFill } from 'react-icons/ri';

const DeviceCard = ({ device }) => {
  return (
    <div className="card">
      <h3>{device?.host_name}</h3>
      <hr />
      <div className="device-details-wrapper">
        <div>
          <div className="conn-info">
            <span className={device?.approved ? 'success' : 'danger'}>
              {device?.approved ? 'Approved' : 'Not Approved'}
            </span>
            <span className={device?.status ? 'success' : 'danger'}>
              {device?.status ? 'Connected' : 'Not Connected'}
            </span>
          </div>
          <div>
            <p>
              <strong>Hostname:</strong> {device?.host_name}
            </p>
            <p>
              <strong>WAN IPs:</strong> {device?.wan_ip}
            </p>
            <p>
              <strong>ID:</strong> {device?.machine_id}
            </p>
          </div>
        </div>
        <div className="device-actions">
          <AiFillPlayCircle size={25} color="#adadad" />
          <RiStopCircleFill size={25} color="#adadad" />
          <RiRefreshFill size={25} color="green" />
          {/* <AiFillDelete size={25} color="crimson" /> */}
        </div>
      </div>
    </div>
  );
};

DeviceCard.propTypes = {
  device: PropTypes.object.isRequired,
};

export default DeviceCard;
