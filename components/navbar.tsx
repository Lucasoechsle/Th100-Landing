"use client"
import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-primary shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-white">TH100</span>
          </div>
          <div className="hidden md:flex flex-nowrap items-center gap-8">
            <Link href="/" className="inline-flex items-center whitespace-nowrap font-medium text-white hover:text-gray-200">
              Inicio
            </Link>
            <Link href="/#nosotros" className="inline-flex items-center whitespace-nowrap font-medium text-white hover:text-gray-200">
              Nosotros
            </Link>
            <Link href="/#productos" className="inline-flex items-center whitespace-nowrap font-medium text-white hover:text-gray-200">
              Productos
            </Link>
            <Link href="/#contacto" className="inline-flex items-center whitespace-nowrap font-medium text-white hover:text-gray-200">
              Contacto
            </Link>
            <Link
              href="/productos"
              className="inline-flex items-center whitespace-nowrap rounded-md bg-secondary px-4 py-2 font-medium text-white hover:bg-opacity-90"
            >
              Ver Catálogo
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-primary">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-white hover:bg-blue-700 font-medium"
              onClick={toggleMenu}
            >
              Inicio
            </Link>
            <Link
              href="/#nosotros"
              className="block px-3 py-2 rounded-md text-white hover:bg-blue-700 font-medium"
              onClick={toggleMenu}
            >
              Nosotros
            </Link>
            <Link
              href="/#productos"
              className="block px-3 py-2 rounded-md text-white hover:bg-blue-700 font-medium"
              onClick={toggleMenu}
            >
              Productos
            </Link>
            <Link
              href="/#contacto"
              className="block px-3 py-2 rounded-md text-white hover:bg-blue-700 font-medium"
              onClick={toggleMenu}
            >
              Contacto
            </Link>
            <Link
              href="/productos"
              className="block px-3 py-2 rounded-md bg-secondary text-white hover:bg-red-600 font-medium"
              onClick={toggleMenu}
            >
              Ver Catálogo
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar