export function NewsletterSection() {
  return (
    <section id="newsletter" className="section bg-secondary-bg py-10 sm:py-14">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-text">Get exclusive offers</h2>
          <form className="mx-auto mt-6 flex max-w-xl flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-12 flex-1 rounded-[10px] border border-black/10 bg-white px-4 text-[16px] outline-none focus:border-accent"
            />
            <button className="btn-hover h-12 rounded-[10px] bg-accent px-6 text-[16px] font-semibold text-white">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
