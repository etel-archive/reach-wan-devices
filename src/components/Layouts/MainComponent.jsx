import { useState } from 'react';
import {
  AddQosPolicy,
  AppStatus,
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
        <AppStatus tabTitle="App Status" />
      </TabLayout>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const TabLayout = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tab-layout">
      <div className="tab-buttons">
        {/* eslint-disable-next-line react/prop-types */}
        {children.map((child, index) => (
          <button
            key={index}
            className={`tab-button ${index === activeTab ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {child.props.tabTitle}
          </button>
        ))}
      </div>
      <hr />
      <div className="tab-content">{children[activeTab]}</div>
    </div>
  );
};

export default MainComponent;
