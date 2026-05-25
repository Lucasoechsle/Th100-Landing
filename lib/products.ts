export type ProductSummary = {
  id: number
  name: string
  description: string
}

export type ProductDetail = ProductSummary & {
  details: string[]
  longDescription: string
}

export const productsCatalog: ProductSummary[] = [
  {
    id: 1,
    name: "TH100 Standard",
    description: "Batería estándar para motos de baja cilindrada",
  },
  {
    id: 2,
    name: "TH100 Pro",
    description: "Batería de alto rendimiento para motos deportivas",
  },
  {
    id: 3,
    name: "TH100 Endurance",
    description: "Batería de larga duración para viajes extensos",
  },
  {
    id: 4,
    name: "TH100 Eco",
    description: "Batería ecológica con menor impacto ambiental",
  },
  {
    id: 5,
    name: "TH100 Sport",
    description: "Diseñada específicamente para motos deportivas",
  },
  {
    id: 6,
    name: "TH100 Classic",
    description: "Ideal para motos clásicas y de colección",
  },
]

export const productDetails: ProductDetail[] = [
  {
    id: 1,
    name: "TH100 Standard",
    description: "Batería estándar para motos de baja cilindrada",
    details: [
      "Capacidad: 12V 4Ah",
      "Dimensiones: 114 x 71 x 106 mm",
      "Peso: 1.5 kg",
      "Vida útil: 3 años",
      "Libre de mantenimiento",
    ],
    longDescription:
      "La batería TH100 Standard está diseñada para proporcionar un rendimiento confiable para motos de baja cilindrada. Con su construcción robusta y tecnología avanzada, ofrece un arranque potente y una larga vida útil.",
  },
  {
    id: 2,
    name: "TH100 Pro",
    description: "Batería de alto rendimiento para motos deportivas",
    details: [
      "Capacidad: 12V 8Ah",
      "Dimensiones: 150 x 87 x 105 mm",
      "Peso: 2.3 kg",
      "Vida útil: 5 años",
      "Tecnología AGM avanzada",
    ],
    longDescription:
      "La batería TH100 Pro está diseñada específicamente para motos deportivas que requieren un alto rendimiento. Con su tecnología AGM avanzada, proporciona una potencia de arranque superior y una excelente resistencia a las vibraciones.",
  },
]