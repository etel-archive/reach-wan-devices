import { useRef, useState } from 'react';
import { usePostData } from '../../hooks';
import { Error, Loading, Success } from '../utils';

const InboundRuleForm = () => {
  const { isLoading, postData, error } = usePostData();
  const [success, setSuccess] = useState(null);

  const actionRef = useRef();
  const protocolRef = useRef();
  const ipAddressRef = useRef();
  const sourceRef = useRef();
  const portsRef = useRef();
  const interfaceRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const jsonBody = {
      action: actionRef.current.value,
      protocol: protocolRef.current.value,
      ipaddress: ipAddressRef.current.value,
      source: sourceRef.current.value,
      port: portsRef.current.value,
      interface: interfaceRef.current.value,
    };
    const res = await postData('/inbound_rule', jsonBody);
    setSuccess(res);
  };

  return (
    <div style={{ margin: '2rem' }}>
      <h1>Inbound Rule</h1>
      <hr /> <br />
      {isLoading && <Loading text={'Saving...'} iconSize={20} />}
      {error && <Error />}
      {success && <Success success={success} />}
      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <div className="input-wrapper">
            <label htmlFor="action">Action: </label> <br />
            <input
              id="action"
              type="text"
              className="input"
              ref={actionRef}
              placeholder="Action"
              disabled={isLoading}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="protocol">Protocol: </label> <br />
            <input
              id="protocol"
              type="text"
              className="input"
              ref={protocolRef}
              placeholder="Protocol"
              disabled={isLoading}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="ipAddress">IP Address: </label> <br />
            <input
              id="ipAddress"
              type="text"
              className="input"
              ref={ipAddressRef}
              placeholder="IP Address"
              disabled={isLoading}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="source">Source: </label> <br />
            <input
              id="source"
              type="text"
              className="input"
              ref={sourceRef}
              placeholder="Source"
              disabled={isLoading}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="ports">Ports: </label> <br />
            <input
              id="ports"
              type="text"
              className="input"
              ref={portsRef}
              placeholder="Ports"
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
              placeholder="Interface"
              disabled={isLoading}
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

export default InboundRuleForm;
