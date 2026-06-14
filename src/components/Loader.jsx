function Loader() {
  return (
    <div className="border-[1.5px] border-ink/15 dark:border-paper/15">
      <table className="w-full table-fixed border-collapse">
        <thead>
          <tr className="border-b-[1.5px] border-ink/15 bg-ink/[0.03] dark:border-paper/15 dark:bg-paper/5">
            <th className="w-12 px-3 py-2.5 text-left text-[10px] uppercase tracking-widish text-slate">
              No.
            </th>
            {[...Array(6)].map((_, index) => (
              <th key={index} className="px-4 py-2.5">
                <div className="h-2.5 w-20 animate-pulse bg-ink/10 dark:bg-paper/15" />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[...Array(8)].map((_, rowIndex) => (
            <tr key={rowIndex} className="border-b-[1.5px] border-ink/10 dark:border-paper/10">
              <td className="px-3 py-3 text-[11px] text-slate/50">
                {String(rowIndex + 1).padStart(3, "0")}
              </td>
              {[...Array(6)].map((_, colIndex) => (
                <td key={colIndex} className="px-4 py-3">
                  <div
                    className="h-2.5 animate-pulse bg-ink/10 dark:bg-paper/10"
                    style={{ width: `${50 + ((colIndex * 17) % 40)}%` }}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Loader;
