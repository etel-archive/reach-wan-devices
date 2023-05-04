import { useState } from 'react';
import { usePostData } from '../../hooks';
import { Loading, Success } from '../utils';
import { useRef } from 'react';

const QoSPolicyAdd = () => {
  const { isLoading, postData, error } = usePostData();
  const [success, setSuccess] = useState(null);

  const policy_name = useRef();
  const dscp = useRef();
  const queue_id = useRef();
  const int_index = useRef();
  const match = useRef();

  return (
    <div style={{ margin: '2rem' }}>
      <h1>QoS Policy Add</h1>
      {error && <div className="error">Something went wrong...</div>}
      {isLoading && <Loading text={'Save...'} iconSize={20} />}
      {success && <Success />}
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const jsonBody = {
            policy_name: policy_name.current.value,
            dscp: +dscp.current.value,
            queue_id: +queue_id.current.value,
            int_index: +int_index.current.value,
            match: match.current.value,
          };
          const res = await postData('/qos_policy_add', jsonBody);
          setSuccess(res);
        }}
      >
        <div className="inputs">
          <div className="input-wrapper">
            <label htmlFor="policy_name">Policy Name: </label> <br />
            <input
              ref={policy_name}
              id="policy_name"
              type="text"
              className="input"
              defaultValue="policy10"
              disabled={isLoading}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="dscp">DSCP: </label> <br />
            <input
              ref={dscp}
              id="dscp"
              type="number"
              className="input"
              defaultValue="10"
              disabled={isLoading}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="queue_id">Queue ID: </label> <br />
            <input
              ref={queue_id}
              id="queue_id"
              type="number"
              className="input"
              defaultValue="2"
              disabled={isLoading}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="int_index">Interface Index: </label> <br />
            <input
              ref={int_index}
              id="int_index"
              type="number"
              className="input"
              defaultValue="1"
              disabled={isLoading}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="match">Match: </label> <br />
            <input
              ref={match}
              id="match"
              type="text"
              className="input"
              defaultValue="ip4 src 10.0.0.3/32"
              disabled={isLoading}
            />
          </div>
          <div className="submit-wrapper">
            <input
              type="submit"
              style={{ float: 'right', margin: '2rem' }}
              value="Save Config"
              disabled={isLoading}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default QoSPolicyAdd;
