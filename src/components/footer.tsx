import Link from "next/link";
import { Logo } from "@/components/brand";
import { site } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-sea-deep text-foam">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <Logo inverted />
          <p className="mt-5 max-w-md text-foam/75">
            Area sosta camper fronte mare a Torre Ellera di Camini, sulla SS 106
            Ionica, a pochi minuti da Riace Marina.
          </p>
          <p className="mt-4 text-sm text-foam/60">{site.open} · Cani ammessi</p>
        </div>

        <div>
          <h2 className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-bronze">
            Esplora
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link className="hover:text-bronze" href="/#servizi">
                Servizi
              </Link>
            </li>
            <li>
              <Link className="hover:text-bronze" href="/#escursioni">
                Escursioni
              </Link>
            </li>
            <li>
              <Link className="hover:text-bronze" href="/#noleggio">
                Noleggio auto e scooter
              </Link>
            </li>
            <li>
              <Link className="hover:text-bronze" href="/prenota">
                Prenota
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-bronze">
            Contatti
          </h2>
          <address className="mt-4 space-y-2 text-sm not-italic text-foam/80">
            <p>{site.address}</p>
            <p>
              <a className="hover:text-bronze" href={site.phoneHref}>
                {site.phone}
              </a>
            </p>
            <p>
              <a className="hover:text-bronze" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
          </address>
          <p className="mt-6">
            <Link
              className="text-sm underline decoration-bronze/50 underline-offset-4 hover:text-bronze"
              href="/accessibilita"
            >
              Guida per l&apos;accessibilità
            </Link>
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-foam/50 sm:flex-row sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Area sosta I Bronzi · Demo Next.js</p>
          <p>4,6/5 su Google · 107 recensioni</p>
        </div>
      </div>
    </footer>
  );
}
