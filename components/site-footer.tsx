import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="section border-t border-black/10 bg-secondary-bg py-10 sm:py-14">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-xl font-extrabold text-text">The world mobile</p>
          <p className="mt-2 text-[15px] text-muted">Premium mobile essentials for European customers.</p>
          <p className="mt-3 text-[15px] text-text">Address: Calle de Alcala 45, Madrid, Spain</p>
          <p className="mt-4 text-[15px] text-text">Email: support@theworldmobile.eu</p>
          <p className="text-[15px] text-text">Phone: +34 600 123 456</p>
        </div>

        <div>
          <p className="font-bold text-text">Quick Links</p>
          <ul className="mt-3 space-y-2 text-[15px] text-muted">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/#top-products">Shop</Link></li>
            <li><Link href="/#categories">Categories</Link></li>
            <li><Link href="/#testimonials">About</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-bold text-text">Customer Care</p>
          <ul className="mt-3 space-y-2 text-[15px] text-muted">
            <li>Delivery Policy</li>
            <li>Returns & Refunds</li>
            <li>Warranty Support</li>
          </ul>
        </div>

        <div>
          <p className="font-bold text-text">Follow Us</p>
          <div className="mt-3 flex gap-2 text-muted">
            <span className="rounded-xl border border-black/10 p-2"><Facebook size={17} /></span>
            <span className="rounded-xl border border-black/10 p-2"><Instagram size={17} /></span>
            <span className="rounded-xl border border-black/10 p-2"><Linkedin size={17} /></span>
          </div>
        </div>
      </div>

      <div className="container mt-8 border-t border-black/10 pt-5 text-[14px] text-muted">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p>Copyright {new Date().getFullYear()} The world mobile.</p>
          <div className="flex gap-3">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms</Link>
            <Link href="#">Returns</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
