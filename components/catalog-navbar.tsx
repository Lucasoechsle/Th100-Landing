import Link from "next/link"

export default function CatalogNavbar() {
  return (
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
  )
}
