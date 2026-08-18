import Link from "next/link";

export default function NotFound() {
  return (
    <main
      id="contenuti-principali"
      className="mx-auto flex flex-1 max-w-xl flex-col justify-center px-5 py-24"
    >
      <p className="text-[0.72rem] uppercase tracking-[0.28em] text-bronze-deep">
        404
      </p>
      <h1 className="mt-3 font-serif text-5xl">Pagina non trovata</h1>
      <p className="mt-4 text-ink-soft">
        Il sentiero si interrompe. Torna alla sosta o prenota una piazzola.
      </p>
      <div className="mt-8 flex gap-3">
        <Link
          href="/"
          className="rounded-full bg-bronze-deep px-5 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-cream"
        >
          Home
        </Link>
        <Link
          href="/prenota"
          className="rounded-full border border-bronze/40 px-5 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.14em]"
        >
          Prenota
        </Link>
      </div>
    </main>
  );
}
