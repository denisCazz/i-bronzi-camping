"use client";

import { BookingProvider } from "@/components/booking-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return <BookingProvider>{children}</BookingProvider>;
}
