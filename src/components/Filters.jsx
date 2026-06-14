function Filter({ value, options, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border-[1.5px] border-ink/20 bg-transparent px-3 py-2 text-xs uppercase tracking-widish text-ink focus:border-signal focus:outline-none dark:border-paper/20 dark:text-paper sm:max-w-xs"
    >
      {options.map((option) => (
        <option key={option} value={option} className="bg-paper text-ink dark:bg-ink dark:text-paper">
          {option}
        </option>
      ))}
    </select>
  );
}

export default Filter;
