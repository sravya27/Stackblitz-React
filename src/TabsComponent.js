import React, { useState } from 'react';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="tab-buttons">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={index === activeTab ? 'active' : ''}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

const TabsComponent = () => {
  const tabs = [
    { label: 'Tab 1', content: <div>Content of Tab 1</div> },
    { label: 'Tab 2', content: <div>Content of Tab 2</div> },
    { label: 'Tab 3', content: <div>Content of Tab 3</div> },
  ];

  return <Tabs tabs={tabs} />;
};

export default TabsComponent;