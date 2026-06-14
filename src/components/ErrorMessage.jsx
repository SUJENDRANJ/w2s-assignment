function ErrorMessage({ message }) {
  return (
    <div className="relative border-[1.5px] border-rust bg-rust/5 p-8 text-center">
      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-paper px-3 text-[10px] font-bold uppercase tracking-widish text-rust dark:bg-ink">
        void
      </span>
      <p className="text-sm font-bold uppercase tracking-widish text-rust">
        Record unreadable
      </p>
      <p className="mx-auto mt-2 max-w-sm text-xs text-rust/80">{message}</p>
    </div>
  );
}

export default ErrorMessage;
