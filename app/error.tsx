"use client";

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="section">
      <div className="container rounded-xl border border-black/10 bg-white p-8 text-center shadow-sm">
        <h1 className="text-3xl font-extrabold">Something went wrong</h1>
        <p className="mt-2 text-[16px] text-muted">
          We could not load this page right now. Please try again.
        </p>
        <p className="mt-2 text-[14px] text-muted">{error.message}</p>
        <button
          onClick={reset}
          className="pressable mt-6 rounded-xl bg-accent px-6 py-3 text-[16px] font-semibold text-white shadow-sm"
        >
          Retry
        </button>
      </div>
    </section>
  );
}
