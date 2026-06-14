function ColumnSelector({ columns, visibleColumns, toggleColumn }) {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-2 border-[1.5px] border-ink/15 px-3 py-2 dark:border-paper/15">
      {columns.map((column) => (
        <label
          key={column}
          className="flex items-center gap-1.5 text-[11px] uppercase tracking-widish text-slate"
        >
          <input
            type="checkbox"
            checked={visibleColumns.includes(column)}
            onChange={() => toggleColumn(column)}
            className="h-3.5 w-3.5 accent-signal"
          />
          {column}
        </label>
      ))}
    </div>
  );
}

export default ColumnSelector;
