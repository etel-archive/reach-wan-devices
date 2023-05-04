import {
  AddQosPolicy,
  FirewallPolicy,
  InBoundRule,
  InterfaceList,
  Natting,
  OutBoundRule,
  PortForwording,
  RoutingTable,
  TunnelConfig,
  VppQosInterface,
  VxlanTunnelDetails,
} from '../../components';
import TabLayout from './Layout';

const MainComponent = () => {
  return (
    <div>
      <TabLayout>
        <FirewallPolicy tabTitle="Firewall Policy" />
        <RoutingTable tabTitle="Routing Table" />
        <InterfaceList tabTitle="Interfaces" />
        <TunnelConfig tabTitle="Tunnel Config" />
        <OutBoundRule tabTitle="Set OutboundRule" />
        <InBoundRule tabTitle="Set InboundRule" />
        <PortForwording tabTitle="PortForwording" />
        <Natting tabTitle="Natting" />
        <VxlanTunnelDetails tabTitle="VxLAN Tunnel Details" />
        <VppQosInterface tabTitle="Vpp QoS Interface" />
        <AddQosPolicy tabTitle="Add QoS Policy" />
      </TabLayout>
    </div>
  );
};

export default MainComponent;
