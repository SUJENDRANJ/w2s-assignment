import { useMemo } from "react";

function DataTable({ data }) {
  const columns = useMemo(() => {
    if (!data?.length) return [];

    return Object.keys(data[0]);
  }, [data]);

  const renderValue = (value) => {
    if (value === null || value === undefined) {
      return "-";
    }

    if (Array.isArray(value)) {
      return (
        <pre className="max-w-xs overflow-auto whitespace-pre-wrap text-xs">
          {JSON.stringify(value, null, 2)}
        </pre>
      );
    }

    if (typeof value === "object") {
      return (
        <pre className="max-w-xs overflow-auto whitespace-pre-wrap text-xs">
          {JSON.stringify(value, null, 2)}
        </pre>
      );
    }

    return String(value);
  };

  if (!data?.length) {
    return (
      <div className="rounded-lg border bg-white p-8 text-center text-gray-500">
        No data available
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg border bg-white shadow-sm">
      <table className="min-w-full border-collapse">
        <thead className="sticky top-0 bg-gray-100">
          <tr>
            {columns.map((column) => (
              <th
                key={column}
                className="border-b px-4 py-3 text-left text-sm font-semibold capitalize text-gray-700"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={row.id ?? rowIndex} className="hover:bg-gray-50">
              {columns.map((column) => (
                <td
                  key={column}
                  className="border-b px-4 py-3 align-top text-sm"
                >
                  {renderValue(row[column])}
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
