import type { Metadata } from "next";
import Link from "next/link";
import { ServicesCatalog } from "@/components/services";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Servizi",
  description:
    "Piazzole con acqua ed elettricità, spiaggia a tre passi, docce, camper service e extra all'area sosta I Bronzi a Riace.",
};

export default function ServiziPage() {
  return (
    <main
      id="contenuti-principali"
      tabIndex={-1}
      className="flex-1 outline-none"
    >
      <header className="bg-foam px-5 pt-16 pb-10 lg:px-8 lg:pt-24 lg:pb-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-[0.72rem] uppercase tracking-[0.28em] text-sea">
            Servizi
          </p>
          <h1 className="mt-3 max-w-3xl font-serif text-5xl leading-tight lg:text-6xl">
            Tutto quello che serve a un camperista.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
            Tariffa chiara, servizi in piazzola, spiaggia attaccata. Niente
            sorprese: incluso ed extra sono distinti. Da {site.priceFrom} a{" "}
            {site.priceTo} € a notte.
          </p>
        </div>
      </header>

      <section className="bg-foam pb-20 lg:pb-28">
        <ServicesCatalog />
        <div className="mx-auto mt-12 flex max-w-7xl justify-center px-5 lg:px-8">
          <Link
            href="/prenota"
            className="rounded-full bg-bronze-deep px-6 py-3 text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-cream hover:bg-ink"
          >
            Prenota la sosta
          </Link>
        </div>
      </section>
    </main>
  );
}
