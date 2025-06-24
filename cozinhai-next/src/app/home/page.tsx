"use client";

import Header from "@/components/Header";
import RecomendacaoCard from "@/components/RecomendacaoCard";
import styles from "../styles/home.module.css";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import IngredientesDaEpoca from "@/components/ingredientes-da-epoca";
import { apiKey } from "@/app/receitas/page";
import Image from "next/image";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<{ name: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [recipes, setRecipes] = useState<any[]>([]);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (inputValue.trim() === "") {
        setSuggestions([]);
        return;
      }

      fetch(
        `https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=${apiKey}&query=${inputValue}`
      )
        .then((res) => res.json())
        .then((data) => {
          setSuggestions(data);
        })
        .catch((err) => {
          console.error("Erro ao sugerir ingredientes", err);
        })
        .finally(() => setIsLoading(false));
      setIsLoading(true);
    }, 2000);

    return () => clearTimeout(delayDebounce);
  }, [inputValue]);

  const handleSuggestionClick = (value: any) => {
    setInputValue(value);
    setSuggestions([]);
  };

  function handleIngredient() {
    const trimmedValue = inputValue.trim();
    if (trimmedValue && !ingredients.includes(trimmedValue)) {
      const newIngredients = [...ingredients, trimmedValue];
      setIngredients(newIngredients);
      setInputValue("");
    }
  }

  function removeIngredient(index: number) {
    const newList = [...ingredients];
    newList.splice(index, 1);
    setIngredients(newList);
  }

  async function searchRecipes() {
    const ingredientsInUrl = ingredients.join(",+");
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${ingredientsInUrl}`
      );
      const data = await response.json();
      // data is an array of recipes, each with a 'title' property
      if (Array.isArray(data) && data.length > 0) {
        setRecipes(data);
        // logs the title of the first recipe
      } else {
        console.log("No recipes found.");
      }
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  }

  return (
    <div className="bg-[#FFFFFF] min-h-screen w-full">
      <Header />
      <div
        className={`flex flex-col items-center justify-center gap-20 px-4 py-16 sm:px-6 ${styles.main}`}
      >
        <div className="relative w-[12rem] aspect-[3/1]">
  <Image
    src="/images/fullLogo.svg"
    alt="Logo completo"
    fill
    className="object-contain"
  />
</div>

        <main className="flex flex-col items-center w-full">
          <h1 className="text-[#22577A] font-bold text-xl sm:text-2xl p-6 sm:p-10 text-center">
            Pesquise seus ingredientes
          </h1>
          <div
            className={`flex w-full max-w-xs sm:max-w-md items-center border-2 border-[#22577A] rounded-xl px-3 ${styles.inputContainer}`}
          >
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              type="text"
              placeholder="Busque um ingrediente"
              className={`flex-grow bg-transparent py-2 text-black font-alexandria text-sm sm:text-base ${styles.input}`}
            />

            <button onClick={handleIngredient}>
              <img
                src="/images/addIcon.svg"
                className={`w-4 sm:w-5 ${styles.lupaIcon}`}
              />
            </button>
          </div>

          {isLoading && (
            <div className="relative mt-1 text-sm items-start">
              Carregando...
            </div>
          )}
          {suggestions.length > 0 && (
            <ul className="relative z-10 w-full bg-white border rounded shadow mt-1 max-w-2/5">
              {suggestions.map((item, idx) => (
                <li
                  key={idx}
                  onClick={() => handleSuggestionClick(item.name)}
                  className="p-1 cursor-pointer hover:bg-gray-300"
                >
                  {item.name}
                </li>
              ))}
            </ul>
          )}

          <div className="p-3 flex flex-wrap gap-3 justify-center">
            {ingredients.map((item, index) => (
              <div
                key={index}
                className="flex gap-2 sm:gap-3 bg-[#57cc9977] py-1.5 px-3 rounded-2xl items-center"
              >
                <span className="text-[#22577A] text-sm sm:text-base">
                  {item}
                </span>
                <button
                  onClick={() => removeIngredient(index)}
                  className="text-[#22577A]"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
          <button
            className="text-[#FFFFFF] bg-[#22577A] px-4 py-2 rounded-3xl m-8"
            onClick={() => searchRecipes()}
          >
            Buscar Receita
          </button>
        </main>

        {recipes &&
          recipes.map((item, idx) => (
            <RecomendacaoCard
              key={idx}
              title={item.title}
              image={item.image}
              slug={item.title}
            />
          ))}

        <h1 className="text-[#22577A] font-bold text-xl sm:text-2xl text-center">
          Recomendações Diárias
        </h1>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <RecomendacaoCard
            image="images/miniChurros.svg"
            title="Mini Churros"
            slug="mini-churros"
          />
          <RecomendacaoCard
            image="images/panquecaDeBanana.svg"
            title="Panqueca de Banana"
            slug="panqueca-de-banana"
          />
          <RecomendacaoCard
            image="images/boloDeCaneca.svg"
            title="Bolo de Caneca"
            slug="bolo-de-caneca"
          />
        </div>

        {/* <RandomRecommendations number={3} title="Sugestões do Dia" /> */}

        <IngredientesDaEpoca />
      </div>
      <Footer />
    </div>
  );
}
