import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { AddToBookingLink } from "@/components/add-to-booking";
import { BookingForm } from "@/components/booking-form";
import { ServicesPreview } from "@/components/services";
import {
  excursions,
  gallery,
  rentals,
  reviews,
  site,
} from "@/lib/data";

export default function Home() {
  return (
    <main id="contenuti-principali" tabIndex={-1} className="flex-1 outline-none">
      <Hero />
      <Marquee />
      <About />
      <ServicesPreview />
      <Excursions />
      <Rentals />
      <Gallery />
      <Reviews />
      <Booking />
      <Visit />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative isolate min-h-[92svh] overflow-hidden bg-sea-deep text-cream">
      <Image
        src="/images/hero_i_bronzi.png"
        alt="I Bronzi di Riace accanto a un camper, con il Mar Ionio sullo sfondo"
        fill
        priority
        className="object-cover object-[center_70%]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-sea-deep/60 via-sea-deep/25 to-sea-deep/85" />
      <div className="relative mx-auto flex min-h-[92svh] max-w-7xl flex-col justify-end px-5 pb-16 pt-28 lg:px-8 lg:pb-20">
        <p className="text-[0.72rem] uppercase tracking-[0.32em] text-sand drop-shadow-md">
          Torre Ellera di Camini · Costa dei Gelsomini
        </p>
        <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[0.95] drop-shadow-lg sm:text-7xl lg:text-8xl">
          Piazzola sul mare,
          <span className="block italic text-sand">a Riace.</span>
        </h1>

        <div className="mt-8 max-w-xl rounded-3xl bg-cream p-6 text-ink shadow-[0_20px_50px_rgba(8,48,60,0.35)] sm:p-7">
          <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
            Sosta camper sulla SS 106 Ionica: 36 piazzole in piano con acqua ed
            elettricità, spiaggia attaccata, i Bronzi e i borghi della Locride a
            pochi minuti.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Link
              href="/prenota"
              className="rounded-full bg-bronze-deep px-6 py-3 text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-cream hover:bg-ink"
            >
              Prenota la sosta
            </Link>
            <Link
              href="/servizi"
              className="rounded-full border border-ink/15 bg-white px-6 py-3 text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-ink hover:border-ink/30"
            >
              Scopri i servizi
            </Link>
          </div>
          <p className="mt-4 text-sm font-medium text-ink">
            da {site.priceFrom}–{site.priceTo} € / notte · {site.rating}/5 Google
          </p>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "36 piazzole",
    "Fronte mare",
    "Acqua ed elettricità",
    "Docce calde 0,50 €",
    "Cani ammessi",
    "Aperti tutto l'anno",
    "Camper · caravan · tenda",
  ];
  return (
    <div
      className="-mt-px border-y border-[var(--line)] bg-paper py-3 text-[0.72rem] uppercase tracking-[0.22em] text-bronze-deep"
      aria-hidden
    >
      <div className="flex overflow-hidden whitespace-nowrap">
        <div className="marquee-track px-5">
          {items.concat(items).map((item, i) => (
            <span key={`${item}-${i}`}>✦ {item}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="area" className="scroll-mt-24 px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-[0.72rem] uppercase tracking-[0.28em] text-bronze-deep">
            L&apos;area
          </p>
          <h2 className="mt-3 font-serif text-5xl leading-tight lg:text-6xl">
            Una sosta ionica, semplice e preziosa.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            I Bronzi prende il nome dai guerrieri greci ritrovati in queste
            acque. Siamo a Torre Ellera di Camini, sulla statale 106, con la
            spiaggia attaccata alle piazzole e Riace a una manciata di minuti.
          </p>
          <p className="mt-4 leading-relaxed text-ink-soft">
            Ogni stallo ha acqua ed elettricità. Ci sono camper service, bagni,
            lavatrice e docce. Il mare è lì: tre passi e sei sulla sabbia.
          </p>
          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-[var(--line)] pt-8">
            <Stat k="Piazzole" v={`${site.pitches}`} />
            <Stat k="Da" v={`${site.priceFrom} €`} />
            <Stat k="Google" v={`${site.rating}/5`} />
          </dl>
        </div>
        <div className="relative lg:col-span-7">
          <div className="grid gap-4 sm:grid-cols-2">
            <figure className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <Image
                src="/images/le-castella.jpg"
                alt="Costa ionica calabrese, Le Castella"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 28vw, 90vw"
              />
            </figure>
            <figure className="relative mt-10 aspect-[4/5] overflow-hidden rounded-[2rem] sm:mt-16">
              <Image
                src="/images/riace-paese.jpg"
                alt="Riace paese, sopra Riace Marina"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 28vw, 90vw"
              />
            </figure>
          </div>
          <aside className="absolute bottom-6 left-6 max-w-xs rounded-2xl bg-paper/95 p-5 shadow-xl shadow-bronze-deep/10 backdrop-blur">
            <p className="font-serif text-xl">«Direttamente sul mare. Personale gentilissimo.»</p>
            <p className="mt-2 text-xs uppercase tracking-[0.16em] text-ink-soft">
              CamperOnLine · Park4Night
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="text-[0.68rem] uppercase tracking-[0.18em] text-ink-soft">{k}</dt>
      <dd className="mt-1 font-serif text-3xl">{v}</dd>
    </div>
  );
}

function Excursions() {
  return (
    <section id="escursioni" className="scroll-mt-24 px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-[0.72rem] uppercase tracking-[0.28em] text-bronze-deep">
              Escursioni
            </p>
            <h2 className="mt-3 font-serif text-5xl">Dalla piazzola alla Magna Grecia.</h2>
          </div>
          <p className="max-w-md text-ink-soft">
            Partenze dalla sosta, gruppi piccoli, ritiro in area. Prenota insieme
            al pernottamento.
          </p>
        </div>
        <ul className="mt-12 grid gap-6 lg:grid-cols-2">
          {excursions.map((tour) => (
            <li
              key={tour.slug}
              className="grid overflow-hidden rounded-[1.8rem] border border-[var(--line)] bg-paper sm:grid-cols-5"
            >
              <div className="relative aspect-[16/11] min-h-[180px] sm:col-span-2 sm:min-h-full sm:aspect-auto">
                <Image
                  src={tour.image}
                  alt={`Escursione: ${tour.title}`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 22vw, 100vw"
                />
              </div>
              <div className="sm:col-span-3 p-6 lg:p-8">
                <p className="text-[0.7rem] uppercase tracking-[0.18em] text-bronze-deep">
                  {tour.duration} · {tour.price}
                </p>
                <h3 className="mt-2 font-serif text-3xl">{tour.title}</h3>
                <p className="mt-1 text-sm text-ink-soft">{tour.place}</p>
                <p className="mt-3 leading-relaxed text-ink-soft">{tour.text}</p>
                <AddToBookingLink
                  extraId={`esc-${tour.slug}`}
                  href="/prenota"
                  className="mt-5 inline-block text-sm font-medium underline decoration-bronze underline-offset-4"
                >
                  Aggiungi alla prenotazione
                </AddToBookingLink>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Rentals() {
  return (
    <section id="noleggio" className="scroll-mt-24 bg-sea-deep py-20 text-cream lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="text-[0.72rem] uppercase tracking-[0.28em] text-bronze">
          Noleggio
        </p>
        <h2 className="mt-3 max-w-3xl font-serif text-5xl text-cream">
          Auto, scooter e bici. Consegnati in area sosta.
        </h2>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {rentals.map((item) => (
            <li key={item.slug} className="overflow-hidden rounded-[1.8rem] bg-sea">
              <div className="relative aspect-[16/10]">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 30vw, 100vw"
                />
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-serif text-3xl">{item.title}</h3>
                  <p className="text-sm text-bronze">{item.from}</p>
                </div>
                <ul className="mt-4 space-y-1 text-sm text-cream/75">
                  {item.items.map((line) => (
                    <li key={line}>· {line}</li>
                  ))}
                </ul>
                <AddToBookingLink
                  extraId={`rent-${item.slug}`}
                  href="/prenota"
                  className="mt-6 inline-flex rounded-full bg-cream px-4 py-2 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-ink"
                >
                  Richiedi disponibilità
                </AddToBookingLink>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section aria-labelledby="gallery-title" className="px-5 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <h2 id="gallery-title" className="font-serif text-4xl">
          La Locride: mare, borghi, Magna Grecia.
        </h2>
        <ul className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
          {gallery.map((shot, i) => (
            <li
              key={shot.src}
              className={`relative overflow-hidden rounded-3xl ${i === 0 ? "col-span-2 aspect-[16/9]" : "aspect-[4/3]"}`}
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                className="object-cover"
                sizes={i === 0 ? "80vw" : "30vw"}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="recensioni" className="scroll-mt-24 bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="text-[0.72rem] uppercase tracking-[0.28em] text-bronze-deep">
          Recensioni
        </p>
        <h2 className="mt-3 font-serif text-5xl">4,6 su Google. 107 voci dal mare.</h2>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <li key={r.name} className="rounded-[1.6rem] bg-cream p-6">
              <p className="text-bronze" aria-label={`${r.score} stelle su 5`}>
                {"★".repeat(r.score)}
                {"☆".repeat(5 - r.score)}
              </p>
              <blockquote className="mt-4 leading-relaxed text-ink-soft">
                {r.text}
              </blockquote>
              <p className="mt-5 text-sm font-medium">
                {r.name}{" "}
                <span className="font-normal text-ink-soft">· {r.when}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Booking() {
  return (
    <section id="prenota" className="scroll-mt-24 px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-[0.72rem] uppercase tracking-[0.28em] text-bronze-deep">
            Prenota
          </p>
          <h2 className="mt-3 font-serif text-5xl">Scegli le notti. Aggiungi un&apos;uscita.</h2>
          <p className="mt-5 text-lg text-ink-soft">
            Compila qui o in pagina Prenota: è la stessa richiesta. Escursioni e
            noleggio si agganciano in automatico. Paghi in struttura.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-ink-soft">
            <li>Camper, caravan e tenda</li>
            <li>Docce calde 0,50 € · lavatrice circa 3 €</li>
            <li>
              Oppure chiama{" "}
              <a className="font-medium text-ink underline" href={site.phoneHref}>
                {site.phone}
              </a>
            </li>
          </ul>
        </div>
        <div className="rounded-[2rem] border border-[var(--line)] bg-paper p-6 lg:col-span-7 lg:p-10">
          <Suspense fallback={<p className="text-ink-soft">Caricamento modulo…</p>}>
            <BookingForm />
          </Suspense>
        </div>
      </div>
    </section>
  );
}

function Visit() {
  const mapSrc = `https://maps.google.com/maps?q=${site.coords.lat},${site.coords.lng}&z=15&output=embed`;
  return (
    <section id="dove" className="bg-paper">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        <div className="px-5 py-16 lg:px-8 lg:py-20">
          <h2 className="font-serif text-4xl">Come arrivare</h2>
          <p className="mt-4 max-w-md leading-relaxed text-ink-soft">
            Sulla SS 106 Ionica, località Camini mare / Torre Ellera. Venendo da
            Riace, quasi di fronte al bivio per Caldarella. Accesso comodo, area
            in piano, spiaggia attaccata.
          </p>
          <p className="mt-6 text-sm">{site.address}</p>
          <p className="mt-2 text-sm text-ink-soft">
            N {site.coords.lat} · E {site.coords.lng}
          </p>
          <a
            className="mt-8 inline-flex rounded-full bg-bronze-deep px-5 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-cream"
            href={`https://www.google.com/maps/dir/?api=1&destination=${site.coords.lat},${site.coords.lng}`}
          >
            Indicazioni stradali
          </a>
        </div>
        <div className="min-h-[320px]">
          <iframe
            title="Mappa dell'area sosta I Bronzi a Riace"
            src={mapSrc}
            className="h-full min-h-[320px] w-full border-0 grayscale"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
