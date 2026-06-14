function Loader() {
  return (
    <div className="overflow-hidden rounded-lg border">
      <div className="animate-pulse">
        {/* Header */}
        <div className="flex border-b bg-gray-100">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="h-12 flex-1 border-r bg-gray-200" />
          ))}
        </div>

        {/* Rows */}
        {[...Array(5)].map((_, rowIndex) => (
          <div key={rowIndex} className="flex border-b">
            {[...Array(8)].map((_, colIndex) => (
              <div
                key={colIndex}
                className="h-12 flex-1 border-r bg-gray-100"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Loader;
