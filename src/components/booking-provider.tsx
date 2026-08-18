"use client";

import { createContext, useCallback, useContext, useMemo, useSyncExternalStore, type ReactNode } from "react";
import {
  addDraftExtra,
  clearDraft,
  emptyDraft,
  getDraft,
  patchDraft,
  subscribeDraft,
  type BookingDraft,
} from "@/lib/booking";

type BookingContextValue = {
  draft: BookingDraft;
  update: (patch: Partial<BookingDraft>) => void;
  addExtra: (id: string) => void;
  reset: () => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const draft = useSyncExternalStore(subscribeDraft, getDraft, () => emptyDraft);

  const update = useCallback((patch: Partial<BookingDraft>) => {
    patchDraft(patch);
  }, []);

  const addExtra = useCallback((id: string) => {
    addDraftExtra(id);
  }, []);

  const reset = useCallback(() => {
    clearDraft();
  }, []);

  const value = useMemo(
    () => ({ draft, update, addExtra, reset }),
    [draft, update, addExtra, reset],
  );

  return (
    <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) {
    throw new Error("useBooking deve stare dentro BookingProvider");
  }
  return ctx;
}
