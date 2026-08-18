"use client";

import Link from "next/link";
import { useBooking } from "@/components/booking-provider";

export function AddToBookingLink({
  extraId,
  href = "/prenota",
  className,
  children,
}: {
  extraId: string;
  href?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const { addExtra } = useBooking();

  return (
    <Link href={href} className={className} onClick={() => addExtra(extraId)}>
      {children}
    </Link>
  );
}
