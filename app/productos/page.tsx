import Link from "next/link"

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: "TH100 Standard",
      description: "Batería estándar para motos de baja cilindrada",
      category: "standard",
    },
    { id: 2, name: "TH100 Pro", description: "Batería de alto rendimiento para motos deportivas", category: "premium" },
    {
      id: 3,
      name: "TH100 Endurance",
      description: "Batería de larga duración para viajes extensos",
      category: "premium",
    },
    { id: 4, name: "TH100 Eco", description: "Batería ecológica con menor impacto ambiental", category: "eco" },
    { id: 5, name: "TH100 Sport", description: "Diseñada específicamente para motos deportivas", category: "premium" },
    { id: 6, name: "TH100 Classic", description: "Ideal para motos clásicas y de colección", category: "standard" },
  ]

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
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-blue-600">Catálogo de Productos</h1>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-4 mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explora nuestra amplia gama de baterías para todo tipo de motos
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link key={product.id} href={`/productos/${product.id}`}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-blue-50 flex items-center justify-center">
                    <div className="text-blue-300 text-6xl">TH100</div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                    <p className="text-gray-600 mt-2">{product.description}</p>
                  </div>
                </div>
              </Link>
            ))}
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