function Filter({ value, options, onChange, label }) {
  return (
    <div className="mb-4">
      <label className="mr-2 font-medium">{label}</label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded border p-2"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
