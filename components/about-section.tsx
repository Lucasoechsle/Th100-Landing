import Image from "next/image"

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary">Nuestra Empresa</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mt-4 mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Somos líderes en la fabricación y distribución de baterías para motos, comprometidos con la calidad y la
            innovación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 md:h-96">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Nuestra empresa"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">Compromiso con la Calidad</h3>
            <p className="text-gray-600">
              En TH100, nos dedicamos a proporcionar baterías de la más alta calidad para todo tipo de motos. Nuestros
              productos están diseñados para ofrecer un rendimiento óptimo y una larga vida útil.
            </p>
            <p className="text-gray-600">
              Con más de X años de experiencia en el mercado, hemos perfeccionado nuestros procesos de fabricación para
              garantizar que cada batería cumpla con los estándares más exigentes.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <p className="text-3xl font-bold text-primary">+1000</p>
                <p className="text-gray-600">Clientes Satisfechos</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <p className="text-3xl font-bold text-primary">+50</p>
                <p className="text-gray-600">Distribuidores</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

