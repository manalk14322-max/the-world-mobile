"use client";

import { useState } from "react";
import { CreditCard, LockKeyhole, ShieldCheck } from "lucide-react";

const steps = ["Carrito", "Informacion", "Pago", "Confirmacion"];

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);
  const [payment, setPayment] = useState("Visa");

  const handleCheckout = async () => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 700));
      alert("Pedido enviado. Conecta Stripe en backend para pagos en vivo.");
    } catch (error) {
      alert(error instanceof Error ? error.message : "Checkout failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section bg-background">
      <div className="container grid gap-10 lg:grid-cols-[1fr_360px]">
        <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
          <div className="mb-6 flex flex-wrap items-center gap-2">
            {steps.map((item, index) => (
              <span key={item} className={`rounded-full px-3 py-1 text-[13px] font-semibold ${index + 1 < step + 1 ? "bg-primary text-white" : "bg-secondary-bg text-muted"}`}>
                {item}
              </span>
            ))}
          </div>
          <h1 className="text-4xl font-extrabold text-text">Finalizar compra</h1>
          <p className="mt-2 text-[16px] text-muted">Tus datos estan protegidos con cifrado SSL.</p>

          {step === 1 && (
            <form className="mt-8 grid gap-4 sm:grid-cols-2">
              <input className="h-12 rounded-xl border border-black/10 px-4 text-[16px]" placeholder="Nombre" />
              <input className="h-12 rounded-xl border border-black/10 px-4 text-[16px]" placeholder="Telefono" />
              <input className="h-12 rounded-xl border border-black/10 px-4 text-[16px] sm:col-span-2" placeholder="Email" />
              <input className="h-12 rounded-xl border border-black/10 px-4 text-[16px] sm:col-span-2" placeholder="Direccion" />
              <input className="h-12 rounded-xl border border-black/10 px-4 text-[16px]" placeholder="Codigo postal" />
              <input className="h-12 rounded-xl border border-black/10 px-4 text-[16px]" placeholder="Ciudad" />
              <button type="button" onClick={() => setStep(2)} className="btn-hover sm:col-span-2 mt-2 rounded-xl bg-primary px-6 py-3 text-[16px] font-semibold text-white">
                Continuar al pago
              </button>
            </form>
          )}

          {step === 2 && (
            <div className="mt-8 space-y-3">
              {["Visa", "Mastercard", "PayPal", "Apple Pay"].map((option) => (
                <button
                  key={option}
                  onClick={() => setPayment(option)}
                  className={`w-full rounded-xl border px-4 py-3 text-left text-[15px] font-semibold transition ${payment === option ? "border-primary bg-secondary-bg text-text" : "border-black/10 text-muted hover:bg-secondary-bg"}`}
                >
                  {option}
                </button>
              ))}
              <div className="mt-4 flex items-center gap-2 text-[14px] text-muted">
                <LockKeyhole size={16} className="text-accent" />
                Tus datos estan protegidos con cifrado SSL.
              </div>
              <button onClick={handleCheckout} disabled={loading} className="btn-hover mt-3 w-full rounded-xl bg-primary px-6 py-3 text-[16px] font-semibold text-white disabled:opacity-70">
                {loading ? "Procesando..." : `Pagar con ${payment}`}
              </button>
            </div>
          )}
        </div>

        <aside className="h-fit rounded-xl border border-black/10 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-text">Resumen del pedido</h2>
          <div className="mt-5 space-y-3 text-[16px]">
            <div className="flex justify-between">
              <span>iPhone 15 Pro Max</span>
              <span>EUR 1299.00</span>
            </div>
            <div className="flex justify-between">
              <span>Envio</span>
              <span>Gratis</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>EUR 1299.00</span>
            </div>
          </div>
          <div className="mt-5 rounded-xl border border-black/10 bg-secondary-bg p-4 text-[14px] text-muted">
            <div className="flex items-center gap-2 font-semibold text-text"><ShieldCheck size={16} className="text-accent" /> Secure checkout</div>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1 rounded-md bg-white px-2 py-1 text-[12px] font-semibold text-text"><CreditCard size={12} /> Visa</span>
              <span className="rounded-md bg-white px-2 py-1 text-[12px] font-semibold text-text">Mastercard</span>
              <span className="rounded-md bg-white px-2 py-1 text-[12px] font-semibold text-text">PayPal</span>
              <span className="rounded-md bg-white px-2 py-1 text-[12px] font-semibold text-text">Apple Pay</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
