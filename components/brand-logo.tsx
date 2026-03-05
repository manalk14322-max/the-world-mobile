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
          light ? "border-white/35 bg-white/15" : "border-black/10 bg-primary text-white"
        }`}
      >
        <Smartphone size={18} />
      </span>
      <div className="leading-none">
        {shortOnMobile ? (
          <>
            <p className={`${compact ? "text-base" : "text-[1.05rem]"} font-bold leading-tight tracking-tight sm:hidden ${light ? "text-white" : "text-text"}`}>The world mobile</p>
            <p className={`${compact ? "hidden sm:block sm:text-lg" : "hidden sm:block sm:text-xl"} font-bold tracking-tight ${light ? "text-white" : "text-text"}`}>The world mobile</p>
          </>
        ) : (
          <p className={`${compact ? "text-lg" : "text-xl md:text-2xl"} font-bold tracking-tight ${light ? "text-white" : "text-text"}`}>The world mobile</p>
        )}
      </div>
    </div>
  );
}
