import { Loading } from '../utils';
import { useDelete, useGetData } from '../../hooks';
import { AiOutlineDelete } from 'react-icons/ai';

const VxlanTunnelDetails = () => {
  const { data: tunnelDetails, isLoading } = useGetData(
    '/vxlan_tunnel_details'
  );

  const { deleteData, isLoading: isDeleting } = useDelete();

  return (
    <>
      <h2>VXLAN Tunnel Details</h2>
      {isLoading && <Loading text={'Loading...'} iconSize={30} />}
      {isLoading || tunnelDetails?.length === 0 ? (
        <div>No tunnel details</div>
      ) : (
        <table>
          <thead>
            <tr>
              {[
                'Destination Address',
                'Destination Loopback Address',
                'Encryption',
                'GRE Bridge ID',
                'Source Address',
                'Source Loopback Address',
                'Status',
                'Delete',
              ].map((item) => (
                <th key={item}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tunnelDetails?.map((detail, index) => (
              <tr key={index}>
                <td>{detail.dst_address}</td>
                <td>{detail.dst_loopback_addr}</td>
                <td>{detail.encrypt}</td>
                <td>{detail.gre_bridge_id}</td>
                <td>{detail.src_address}</td>
                <td>{detail.src_loopback_addr}</td>
                <td>{detail.status}</td>
                <td
                  aria-disabled={isDeleting}
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    if (isDeleting) return;
                    deleteData(
                      `/vxlan_delete?vxlan_src_ip=${detail.src_address}&vxlan_dst_ip=${detail.dst_address}`
                    );
                    window.location.reload();
                  }}
                >
                  <AiOutlineDelete size={20} color="crimson" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default VxlanTunnelDetails;
