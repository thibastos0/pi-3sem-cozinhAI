import Header from "@/components/Header";
import RecomendacaoCard from "@/components/RecomendacaoCard";
import styles from '../styles/home.module.css'

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
          <RecomendacaoCard image="images/miniChurros.svg" title="Mini Churros"/>
          <RecomendacaoCard image="images/panquecaDeBanana.svg" title="Panqueca de Banana"/>
          <RecomendacaoCard image="images/boloDeCaneca.svg" title="Bolo de Caneca"/>
        </div>
      </main>
    </div>
  );
}
