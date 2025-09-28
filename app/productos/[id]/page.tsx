import Link from "next/link"

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const productId = Number.parseInt(params.id)

  const products = [
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

  const product = products.find((p) => p.id === productId) || products[0]

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">TH100</div>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-gray-200 font-medium">
              Inicio
            </Link>
            <Link href="/#nosotros" className="hover:text-gray-200 font-medium">
              Nosotros
            </Link>
            <Link href="/#productos" className="hover:text-gray-200 font-medium">
              Productos
            </Link>
            <Link href="/#contacto" className="hover:text-gray-200 font-medium">
              Contacto
            </Link>
            <Link href="/productos" className="bg-red-600 px-4 py-2 rounded-md hover:bg-red-700 font-medium">
              Ver Catálogo
            </Link>
          </div>
        </div>
      </nav>
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/productos" className="text-blue-600 hover:text-blue-800 flex items-center mb-8">
            ← Volver a Productos
          </Link>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="h-80 bg-blue-50 rounded-lg flex items-center justify-center">
              <div className="text-blue-300 text-8xl">TH100</div>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
              <div className="w-16 h-1 bg-red-600 my-4"></div>
              <p className="text-lg text-gray-600 mb-6">{product.description}</p>
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Especificaciones</h2>
                <ul className="space-y-2">
                  {product.details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Descripción</h2>
              <p className="text-gray-600">{product.longDescription}</p>
              <div className="mt-8">
                <Link
                  href="/#contacto"
                  className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 inline-block font-medium"
                >
                  Solicitar Información
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">TH100</h3>
              <p>Baterías de alta calidad para todo tipo de motos.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Enlaces</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-gray-200">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="/#nosotros" className="hover:text-gray-200">
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="/#productos" className="hover:text-gray-200">
                    Productos
                  </Link>
                </li>
                <li>
                  <Link href="/#contacto" className="hover:text-gray-200">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contacto</h3>
              <ul className="space-y-2">
                <li>Email: info@th100.com</li>
                <li>Teléfono: (123) 456-7890</li>
                <li>Dirección: Av. Principal 123, Ciudad</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-500 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} TH100. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}