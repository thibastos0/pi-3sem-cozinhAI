import styles from "../app/styles/home.module.css";

export default function Recomendacoes() {
  return (
    <div className="bg-[#FFFFFF] w-dvw h-dvh">
      <main
        className={`items-center justify-center flex flex-col gap-20 ${styles.main}`}
      >
        <img src="/images/fullLogo.svg" alt="" />
        <h1 className="text-[#22577A] font-bold text-2xl">
          Recomendações Diárias
        </h1>
      </main>
    </div>
  );
}
