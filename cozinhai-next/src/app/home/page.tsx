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
    console.log(ingredients);
  }

  function removeIngredient(index: number) {
    const newList = [...ingredients];
    newList.splice(index, 1);
    setIngredients(newList);
  }

  return (
    <div className="bg-[#FFFFFF] w-dvw h-dvh">
      <Header />
      <div
        className={`items-center justify-center flex flex-col gap-20 ${styles.main}`}
      >
        <img src="/images/fullLogo.svg" alt="" />

        {/*Seção da API funcionando*/}
        <main className="flex flex-col items-center">
          <h1 className="text-[#22577A] font-bold text-2xl p-10">
            Pesquise seus ingredientes
          </h1>
          <div className={`${styles.inputContainer}`}>
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              type="text"
              placeholder="Busque um ingrediente"
              className={`border-[#22577A] rounded-xl text-black border-2 p-1 font-alexandria w-lg ${styles.input}`}
            />
            <button onClick={handleIngredient}>
              <img
                src="/images/addIcon.svg"
                className={`w-4 ${styles.lupaIcon}`}
              />
            </button>
          </div>
          {/*Seção de ingredientes adicionados */}
          <div className="p-3 flex flex-row gap-3">
            {ingredients.map((item, index) => (
              <div
                key={index}
                className="flex gap-3 bg-[#57cc9977] py-1.5 px-3 rounded-2xl justify-around"
              >
                <span className="text-[#22577A] w-auto">{item}</span>
                <button
                  onClick={() => removeIngredient(index)}
                  className="text-[#22577A]"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </main>

        {/* Seção de recomendações diárias */}
        <h1 className="text-[#22577A] font-bold text-2xl">
          Recomendações Diárias
        </h1>

        {/* Cards de recomendação */}
        <div className="flex flex-row justify-around">
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

        {/* Seção de ingredientes da época */}
        <div className="flex flex-col justify-center items-center gap-16 my-24">
          <h1 className="text-[#22577A] font-bold text-2xl">
            Ingredientes da Época
          </h1>
          <p
            className={`text-white bg-[#22577A] rounded-3xl ${styles.estacao} w-3xs text-center`}
          >
            Estação Atual: <strong>Outono</strong>
          </p>
          <div className="flex flex-row gap-11 justify-center w-full">
            <IngredientCard
              image="images/ameixaIcon.svg"
              title="Ameixa"
              slug={""}
            />
            <IngredientCard
              image="images/cenouraIcon.svg"
              title="Cenoura"
              slug={""}
            />
            <IngredientCard
              image="images/abacateIcon.svg"
              title="Abacate"
              slug={""}
            />
            <IngredientCard
              image="images/aboboraIcon.svg"
              title="Abóbora"
              slug={""}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
