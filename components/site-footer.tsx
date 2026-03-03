import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { BrandLogo } from "./brand-logo";

export function SiteFooter() {
  return (
    <footer className="section border-t border-black/10 bg-secondary-bg">
      <div className="container grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <BrandLogo />
          <p className="mt-3 text-[16px] text-muted">Trusted mobile store for latest smartphones and accessories.</p>
        </div>

        <div>
          <p className="font-semibold">Quick Links</p>
          <ul className="mt-3 space-y-2 text-[16px] text-muted">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/#featured">Shop</Link>
            </li>
            <li>
              <Link href="/#categories">Categories</Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-semibold">Customer Service</p>
          <ul className="mt-3 space-y-2 text-[16px] text-muted">
            <li>Shipping Policy</li>
            <li>Returns</li>
            <li>Support Center</li>
          </ul>
        </div>

        <div>
          <p className="font-semibold">Follow Us</p>
          <div className="mt-3 flex gap-3 text-muted">
            <Facebook size={18} />
            <Instagram size={18} />
            <Twitter size={18} />
          </div>
        </div>
      </div>
      <div className="container mt-12 border-t border-black/10 pt-6 text-[15px] text-muted">
        Copyright {new Date().getFullYear()} The world mobile. All rights reserved.
      </div>
    </footer>
  );
}
