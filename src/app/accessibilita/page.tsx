import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Guida per l'accessibilità",
  description:
    "Come usare il sito e l'area sosta I Bronzi in modo accessibile: tastiera, lettori di schermo, contatti per assistenza.",
};

const sections = [
  {
    title: "Navigazione del sito",
    items: [
      "Il link «Vai ai contenuti principali» è il primo elemento di ogni pagina: compare quando riceve il focus (Tab).",
      "Il menu è raggiungibile da tastiera. Su schermi piccoli, il pulsante menu comunica se è aperto o chiuso.",
      "I titoli seguono un ordine logico. Ogni pagina ha un unico h1.",
      "I colori rispettano un contrasto elevato su crema, bronzo scuro e inchiostro.",
    ],
  },
  {
    title: "Modulo di prenotazione",
    items: [
      "Tutti i campi hanno etichette visibili, non solo placeholder.",
      "I campi obbligatori sono indicati. Gli errori vengono annunciati con ruolo alert.",
      "Puoi scrivere nelle note esigenze di accessibilità: vicinanza ai servizi, percorso piano, assistenza all'arrivo.",
      "In alternativa chiama o usa WhatsApp: confermiamo a voce piazzola e servizi.",
    ],
  },
  {
    title: "In area sosta",
    items: [
      "L'area è in piano, con accesso comodo dalla SS 106.",
      "I servizi igienici sono a pochi metri dalle piazzole. Per piazzole più vicine ai bagni, segnalalo in prenotazione.",
      "La spiaggia è attaccata all'area: il tratto è sabbioso. Chiedici supporto per l'avvicinamento.",
      "Animali ammessi. Illuminazione notturna e recinzione.",
    ],
  },
  {
    title: "Preferenze e assistenza",
    items: [
      "Se nel sistema è attiva la riduzione del movimento, il sito disattiva animazioni e scorrimento fluido.",
      "Il sito è in italiano. Possiamo aiutare anche in inglese al telefono.",
      "Per segnalare una barriera sul sito o in struttura, scrivi o chiama: sistemiamo.",
    ],
  },
];

export default function AccessibilitaPage() {
  return (
    <main
      id="contenuti-principali"
      tabIndex={-1}
      className="flex-1 outline-none"
    >
      <article className="mx-auto max-w-3xl px-5 py-16 lg:py-24">
        <p className="text-[0.72rem] uppercase tracking-[0.28em] text-bronze-deep">
          Accessibilità
        </p>
        <h1 className="mt-3 font-serif text-5xl leading-tight">
          Guida per l&apos;accessibilità
        </h1>
        <p className="mt-5 text-lg text-ink-soft">
          Questa pagina spiega come usare il sito e come farci sapere di cosa
          hai bisogno a I Bronzi, a {site.place}.
        </p>

        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-serif text-3xl">{section.title}</h2>
              <ul className="mt-4 space-y-3 text-ink-soft">
                {section.items.map((item) => (
                  <li key={item} className="pl-4 leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <section className="mt-12 rounded-3xl bg-paper p-6">
          <h2 className="font-serif text-3xl">Contatti per assistenza</h2>
          <p className="mt-3 text-ink-soft">
            Telefono{" "}
            <a className="font-medium text-ink underline" href={site.phoneHref}>
              {site.phone}
            </a>
            <br />
            Email{" "}
            <a className="font-medium text-ink underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
          <p className="mt-6">
            <Link
              href="/prenota"
              className="inline-flex rounded-full bg-bronze-deep px-5 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-cream"
            >
              Prenota con note di accessibilità
            </Link>
          </p>
        </section>
      </article>
    </main>
  );
}
