"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Botao from "@/components/Botao";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type Recipe = {
  id: number;
  title: string;
  image: string;
};

export const apiKey = "c2fa6379e95a44b1b915074a2b020428"; //posteriormente ligar com o arquivo .env

export default function RecipeResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!query) return;

    const fetchRecipes = async () => {
      setLoading(true), setError(null);

      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?query=${encodeURIComponent(
            query
          )}&apiKey=${apiKey}`
        );

        if (!response.ok) {
          throw new Error(`Erro ao buscar as receitas`);
        }

        const data = await response.json();
        setRecipes(data.results);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipes();
  }, [query]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-4">
        <div className="max-w-4xl mx-auto">
          <h1
            className="mb-[1rem]"
            style={{ fontSize: "3.246rem", color: "#2EC4B6" }}
          >
            Resultados para "{query}"
          </h1>

          {loading && <p>Carregando...</p>}
          {error && <p className="text-red-500">{error}</p>}

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
                      alt={recipe.title}
                      width={120}
                      height={120}
                      className="rounded-lg object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[#22577A] mb-4">
                      {recipe.title}
                    </h3>
                    <Botao texto="Ver receita" destino="/receitas" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {recipes.length === 0 && !loading && !error && (
          <p>Nenhuma receita encontrada.</p>
        )}
      </main>
    </div>
  );
}
