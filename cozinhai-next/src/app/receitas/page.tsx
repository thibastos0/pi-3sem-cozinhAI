"use client"

import Image from "next/image"
import Header from "@/components/Header" 
import Botao from "@/components/Botao"

const recipes = [
  {
    id: 1,
    name: "Mini Churros",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    id: 2,
    name: "Bolo de Cenoura",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    id: 3,
    name: "Torta de Frango",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    id: 4,
    name: "Bolinho de Chuva",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    id: 5,
    name: "Pastel de Carne",
    image: "/placeholder.svg?height=120&width=120",
  },
]

export default function RecipeResults() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8">
        
        <h1 className="" style={{fontSize: "3.246rem", color: "#2EC4B6"}}>Resultados</h1>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-2xl border-2 border-blue-600 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4">
                {/* Recipe Image */}
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
                  <h3 className="text-xl font-semibold text-blue-600 mb-4">{recipe.name}</h3>
                  <Botao texto="Ver receita" destino="/receitas"/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
