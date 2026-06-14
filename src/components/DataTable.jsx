function DataTable({ data }) {
  if (!data.length) {
    return <p>No data found</p>;
  }

  const columns = Object.keys(data[0]);

  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-300">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column} className="border p-2 bg-gray-100 text-left">
                {column}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              {columns.map((column) => (
                <td key={column} className="border p-2">
                  {column == "images" ? (
                    <img src={row[column][0]} alt="" />
                  ) : column === "address" ? (
                    <div>
                      <div>
                        {row[column].address},{row[column].city},
                        {row[column].state},{row[column].postalCode},
                        {row[column].country}
                      </div>
                    </div>
                  ) : (
                    row[column]
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
