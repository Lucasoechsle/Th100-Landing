import Link from "next/link"
import CatalogFooter from "@/components/catalog-footer"
import CatalogNavbar from "@/components/catalog-navbar"
import { productDetails } from "@/lib/products"

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const productId = Number.parseInt(id)
  const product = productDetails.find((p) => p.id === productId) || productDetails[0]

  return (
    <div className="min-h-screen bg-white">
      <CatalogNavbar />
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
      <CatalogFooter />
    </div>
  )
}