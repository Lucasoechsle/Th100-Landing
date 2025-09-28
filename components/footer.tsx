import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TH100</h3>
            <p className="text-white">Baterías de alta calidad para todo tipo de motos.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white hover:text-gray-200">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/#nosotros" className="text-white hover:text-gray-200">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/#productos" className="text-white hover:text-gray-200">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="/#contacto" className="text-white hover:text-gray-200">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/productos" className="text-white hover:text-gray-200">
                  Catálogo
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <ul className="space-y-2 text-white">
              <li>Email: info@th100.com</li>
              <li>Teléfono: (123) 456-7890</li>
              <li>Dirección: Av. Principal 123, Ciudad</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-blue-700 mt-8 pt-8 text-center text-white">
          <p>&copy; {new Date().getFullYear()} TH100. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer