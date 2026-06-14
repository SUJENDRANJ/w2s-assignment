const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="mt-4 flex items-center justify-center gap-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="rounded border px-4 py-2 disabled:opacity-50"
      >
        Previous
      </button>

      <span>
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="rounded border px-4 py-2 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
