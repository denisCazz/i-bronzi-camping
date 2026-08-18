import Link from "next/link";
import { site } from "@/lib/data";

export function SkipLink() {
  return (
    <a className="skip-link" href="#contenuti-principali">
      Vai ai contenuti principali
    </a>
  );
}

export function Logo({
  compact = false,
  inverted = false,
}: {
  compact?: boolean;
  inverted?: boolean;
}) {
  return (
    <Link
      href="/"
      className={`group flex items-center gap-3 no-underline ${inverted ? "text-cream" : "text-ink"}`}
      aria-label={`${site.name} — torna alla home`}
    >
      <span
        className={`grid size-11 place-items-center rounded-full border text-[0.7rem] font-semibold tracking-[0.18em] ${
          inverted
            ? "border-bronze/50 bg-bronze-deep text-sand"
            : "border-bronze/60 bg-bronze-deep text-sand"
        }`}
        aria-hidden
      >
        IB
      </span>
      <span className="leading-tight">
        <span className="block font-serif text-xl font-semibold tracking-wide">
          {site.name}
        </span>
        {!compact && (
          <span
            className={`block text-[0.68rem] uppercase tracking-[0.22em] ${inverted ? "text-foam/70" : "text-ink-soft"}`}
          >
            Riace · Mar Ionio
          </span>
        )}
      </span>
    </Link>
  );
}
