import Header from "@/components/Header";
import RecomendacaoCard from "@/components/RecomendacaoCard";
import styles from "../styles/home.module.css";
import IngredientCard from "@/components/IngredientCard";

export default function Home() {
  return (
    <div className="bg-[#FFFFFF] w-dvw h-dvh">
      <Header />

      {/* Seção de recomendações diárias */}
      <main
        className={`items-center justify-center flex flex-col gap-20 ${styles.main}`}
      >
        <img src="/images/fullLogo.svg" alt="" />
        <h1 className="text-[#22577A] font-bold text-2xl">
          Recomendações Diárias
        </h1>

        <div className="flex flex-row justify-around">
          <RecomendacaoCard
            image="images/miniChurros.svg"
            title="Mini Churros"
          />
          <RecomendacaoCard
            image="images/panquecaDeBanana.svg"
            title="Panqueca de Banana"
          />
          <RecomendacaoCard
            image="images/boloDeCaneca.svg"
            title="Bolo de Caneca"
          />
        </div>
      </main>

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
          <IngredientCard image="images/ameixaIcon.svg" title="Ameixa" />
          <IngredientCard image="images/cenouraIcon.svg" title="Cenoura" />
          <IngredientCard image="images/abacateIcon.svg" title="Abacate" />
          <IngredientCard image="images/aboboraIcon.svg" title="Abóbora" />
        </div>
      </div>
    </div>
  );
}
