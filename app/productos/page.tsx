import Link from "next/link"
import CatalogFooter from "@/components/catalog-footer"
import CatalogNavbar from "@/components/catalog-navbar"
import { productsCatalog } from "@/lib/products"

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      <CatalogNavbar />
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
            {productsCatalog.map((product) => (
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
      <CatalogFooter />
    </div>
  )
}