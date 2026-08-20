import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { amenities, extraServices, includedServices } from "@/lib/data";

export function ServicesPreview() {
  return (
    <section className="bg-foam py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="text-[0.72rem] uppercase tracking-[0.28em] text-sea">
          Servizi
        </p>
        <h2 className="mt-3 font-serif text-5xl text-ink">
          Tutto a tre passi dalla piazzola.
        </h2>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {amenities.map((item) => (
            <li key={item.id}>
              <Link
                href={`/servizi#${item.id}`}
                className="group relative block aspect-[3/4] overflow-hidden rounded-[2rem]"
              >
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sea-deep/85 via-sea-deep/15 to-transparent" />
                <h3 className="absolute inset-x-5 bottom-5 font-serif text-2xl leading-tight text-cream">
                  {item.title}
                </h3>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center">
          <Link
            href="/servizi"
            className="rounded-full bg-bronze-deep px-6 py-3 text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-cream hover:bg-ink"
          >
            Scopri tutti i servizi
          </Link>
        </div>
      </div>
    </section>
  );
}

export function ServicesCatalog() {
  return (
    <div className="mx-auto max-w-7xl px-5 lg:px-8">
      <ul className="grid gap-6 lg:grid-cols-2">
        {amenities.map((item) => (
          <li
            key={item.id}
            id={item.id}
            className="scroll-mt-28 overflow-hidden rounded-[2rem] bg-white shadow-[0_10px_40px_rgba(13,79,99,0.06)] ring-1 ring-sea/8"
          >
            <div className="relative aspect-[16/9]">
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
            <div className="p-6 sm:p-8">
              <span className="grid size-12 place-items-center rounded-2xl bg-foam text-sea">
                <Icon name={item.icon} className="size-6" />
              </span>
              <h2 className="mt-5 font-serif text-3xl tracking-tight">{item.title}</h2>
              <p className="mt-3 leading-relaxed text-ink-soft">{item.text}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-8 grid gap-4 lg:grid-cols-5">
        <div className="rounded-3xl bg-white p-6 ring-1 ring-sea/8 sm:p-8 lg:col-span-3">
          <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-sea">
            Incluso nella sosta
          </h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {includedServices.map((s) => (
              <li key={s.title} className="flex items-start gap-3">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-foam text-sea">
                  <Icon name="check" className="size-3.5" />
                </span>
                <span>
                  <span className="block text-sm font-medium text-ink">{s.title}</span>
                  <span className="text-sm text-ink-soft">{s.detail}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl bg-sea p-6 text-cream sm:p-8 lg:col-span-2">
          <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-bronze">
            Extra a pagamento
          </h2>
          <ul className="mt-5 space-y-4">
            {extraServices.map((s) => (
              <li
                key={s.title}
                className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-3 last:border-0 last:pb-0"
              >
                <span className="font-medium">{s.title}</span>
                <span className="shrink-0 text-sm text-cream/70">{s.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
