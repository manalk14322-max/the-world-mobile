import Link from "next/link";

export function HeroContentSection() {
  return (
    <section className="pb-10 pt-3 sm:pb-14 sm:pt-5">
      <div className="container">
        <div className="rounded-xl border border-[#dbe3f3] bg-gradient-to-br from-white via-[#f8fbff] to-[#eef4ff] p-6 shadow-sm sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <p className="inline-flex rounded-full border border-[#c5d4f9] bg-white/90 px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#3559a8]">
                Premium Mobile Store in Spain
              </p>
              <h2 className="mt-4 max-w-4xl text-3xl font-black leading-[1.04] text-text sm:text-5xl lg:text-6xl">
                Compra movil premium con confianza total
              </h2>
              <p className="mt-4 max-w-3xl text-[18px] leading-relaxed text-muted">
                Smartphones y accesorios originales con envio rapido en Espana,
                pago seguro y soporte profesional para clientes europeos.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/#top-products"
                  className="btn-hover rounded-[10px] bg-accent px-8 py-4 text-[16px] font-semibold text-white shadow-md shadow-[#2563eb]/25"
                >
                  Comprar ahora
                </Link>
                <Link
                  href="/#categories"
                  className="btn-hover rounded-[10px] border border-[#c9d6f5] bg-white px-8 py-4 text-[16px] font-semibold text-text transition hover:bg-[#f3f7ff]"
                >
                  Ver coleccion
                </Link>
              </div>

              <div className="mt-5 flex flex-wrap gap-2 text-[12px] font-semibold sm:text-[13px]">
                <span className="rounded-full border border-[#c5d4f9] bg-white px-3 py-1 text-[#27427f]">Entrega 24-48h en Espana</span>
                <span className="rounded-full border border-[#c5d4f9] bg-white px-3 py-1 text-[#27427f]">Pago seguro SSL</span>
                <span className="rounded-full border border-[#c5d4f9] bg-white px-3 py-1 text-[#27427f]">Garantia oficial UE</span>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-xl border border-[#d7e0f5] bg-white p-4 shadow-sm">
                <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#4865a4]">Clientes satisfechos</p>
                <p className="mt-1 text-3xl font-black text-text">2,000+</p>
                <p className="mt-1 text-sm text-muted">Confianza real en toda Espana</p>
              </div>
              <div className="rounded-xl border border-[#d7e0f5] bg-white p-4 shadow-sm">
                <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#4865a4]">Valoracion media</p>
                <p className="mt-1 text-3xl font-black text-text">4.9/5</p>
                <p className="mt-1 text-sm text-muted">Opiniones verificadas de compradores</p>
              </div>
              <div className="rounded-xl border border-[#d7e0f5] bg-white p-4 shadow-sm sm:col-span-2 lg:col-span-1">
                <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#4865a4]">Compra protegida</p>
                <p className="mt-1 text-lg font-bold text-text">Devolucion gratis en 30 dias</p>
                <p className="mt-1 text-sm text-muted">Proceso rapido y soporte dedicado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
