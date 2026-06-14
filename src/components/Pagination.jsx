const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex items-center justify-center gap-3 border-t-[1.5px] border-ink/15 px-4 py-3 text-xs dark:border-paper/15">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="border-[1.5px] border-ink/30 px-3 py-1.5 uppercase tracking-widish text-ink transition-colors hover:border-signal hover:text-signal disabled:opacity-40 dark:border-paper/30 dark:text-paper"
      >
        ← Prev
      </button>

      <span className="uppercase tracking-widish text-slate">
        {String(currentPage).padStart(2, "0")} / {String(totalPages).padStart(2, "0")}
      </span>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="border-[1.5px] border-ink/30 px-3 py-1.5 uppercase tracking-widish text-ink transition-colors hover:border-signal hover:text-signal disabled:opacity-40 dark:border-paper/30 dark:text-paper"
      >
        Next →
      </button>
    </div>
  );
};

export default Pagination;
