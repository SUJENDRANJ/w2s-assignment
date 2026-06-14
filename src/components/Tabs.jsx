function Tabs({ activeTab, onTabChange }) {
  const tabs = [
    {
      label: "Users",
      value: "users",
    },
    {
      label: "Products",
      value: "products",
    },
  ];

  return (
    <div className="mb-6 flex gap-2 border-b">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onTabChange(tab.value)}
          className={`px-4 py-2 font-medium transition
            ${
              activeTab === tab.value
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-500"
            }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default Tabs;
