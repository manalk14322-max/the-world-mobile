import { Smartphone } from "lucide-react";

type BrandLogoProps = {
  light?: boolean;
  compact?: boolean;
  shortOnMobile?: boolean;
};

export function BrandLogo({ light = false, compact = false, shortOnMobile = false }: BrandLogoProps) {
  return (
    <div className={`inline-flex items-center gap-2.5 ${compact ? "" : "gap-3"}`}>
      <span
        className={`inline-flex h-9 w-9 items-center justify-center rounded-xl border ${
          light ? "border-white/35 bg-white/15" : "border-black/10 bg-accent text-white"
        }`}
      >
        <Smartphone size={18} />
      </span>
      <div className="leading-none">
        {shortOnMobile ? (
          <>
            <p className={`${compact ? "text-base" : "text-[1.05rem]"} font-semibold leading-tight tracking-tight sm:hidden ${light ? "text-white" : "text-text"}`}>The world mobile</p>
            <div className={`${compact ? "hidden sm:block" : "hidden sm:block"}`}>
              <p className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${light ? "text-white/80" : "text-muted"}`}>Premium Store</p>
              <p className={`mt-0.5 text-[24px] font-serif italic font-bold tracking-tight ${light ? "text-white" : "text-text"}`}>the world</p>
              <p className={`-mt-0.5 text-[18px] font-extrabold uppercase tracking-[0.08em] ${light ? "text-white/90" : "text-primary"}`}>mobile</p>
            </div>
          </>
        ) : (
          <div>
            <p className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${light ? "text-white/80" : "text-muted"}`}>Premium Store</p>
            <p className={`${compact ? "text-[20px]" : "text-[24px] md:text-[27px]"} mt-0.5 font-serif italic font-bold tracking-tight ${light ? "text-white" : "text-text"}`}>the world</p>
            <p className={`${compact ? "text-[15px]" : "text-[17px]"} -mt-0.5 font-extrabold uppercase tracking-[0.08em] ${light ? "text-white/90" : "text-primary"}`}>mobile</p>
          </div>
        )}
      </div>
    </div>
  );
}
