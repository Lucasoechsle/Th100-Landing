import Link from "next/link"
import Image from "next/image"

const products = [
  {
    id: 1,
    name: "TH100 Standard",
    description: "Batería estándar para motos de baja cilindrada",
    image: "/placeholder.svg?height=300&width=300",
    category: "standard",
  },
  {
    id: 2,
    name: "TH100 Pro",
    description: "Batería de alto rendimiento para motos deportivas",
    image: "/placeholder.svg?height=300&width=300",
    category: "premium",
  },
  {
    id: 3,
    name: "TH100 Endurance",
    description: "Batería de larga duración para viajes extensos",
    image: "/placeholder.svg?height=300&width=300",
    category: "premium",
  },
  {
    id: 4,
    name: "TH100 Eco",
    description: "Batería ecológica con menor impacto ambiental",
    image: "/placeholder.svg?height=300&width=300",
    category: "eco",
  },
]

const FeaturedProducts = () => {
  return (
    <section id="productos" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary">Productos Destacados</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mt-4 mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Descubre nuestra selección de baterías de alta calidad diseñadas para maximizar el rendimiento de tu moto.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link key={product.id} href={`/productos/${product.id}`}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 hover:shadow-lg border border-gray-200">
                <div className="relative h-48 bg-blue-50">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                  <p className="text-gray-600 mt-2">{product.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/productos"
            className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium"
          >
            Ver Todos los Productos
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts