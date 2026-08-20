"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/brand";
import { site } from "@/lib/data";

const links = [
  { href: "/#area", label: "L'area" },
  { href: "/servizi", label: "Servizi" },
  { href: "/#escursioni", label: "Escursioni" },
  { href: "/#noleggio", label: "Noleggio" },
  { href: "/#recensioni", label: "Recensioni" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principale">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[0.8rem] font-medium uppercase tracking-[0.16em] text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/accessibilita"
            className="text-[0.75rem] text-ink-soft underline-offset-4 hover:underline"
          >
            Accessibilità
          </Link>
          <Link
            href="/prenota"
            className="rounded-full bg-bronze-deep px-5 py-2.5 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-cream transition hover:bg-ink"
          >
            Prenota
          </Link>
        </div>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-full border border-bronze/40 lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Chiudi menu" : "Apri menu"}</span>
          <span aria-hidden className="flex w-5 flex-col gap-1.5">
            <span className={`h-px bg-ink transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`h-px bg-ink transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-px bg-ink transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open && (
        <div
          id={menuId}
          className="border-t border-[var(--line)] bg-paper px-5 py-6 lg:hidden"
        >
          <nav className="flex flex-col gap-4" aria-label="Menu mobile">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-serif text-2xl"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/accessibilita" onClick={() => setOpen(false)}>
              Guida per l&apos;accessibilità
            </Link>
            <a href={site.phoneHref} className="text-ink-soft">
              {site.phone}
            </a>
            <Link
              href="/prenota"
              className="mt-2 inline-flex w-fit rounded-full bg-bronze-deep px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-cream"
              onClick={() => setOpen(false)}
            >
              Prenota la sosta
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
