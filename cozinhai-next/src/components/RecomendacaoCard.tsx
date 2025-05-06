import styles from "../app/styles/home.module.css";
import Botao from "./Botao";

export type CardProps = {
  image: any;
  title: string;
};

export default function RecomendacaoCard({ image, title }: CardProps) {
  return (
    <div
      className={` bg-[#FFFFFF] border-[#22577A] border-2 rounded-3xl flex items-center justify-center w-1/4 ${styles.card}`}
    >
      <div className="flex flex-col gap-2 justify-start">
        <div className={`${styles.imgContainer}`}>
          <img src={image} className="rounded-[22px]" />
        </div>
        <h2 className="font-semibold text-[#22577A] text-[22px] min-h-17">
          {title}
        </h2>
        <Botao texto="Ver Receita" destino="*" />
      </div>
    </div>
  );
}
