function Tabs({ activeTab, onTabChange }) {
  const tabs = [
    { label: "Users", value: "users", code: "01" },
    { label: "Products", value: "products", code: "02" },
  ];

  return (
    <nav className="flex shrink-0 flex-row gap-0 sm:flex-col sm:gap-2">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.value;
        return (
          <button
            key={tab.value}
            onClick={() => onTabChange(tab.value)}
            className={`flex items-center gap-3 border-[1.5px] px-4 py-3 text-xs uppercase tracking-widish transition-colors ${
              isActive
                ? "border-signal bg-signal text-ink"
                : "border-ink/15 text-slate hover:border-ink/40 hover:text-ink dark:border-paper/15 dark:hover:border-paper/40 dark:hover:text-paper"
            }`}
          >
            <span className={isActive ? "text-ink/60" : "text-slate/50"}>{tab.code}</span>
            <span className="font-bold">{tab.label}</span>
            <span
              className={`ml-auto h-1.5 w-1.5 sm:ml-2 ${
                isActive ? "bg-ink" : "border-[1.5px] border-ink/20 bg-transparent dark:border-paper/20"
              }`}
            />
          </button>
        );
      })}
    </nav>
  );
}

export default Tabs;
