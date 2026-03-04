import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container rounded-xl border border-black/10 bg-white p-8 text-center shadow-sm">
        <h1 className="text-3xl font-extrabold">Page Not Found</h1>
        <p className="mt-2 text-[16px] text-muted">
          The page you are looking for does not exist in The world mobile.
        </p>
        <Link
          href="/"
          className="pressable mt-6 inline-block rounded-xl bg-primary px-6 py-3 text-[16px] font-semibold text-white shadow-sm"
        >
          Go Home
        </Link>
      </div>
    </section>
  );
}
