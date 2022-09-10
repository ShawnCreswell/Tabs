import react, { useState } from "react";

const Tabs = (props) => {
  const [currentTab, setCurrentTab] = useState();

  const tabs = [
    {
      tabHeader: "Tab 1",
      content: "First Tab",
    },
    {
      tabHeader: "Tab 2",
      content: "Second Tab",
    },
    {
      tabHeader: "Tab 3",
      content: "Third Tab",
    },
  ];

  const handleTabClick = (e) => {
    e.preventDefault();
    setCurrentTab(e.target.value);
  };

  return (
    <div className="container">
      <div className="card m-5">
        <div className="card-header">
          <div className="tab-btn">
            <div className="d-flex justify-content-evenly nav-tabs">
              {tabs.map((tab, index) => (
                <button
                  value={index}
                  className="btn btn-primary"
                  key={index}
                  disabled={currentTab === String(index)}
                  onClick={handleTabClick}
                >
                  {" "}
                  {tab.tabHeader}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="tabBody">
            {tabs.map((tab, index) => (
              <div key={index}>
                {currentTab === String(index) && (
                  <div>
                    <p>{tab.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tabs;
