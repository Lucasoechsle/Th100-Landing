import Link from "next/link"

export default function Home() {
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
            <Link href="#nosotros" className="hover:text-gray-200 font-medium">
              Nosotros
            </Link>
            <Link href="#productos" className="hover:text-gray-200 font-medium">
              Productos
            </Link>
            <Link href="#contacto" className="hover:text-gray-200 font-medium">
              Contacto
            </Link>
            <Link href="/productos" className="bg-red-600 px-4 py-2 rounded-md hover:bg-red-700 font-medium">
              Ver Catálogo
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <div className="relative h-[400px] bg-gray-800">
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white text-center px-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Baterías TH100</h1>
            <p className="text-xl md:text-2xl">La mejor calidad para tu moto</p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="nosotros" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-600">Nuestra Empresa</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-4 mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Somos líderes en la fabricación y distribución de baterías para motos, comprometidos con la calidad y la
              innovación.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="productos" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-600">Productos Destacados</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-4 mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Descubre nuestra selección de baterías de alta calidad diseñadas para maximizar el rendimiento de tu moto.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((id) => (
              <div key={id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className="h-48 bg-blue-50 flex items-center justify-center">
                  <div className="text-blue-300 text-6xl">TH100</div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">TH100 Modelo {id}</h3>
                  <p className="text-gray-600 mt-2">Batería de alta calidad para motos</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/productos"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium"
            >
              Ver Todos los Productos
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-600">Contáctanos</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-4 mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              ¿Tienes alguna pregunta o necesitas más información? Completa el formulario y nos pondremos en contacto
              contigo.
            </p>
          </div>
        </div>
      </section>

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
                  <Link href="#nosotros" className="hover:text-gray-200">
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="#productos" className="hover:text-gray-200">
                    Productos
                  </Link>
                </li>
                <li>
                  <Link href="#contacto" className="hover:text-gray-200">
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

