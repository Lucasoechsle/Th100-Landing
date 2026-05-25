import Link from "next/link"

export default function CatalogNavbar() {
  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="shrink-0 text-2xl font-bold">TH100</div>
        <div className="hidden md:flex flex-nowrap items-center gap-6">
          <Link href="/" className="inline-flex items-center whitespace-nowrap font-medium hover:text-gray-200">
            Inicio
          </Link>
          <Link href="/#nosotros" className="inline-flex items-center whitespace-nowrap font-medium hover:text-gray-200">
            Nosotros
          </Link>
          <Link href="/#productos" className="inline-flex items-center whitespace-nowrap font-medium hover:text-gray-200">
            Productos
          </Link>
          <Link href="/#contacto" className="inline-flex items-center whitespace-nowrap font-medium hover:text-gray-200">
            Contacto
          </Link>
          <Link
            href="/productos"
            className="inline-flex items-center whitespace-nowrap rounded-md bg-red-600 px-4 py-2 font-medium hover:bg-red-700"
          >
            Ver Catálogo
          </Link>
        </div>
      </div>
    </nav>
  )
}