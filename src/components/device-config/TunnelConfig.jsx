import { useRef } from 'react';
import { usePostData } from '../../hooks';
import { useState } from 'react';
import Loading from '../utils/Loading';

const InterfaceConfigSetting = () => {
  const { isLoading, postData, error } = usePostData();
  const [success, setSuccess] = useState(null);

  const sa_in = useRef();
  const sa_out = useRef();
  const spi_in = useRef();
  const spi_out = useRef();
  const vx_loop_id = useRef();
  const vxlan_src_ip = useRef();
  const vxlan_dst_ip = useRef();
  const lan_address = useRef();

  return (
    <div style={{ margin: '2rem' }}>
      <h1>Tunnel Configuration</h1>
      {error && <div className="error">Something went wrong...</div>}
      {isLoading && <Loading text={'Save...'} iconSize={20} />}
      {success && (
        <div>
          {JSON.stringify(success)} <br /> <br />
        </div>
      )}
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const jsonBody = {
            sa_in: +sa_in.current.value,
            sa_out: +sa_out.current.value,
            spi_in: +spi_in.current.value,
            spi_out: +spi_out.current.value,
            vx_loop_id: +vx_loop_id.current.value,
            vxlan_src_ip: vxlan_src_ip.current.value,
            vxlan_dst_ip: vxlan_dst_ip.current.value,
            lan_address: lan_address.current.value,
          };
          const res = await postData('/tunnel_data', jsonBody);
          setSuccess(res);
        }}
      >
        <div className="inputs">
          <div className="input-wrapper">
            <label htmlFor="sa_in">sa_in: </label> <br />
            <input
              id="sa_in"
              type="text"
              className="input"
              ref={sa_in}
              placeholder="sa_in: 150"
              disabled={isLoading}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="sa_out">sa_out: </label> <br />
            <input
              id="sa_out"
              type="text"
              className="input"
              ref={sa_out}
              disabled={isLoading}
              placeholder="sa_out: 151"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="spi_in">spi_in: </label> <br />
            <input
              id="spi_in"
              type="text"
              className="input"
              ref={spi_in}
              disabled={isLoading}
              placeholder="spi_in: 2345"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="spi_out">spi_out: </label> <br />
            <input
              id="spi_out"
              type="text"
              className="input"
              ref={spi_out}
              disabled={isLoading}
              placeholder="spi_out: 1235"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="vx_loop_id">vx_loop_id: </label> <br />
            <input
              id="vx_loop_id"
              type="text"
              className="input"
              ref={vx_loop_id}
              disabled={isLoading}
              placeholder="vx_loop_id: 300"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="vxlan_src_ip">vxlan_src_ip: </label> <br />
            <input
              id="vxlan_src_ip"
              type="text"
              className="input"
              ref={vxlan_src_ip}
              value={'185.69.211.251'}
              onChange={() => {}}
              disabled={isLoading}
              placeholder="vxlan_src_ip: 185.69.211.251"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="vxlan_dst_ip">vxlan_dst_ip: </label> <br />
            <input
              id="vxlan_dst_ip"
              type="text"
              className="input"
              ref={vxlan_dst_ip}
              defaultValue={'59.90.30.7'}
              disabled={isLoading}
              placeholder="vxlan_dst_ip: 59.90.30.7"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="lan_address">lan_address:</label>
            <br />
            <input
              id="lan_address"
              type="text"
              className="input"
              ref={lan_address}
              defaultValue={'192.168.9.3/24'}
              disabled={isLoading}
              placeholder="lan_address: 192.168.9.3/24"
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

export default InterfaceConfigSetting;
