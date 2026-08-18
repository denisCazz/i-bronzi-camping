import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { SkipLink } from "@/components/brand";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Providers } from "@/components/providers";
import { site } from "@/lib/data";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} · Area sosta camper a Riace`,
    template: `%s · ${site.name}`,
  },
  description:
    "Area sosta camper I Bronzi a Torre Ellera di Camini, sul Mar Ionio vicino a Riace Marina. Piazzole con acqua ed elettricità, docce, escursioni e noleggio auto e scooter.",
  metadataBase: new URL("https://campingibronzi.it"),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Campground",
  name: "Area sosta camper I Bronzi",
  telephone: "+393208233956",
  address: {
    "@type": "PostalAddress",
    streetAddress: "SS 106 Ionica, Via Nazionale, Torre Ellera",
    addressLocality: "Camini",
    postalCode: "89040",
    addressRegion: "RC",
    addressCountry: "IT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.coords.lat,
    longitude: site.coords.lng,
  },
  priceRange: "€€",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: site.rating,
    reviewCount: site.reviews,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="it"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SkipLink />
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
