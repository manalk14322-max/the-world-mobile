import Link from "next/link";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-white py-12">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-lg font-bold text-text">Company</p>
          <ul className="mt-3 space-y-2 text-[15px] text-muted">
            <li><Link href="#">About us</Link></li>
            <li><Link href="#">Contact</Link></li>
            <li><Link href="#">Privacy policy</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-lg font-bold text-text">Customer</p>
          <ul className="mt-3 space-y-2 text-[15px] text-muted">
            <li><Link href="#">Shipping</Link></li>
            <li><Link href="#">Returns</Link></li>
            <li><Link href="#">Support</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-lg font-bold text-text">Store</p>
          <p className="mt-3 text-[15px] text-muted">The World Mobile</p>
          <p className="text-[15px] text-muted">Madrid, Spain</p>
        </div>
        <div>
          <p className="text-lg font-bold text-text">Social</p>
          <div className="mt-3 flex gap-2">
            <span className="rounded-xl border border-black/10 p-2 text-muted"><Instagram size={18} /></span>
            <span className="rounded-xl border border-black/10 p-2 text-muted"><Facebook size={18} /></span>
            <span className="rounded-xl border border-black/10 p-2 text-muted"><MessageCircle size={18} /></span>
          </div>
        </div>
      </div>
      <div className="container mt-10 border-t border-black/10 pt-5 text-[14px] text-muted">
        © The World Mobile
      </div>
    </footer>
  );
}
