import Image from "next/image"
import Header from "@/components/Header" 
import Botao from "@/components/Botao"

const recipes = [
  {
    id: 1,
    name: "Mini Churros",
    image: "/images/miniChurros.svg",
  },
  {
    id: 2,
    name: "Bolo de Cenoura",
    image: "/images/boloDeCenoura.svg",
  },
  {
    id: 3,
    name: "Torta de Frango",
    image: "/images/tortaDeFrango.svg",
  },
  {
    id: 4,
    name: "Bolinho de Chuva",
    image: "/images/bolinhoDeChuva.svg",
  },
  {
    id: 5,
    name: "Pastel de Carne",
    image: "/images/pastelDeCarne.svg",
  },
]

export default function RecipeResults() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-4">
        <div className="max-w-4xl mx-auto">
        <h1 className="mb-[1rem]" style={{fontSize: "3.246rem", color: "#2EC4B6"}}>Resultados</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-2xl border-2 border-[#22577A] p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4">

                <div className="flex-shrink-0">
                  <Image
                    src={recipe.image || "/placeholder.svg"}
                    alt={recipe.name}
                    width={120}
                    height={120}
                    className="rounded-lg object-cover"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#22577A] mb-4">{recipe.name}</h3>
                  <Botao texto="Ver receita" destino="/receitas"/>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </main>
    </div>
  )
}
