"use client";

import Header from "@/components/Header";
import RecomendacaoCard from "@/components/RecomendacaoCard";
import styles from "../styles/home.module.css";
import IngredientCard from "@/components/IngredientCard";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [ingredients, setIngredients] = useState<String[]>([]);

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

  return (
    <div className="bg-[#FFFFFF] min-h-screen w-full">
      <Header />
      <div className={`flex flex-col items-center justify-center gap-20 px-4 sm:px-6 ${styles.main}`}>
        <img src="/images/fullLogo.svg" alt="" className="max-w-full h-auto" />

        <main className="flex flex-col items-center w-full">
          <h1 className="text-[#22577A] font-bold text-xl sm:text-2xl p-6 sm:p-10 text-center">
            Pesquise seus ingredientes
          </h1>
          <div className={`flex w-full max-w-xs sm:max-w-md items-center border-2 border-[#22577A] rounded-xl px-3 ${styles.inputContainer}`}>
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              type="text"
              placeholder="Busque um ingrediente"
              className={`flex-grow bg-transparent py-2 text-black font-alexandria text-sm sm:text-base ${styles.input}`}
            />
            <button onClick={handleIngredient}>
              <img src="/images/addIcon.svg" className={`w-4 sm:w-5 ${styles.lupaIcon}`} />
            </button>
          </div>

          <div className="p-3 flex flex-wrap gap-3 justify-center">
            {ingredients.map((item, index) => (
              <div
                key={index}
                className="flex gap-2 sm:gap-3 bg-[#57cc9977] py-1.5 px-3 rounded-2xl items-center"
              >
                <span className="text-[#22577A] text-sm sm:text-base">{item}</span>
                <button onClick={() => removeIngredient(index)} className="text-[#22577A] text-sm sm:text-base">✕</button>
              </div>
            ))}
          </div>

          <button className="text-[#FFFFFF] bg-[#22577A] px-4 py-2 rounded-3xl m-8">
            Buscar Receita
          </button>
        </main>

        <h1 className="text-[#22577A] font-bold text-xl sm:text-2xl text-center">Recomendações Diárias</h1>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <RecomendacaoCard image="images/miniChurros.svg" title="Mini Churros" slug="mini-churros" />
          <RecomendacaoCard image="images/panquecaDeBanana.svg" title="Panqueca de Banana" slug="panqueca-de-banana" />
          <RecomendacaoCard image="images/boloDeCaneca.svg" title="Bolo de Caneca" slug="bolo-de-caneca" />
        </div>

        <div className="flex flex-col justify-center items-center gap-8 sm:gap-10 my-16 sm:my-24 px-4 w-full">
          <h1 className="text-[#22577A] font-bold text-xl sm:text-2xl text-center">Ingredientes da Época</h1>
          <p className={`text-white bg-[#22577A] rounded-3xl px-4 sm:px-6 py-2 text-center text-sm sm:text-base ${styles.estacao}`}>
            Estação Atual: <strong>Outono</strong>
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 w-full">
            <IngredientCard image="images/ameixaIcon.svg" title="Ameixa" slug="" />
            <IngredientCard image="images/cenouraIcon.svg" title="Cenoura" slug="" />
            <IngredientCard image="images/abacateIcon.svg" title="Abacate" slug="" />
            <IngredientCard image="images/aboboraIcon.svg" title="Abóbora" slug="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
