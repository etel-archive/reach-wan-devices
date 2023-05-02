import { useRef } from 'react';
import { usePostData } from '../../hooks';
import { useState } from 'react';
import { Error, Loading, Success } from '../utils';

const NattingForm = () => {
  const { isLoading, postData, error } = usePostData();
  const [success, setSuccess] = useState(null);

  const lan_subnetRef = useRef();
  const interfaceRef = useRef();

  return (
    <div style={{ margin: '2rem' }}>
      <h1>Natting Configuration</h1>
      {isLoading && <Loading text={'Saving...'} iconSize={20} />}
      {error && <Error />}
      {success && <Success success={success} />}
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const jsonBody = {
            lan_subnet: lan_subnetRef.current.value,
            interface: interfaceRef.current.value,
          };
          const res = await postData('/natting', jsonBody);
          setSuccess(res);
        }}
      >
        <div className="inputs">
          <div className="input-wrapper">
            <label htmlFor="lan_subnet">LAN Subnet: </label> <br />
            <input
              id="lan_subnet"
              type="text"
              className="input"
              ref={lan_subnetRef}
              placeholder="LAN Subnet"
              disabled={isLoading}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="interface">Interface: </label> <br />
            <input
              id="interface"
              type="text"
              className="input"
              ref={interfaceRef}
              disabled={isLoading}
              placeholder="Interface"
            />
          </div>
        </div>
        <div className="submit-wrapper">
          <input
            type="submit"
            style={{ float: 'right', margin: '2rem' }}
            value="Save Config"
            disabled={isLoading}
          />
        </div>
      </form>
    </div>
  );
};

export default NattingForm;
