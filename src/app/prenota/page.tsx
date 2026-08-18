import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { BookingForm } from "@/components/booking-form";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Prenota la sosta",
  description:
    "Richiedi una piazzola all'area sosta I Bronzi a Riace. Aggiungi escursioni e noleggio auto o scooter.",
};

export default function PrenotaPage() {
  return (
    <main
      id="contenuti-principali"
      tabIndex={-1}
      className="flex-1 outline-none"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-12 lg:px-8 lg:py-24">
        <aside className="lg:col-span-4">
          <p className="text-[0.72rem] uppercase tracking-[0.28em] text-bronze-deep">
            Prenotazione
          </p>
          <h1 className="mt-3 font-serif text-5xl leading-tight">
            La tua sosta a I Bronzi
          </h1>
          <p className="mt-5 text-ink-soft">
            {site.place}. Piazzole da {site.priceFrom} a {site.priceTo} € a
            notte, docce calde 0,50 €, spiaggia a tre passi. Se hai già compilato
            il modulo in home, lo ritrovi qui.
          </p>
          <dl className="mt-8 space-y-3 text-sm">
            <div>
              <dt className="text-ink-soft">Telefono</dt>
              <dd>
                <a href={site.phoneHref}>{site.phone}</a>
              </dd>
            </div>
            <div>
              <dt className="text-ink-soft">WhatsApp</dt>
              <dd>
                <a href={site.whatsapp}>Scrivici</a>
              </dd>
            </div>
            <div>
              <dt className="text-ink-soft">Indirizzo</dt>
              <dd>{site.address}</dd>
            </div>
          </dl>
          <p className="mt-8 text-sm">
            <Link className="underline underline-offset-4" href="/accessibilita">
              Guida per l&apos;accessibilità
            </Link>
          </p>
        </aside>
        <div className="rounded-[2rem] border border-[var(--line)] bg-paper p-6 lg:col-span-8 lg:p-10">
          <Suspense fallback={<p className="text-ink-soft">Caricamento modulo…</p>}>
            <BookingForm />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
