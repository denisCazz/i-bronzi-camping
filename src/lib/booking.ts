export type BookingDraft = {
  nome: string;
  email: string;
  telefono: string;
  tipo: string;
  arrivo: string;
  partenza: string;
  ospiti: string;
  mezzi: string;
  extras: string[];
  note: string;
};

export const BOOKING_STORAGE_KEY = "ibronzi-prenota";

export const emptyDraft: BookingDraft = {
  nome: "",
  email: "",
  telefono: "",
  tipo: "camper",
  arrivo: "",
  partenza: "",
  ospiti: "2",
  mezzi: "1",
  extras: [],
  note: "",
};

let memory: BookingDraft | null = null;
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

export function loadDraft(): BookingDraft {
  if (typeof window === "undefined") return emptyDraft;
  try {
    const raw = sessionStorage.getItem(BOOKING_STORAGE_KEY);
    if (!raw) return emptyDraft;
    const parsed = JSON.parse(raw) as Partial<BookingDraft>;
    return {
      ...emptyDraft,
      ...parsed,
      extras: Array.isArray(parsed.extras) ? parsed.extras : [],
    };
  } catch {
    return emptyDraft;
  }
}

export function getDraft(): BookingDraft {
  if (!memory) memory = loadDraft();
  return memory;
}

export function subscribeDraft(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function writeDraft(next: BookingDraft) {
  memory = next;
  if (typeof window !== "undefined") {
    sessionStorage.setItem(BOOKING_STORAGE_KEY, JSON.stringify(next));
  }
  emit();
}

export function patchDraft(patch: Partial<BookingDraft>) {
  writeDraft({ ...getDraft(), ...patch });
}

export function addDraftExtra(id: string) {
  const current = getDraft();
  if (current.extras.includes(id)) return;
  writeDraft({ ...current, extras: [...current.extras, id] });
}

export function clearDraft() {
  memory = emptyDraft;
  if (typeof window !== "undefined") {
    sessionStorage.removeItem(BOOKING_STORAGE_KEY);
  }
  emit();
}
