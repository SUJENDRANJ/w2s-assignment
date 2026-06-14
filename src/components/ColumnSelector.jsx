function ColumnSelector({ columns, visibleColumns, toggleColumn }) {
  return (
    <div className="mb-4 flex flex-wrap gap-3">
      {columns.map((column) => (
        <label key={column} className="flex items-center gap-1">
          <input
            type="checkbox"
            checked={visibleColumns.includes(column)}
            onChange={() => toggleColumn(column)}
          />

          {column}
        </label>
      ))}
    </div>
  );
}

export default ColumnSelector;
