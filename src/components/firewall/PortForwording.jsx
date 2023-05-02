import { useRef } from 'react';
import { usePostData } from '../../hooks';
import { useState } from 'react';
import { Error, Loading, Success } from '../utils';

const PortForwardingForm = () => {
  const { isLoading, postData, error } = usePostData();
  const [success, setSuccess] = useState(null);

  const protocol = useRef();
  const dstport = useRef();
  const srcport = useRef();
  const source = useRef();

  return (
    <div style={{ margin: '2rem' }}>
      <h1>Port Forwarding Configuration</h1>
      <hr /> <br />
      {isLoading && <Loading text={'Saving...'} iconSize={20} />}
      {error && <Error />}
      {success && <Success success={success} />}
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const jsonBody = {
            protocol: protocol.current.value,
            dstport: dstport.current.value,
            srcport: srcport.current.value,
            source: source.current.value,
          };
          const res = await postData('/port_forwarding', jsonBody);
          setSuccess(res);
        }}
      >
        <div className="inputs">
          <div className="input-wrapper">
            <label htmlFor="protocol">Protocol: </label> <br />
            <input
              id="protocol"
              type="text"
              className="input"
              ref={protocol}
              placeholder="Protocol"
              disabled={isLoading}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="dstport">Destination Port: </label> <br />
            <input
              id="dstport"
              type="text"
              className="input"
              ref={dstport}
              disabled={isLoading}
              placeholder="Destination Port"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="srcport">Source Port: </label> <br />
            <input
              id="srcport"
              type="text"
              className="input"
              ref={srcport}
              disabled={isLoading}
              placeholder="Source Port"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="source">Source: </label> <br />
            <input
              id="source"
              type="text"
              className="input"
              ref={source}
              disabled={isLoading}
              placeholder="Source"
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

export default PortForwardingForm;
