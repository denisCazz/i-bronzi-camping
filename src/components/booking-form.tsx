"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useBooking } from "@/components/booking-provider";
import { extras, stayTypes } from "@/lib/data";

type Status = "idle" | "sending" | "ok" | "error";

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

export function BookingForm({ compact = false }: { compact?: boolean }) {
  const { draft, update, addExtra, reset } = useBooking();
  const [status, setStatus] = useState<Status>("idle");
  const [code, setCode] = useState("");
  const minDate = useMemo(() => todayISO(), []);
  const searchParams = useSearchParams();
  const extraFromUrl = searchParams.get("extra");

  useEffect(() => {
    if (extraFromUrl) addExtra(extraFromUrl);
  }, [extraFromUrl, addExtra]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/prenota", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...draft,
          extras: draft.extras.join(", "),
        }),
      });
      const data = (await res.json()) as { ok: boolean; id?: string };
      if (!res.ok || !data.ok) throw new Error("fail");
      setCode(data.id ?? "");
      setStatus("ok");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div
        className="rounded-3xl border border-bronze/30 bg-paper p-8 text-center"
        role="status"
      >
        <p className="text-[0.72rem] uppercase tracking-[0.22em] text-bronze-deep">
          Richiesta inviata
        </p>
        <h3 className="mt-3 font-serif text-3xl">Grazie, ti ricontattiamo presto</h3>
        <p className="mt-3 text-ink-soft">
          Codice pratica <strong className="text-ink">{code}</strong>. Questa è
          una demo: nessun pagamento è stato addebitato.
        </p>
        <button
          type="button"
          className="mt-6 rounded-full border border-bronze/40 px-5 py-2 text-sm"
          onClick={() => setStatus("idle")}
        >
          Nuova richiesta
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}
      noValidate
    >
      <p className="text-xs text-ink-soft sm:col-span-2">
        Home e pagina Prenota condividono la stessa richiesta: i campi restano
        compilati se cambi pagina o aggiungi un&apos;escursione.
      </p>
      <Field
        label="Nome e cognome"
        name="nome"
        autoComplete="name"
        required
        value={draft.nome}
        onChange={(value) => update({ nome: value })}
      />
      <Field
        label="Email"
        name="email"
        type="email"
        autoComplete="email"
        required
        value={draft.email}
        onChange={(value) => update({ email: value })}
      />
      <Field
        label="Telefono"
        name="telefono"
        type="tel"
        autoComplete="tel"
        required
        value={draft.telefono}
        onChange={(value) => update({ telefono: value })}
      />
      <label className="grid gap-1.5 text-sm">
        <span className="font-medium">Tipo di soggiorno</span>
        <select
          name="tipo"
          required
          className="h-12 rounded-xl border border-bronze/25 bg-paper px-3"
          value={draft.tipo}
          onChange={(e) => update({ tipo: e.target.value })}
        >
          {stayTypes.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </label>
      <Field
        label="Arrivo"
        name="arrivo"
        type="date"
        required
        min={minDate}
        value={draft.arrivo}
        onChange={(value) => update({ arrivo: value })}
      />
      <Field
        label="Partenza"
        name="partenza"
        type="date"
        required
        min={minDate}
        value={draft.partenza}
        onChange={(value) => update({ partenza: value })}
      />
      <Field
        label="Ospiti"
        name="ospiti"
        type="number"
        min="1"
        max="12"
        required
        value={draft.ospiti}
        onChange={(value) => update({ ospiti: value })}
      />
      <Field
        label="Mezzi / piazzole"
        name="mezzi"
        type="number"
        min="1"
        max="4"
        required
        value={draft.mezzi}
        onChange={(value) => update({ mezzi: value })}
      />

      <fieldset className="sm:col-span-2">
        <legend className="mb-3 text-sm font-medium">
          Escursioni e noleggio (facoltativi)
        </legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {extras.map((extra) => (
            <label
              key={extra.id}
              className="flex items-center gap-3 rounded-xl border border-bronze/20 bg-cream/60 px-3 py-2.5 text-sm"
            >
              <input
                type="checkbox"
                name="extras"
                value={extra.id}
                className="size-4 accent-bronze-deep"
                checked={draft.extras.includes(extra.id)}
                onChange={(e) => {
                  const next = e.target.checked
                    ? [...draft.extras, extra.id]
                    : draft.extras.filter((id) => id !== extra.id);
                  update({ extras: next });
                }}
              />
              {extra.label}
            </label>
          ))}
        </div>
      </fieldset>

      <label className={`grid gap-1.5 text-sm ${compact ? "" : "sm:col-span-2"}`}>
        <span className="font-medium">Note</span>
        <textarea
          name="note"
          rows={compact ? 3 : 4}
          className="rounded-xl border border-bronze/25 bg-paper px-3 py-2"
          placeholder="Orario di arrivo, animali, allacci, esigenze di accessibilità…"
          value={draft.note}
          onChange={(e) => update({ note: e.target.value })}
        />
      </label>

      {status === "error" && (
        <p className="text-sm text-terracotta sm:col-span-2" role="alert">
          Qualcosa non ha funzionato. Riprova o chiamaci.
        </p>
      )}

      <div className={`flex flex-wrap items-center gap-4 ${compact ? "" : "sm:col-span-2"}`}>
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-full bg-bronze-deep px-7 py-3 text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-cream disabled:opacity-60"
        >
          {status === "sending" ? "Invio in corso…" : "Invia richiesta"}
        </button>
        <p className="text-xs text-ink-soft">
          Demo: la richiesta non parte verso un gestionale reale.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  min,
  max,
  value,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  min?: string;
  max?: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="grid gap-1.5 text-sm">
      <span className="font-medium">
        {label}
        {required ? (
          <span className="text-terracotta" aria-hidden>
            {" "}
            *
          </span>
        ) : null}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-12 rounded-xl border border-bronze/25 bg-paper px-3"
      />
    </label>
  );
}
