import { useState } from 'react';

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

export default TabLayout;
