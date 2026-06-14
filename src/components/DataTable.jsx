function DataTable({ data, visibleColumns }) {
  if (!data.length) {
    return (
      <div className="border-[1.5px] border-dashed border-ink/30 p-10 text-center dark:border-paper/30">
        <p className="font-serif text-lg italic">Nothing on file</p>
        <p className="mt-1 text-xs uppercase tracking-widish text-slate">
          No records match this view yet.
        </p>
      </div>
    );
  }

  const columns = visibleColumns;

  return (
    <div className="overflow-x-auto border-[1.5px] border-ink/15 scrollbar-thin dark:border-paper/15">
      <table className="w-full min-w-max border-collapse text-left text-xs">
        <thead>
          <tr className="border-b-[1.5px] border-ink/15 bg-ink/[0.03] dark:border-paper/15 dark:bg-paper/5">
            <th className="w-12 px-3 py-2.5 text-left text-[10px] uppercase tracking-widish text-slate">
              No.
            </th>
            {columns.map((column) => (
              <th
                key={column}
                className="whitespace-nowrap px-4 py-2.5 text-[11px] font-bold uppercase tracking-widish text-slate"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={row.id}
              className="group border-b-[1.5px] border-ink/10 transition-colors hover:bg-signal/[0.07] dark:border-paper/10"
            >
              <td className="px-3 py-3 align-top text-[11px] tabular-nums text-slate/50 group-hover:text-signal">
                {String(rowIndex + 1).padStart(3, "0")}
              </td>
              {columns.map((column) => (
                <td key={column} className="px-4 py-3 align-top">
                  {column === "images" ? (
                    <img
                      src={row[column][0]}
                      alt=""
                      className="h-10 w-10 border-[1.5px] border-ink/15 object-cover grayscale-[15%] dark:border-paper/15"
                    />
                  ) : column === "address" ? (
                    <div className="text-xs text-ink/80 dark:text-paper/80">
                      {row[column].address}, {row[column].city},{" "}
                      {row[column].state}, {row[column].postalCode},{" "}
                      {row[column].country}
                    </div>
                  ) : column === "availabilityStatus" ? (
                    <span
                      className={`inline-flex items-center border-[1.5px] px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-widish ${
                        row[column] === "In Stock"
                          ? "border-moss text-moss"
                          : row[column] === "Low Stock"
                            ? "border-signal text-signal"
                            : "border-rust text-rust"
                      }`}
                    >
                      {row[column]}
                    </span>
                  ) : typeof row[column] === "number" ? (
                    <span className="tabular-nums">
                      {row[column].toLocaleString()}
                    </span>
                  ) : (
                    String(row[column])
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
