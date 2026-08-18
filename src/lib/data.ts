export const site = {
  name: "I Bronzi",
  tagline: "Area sosta camper sul Mar Ionio",
  place: "Torre Ellera di Camini · Riace Marina",
  address: "SS 106 Ionica, Via Nazionale — Loc. Camini mare / Torre Ellera, 89040 (RC)",
  shortAddress: "E90, 2 — 89040 Riace (RC)",
  phone: "320 823 3956",
  phoneHref: "tel:+393208233956",
  whatsapp: "https://wa.me/393208233956",
  email: "info@campingibronzi.it",
  coords: { lat: 38.41742, lng: 16.56157 },
  rating: 4.6,
  reviews: 107,
  pitches: 36,
  priceFrom: 18,
  priceTo: 25,
  open: "Aperti tutto l'anno",
} as const;

export const amenities = [
  {
    id: "mare",
    icon: "waves",
    title: "Spiaggia a 3 passi",
    text: "Accesso diretto alla sabbia e al Mar Ionio, senza attraversare strade.",
  },
  {
    id: "stalli",
    icon: "pitch",
    title: "36 piazzole attrezzate",
    text: "Spazi ampi e in piano, con acqua potabile ed elettricità in ogni stallo.",
  },
  {
    id: "docce",
    icon: "shower",
    title: "Docce calde",
    text: "Gettone da 0,50 €. Docce fredde gratuite e lavandini per stoviglie.",
  },
  {
    id: "service",
    icon: "plug",
    title: "Camper service",
    text: "Carico e scarico acque, bagni, lavatrice e illuminazione notturna.",
  },
] as const;

export const includedServices = [
  { title: "Allaccio elettrico 220V", detail: "In ogni piazzola" },
  { title: "Acqua potabile", detail: "Carico diretto in stallo" },
  { title: "Camper service", detail: "Carico e scarico" },
  { title: "Bagni e WC", detail: "Servizi igienici curati" },
  { title: "Docce fredde", detail: "Incluse nella sosta" },
  { title: "Lavandini stoviglie", detail: "Acqua calda" },
  { title: "Illuminazione", detail: "Area recintata" },
  { title: "Cani ammessi", detail: "Sempre i benvenuti" },
] as const;

export const extraServices = [
  { title: "Docce calde", detail: "0,50 € a gettone" },
  { title: "Lavatrice", detail: "Circa 3 €" },
  { title: "Wi-Fi area comune", detail: "Connessione condivisa" },
  { title: "Lido e ristoro", detail: "A circa 300 metri" },
] as const;

export const excursions = [
  {
    slug: "bronzi",
    title: "I Bronzi di Riace",
    place: "Museo Archeologico, Reggio Calabria",
    duration: "Mezza giornata",
    price: "da 45 €",
    image: "/images/bronzi.jpg",
    text: "Partenza in minivan verso il Museo Nazionale della Magna Grecia: i due guerrieri greci ritrovati in queste acque, a pochi chilometri dalla sosta.",
  },
  {
    slug: "gerace",
    title: "Gerace e la Cattolica di Stilo",
    place: "Borghi della Locride",
    duration: "Giornata intera",
    price: "da 55 €",
    image: "/images/gerace.jpg",
    text: "Vicoli di pietra, cattedrale normanna e la piccola chiesa bizantina a pianta greca: il cuore medievale della Calabria ionica.",
  },
  {
    slug: "barca",
    title: "Costa dei Gelsomini in barca",
    place: "Partenza da Riace Marina",
    duration: "3 ore",
    price: "da 40 €",
    image: "/images/hero-ionio.jpg",
    text: "Calette, acqua cristallina e sosta per il bagno. Ideale al tramonto, quando il Ionio diventa bronzo.",
  },
  {
    slug: "locri",
    title: "Locri Epizefiri e Kaulon",
    place: "Parchi archeologici",
    duration: "Mezza giornata",
    price: "da 38 €",
    image: "/images/locri.jpg",
    text: "Templi, mosaici e musei a cielo aperto: la Magna Grecia a pochi minuti di strada dalla piazzola.",
  },
] as const;

export const rentals = [
  {
    slug: "auto",
    title: "Noleggio auto",
    from: "38 € / giorno",
    image: "/images/lungomare.jpg",
    items: ["Utilitaria o SUV compatto", "Assicurazione inclusa", "Consegna in area sosta"],
  },
  {
    slug: "scooter",
    title: "Scooter e vespe",
    from: "28 € / giorno",
    image: "/images/gerace-via.jpg",
    items: ["50 cc e 125 cc", "Casco in dotazione", "Ideale per i borghi"],
  },
  {
    slug: "ebike",
    title: "E-bike e kayak",
    from: "18 € / giorno",
    image: "/images/le-castella.jpg",
    items: ["Bici elettriche", "Kayak da spiaggia", "Percorsi consigliati"],
  },
] as const;

export const reviews = [
  {
    name: "Silvia",
    score: 5,
    when: "1 mese fa",
    text: "Area camper molto bella, curata, fronte mare con una spiaggia infinita e pochissima gente. Doccia acqua calda 0,50 €. Lavandini per stoviglie e bucato.",
  },
  {
    name: "Piero",
    score: 5,
    when: "5 mesi fa",
    text: "Alla ricerca dei Bronzi, approdiamo qui. Proprietari gentilissimi e disponibili. Piazzole con acqua ed elettricità, mare a tre secondi.",
  },
  {
    name: "Maurizio",
    score: 4,
    when: "11 mesi fa",
    text: "Posizione favolosa, servizi onesti, gestori cortesi. Unica nota: un po’ di rumore dalla statale se sei nelle file più vicine. Torneremo.",
  },
] as const;

export const gallery = [
  {
    src: "/images/hero-ionio.jpg",
    alt: "Spiaggia di Roccella Jonica, Costa dei Gelsomini",
  },
  {
    src: "/images/le-castella.jpg",
    alt: "Le Castella, Isola di Capo Rizzuto, Calabria ionica",
  },
  {
    src: "/images/riace-paese.jpg",
    alt: "Riace paese, borgo sulla collina sopra la marina",
  },
  {
    src: "/images/gerace.jpg",
    alt: "Piazza Tre Chiese a Gerace, Locride",
  },
  {
    src: "/images/locri.jpg",
    alt: "Scavi di Locri Epizefiri",
  },
  {
    src: "/images/stilo.jpg",
    alt: "La Cattolica di Stilo, chiesa bizantina",
  },
] as const;

export const stayTypes = [
  { value: "camper", label: "Camper" },
  { value: "caravan", label: "Caravan" },
  { value: "tenda", label: "Tenda" },
  { value: "auto", label: "Auto + tenda" },
] as const;

export const extras = [
  { id: "esc-bronzi", label: "Escursione Bronzi di Riace" },
  { id: "esc-gerace", label: "Escursione Gerace e Stilo" },
  { id: "esc-barca", label: "Tour in barca" },
  { id: "esc-locri", label: "Escursione Locri e Kaulon" },
  { id: "rent-auto", label: "Noleggio auto" },
  { id: "rent-scooter", label: "Noleggio scooter" },
  { id: "rent-ebike", label: "Noleggio e-bike / kayak" },
] as const;
