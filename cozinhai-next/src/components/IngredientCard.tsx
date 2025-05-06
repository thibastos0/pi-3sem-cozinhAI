import { CardProps } from "./RecomendacaoCard";
import styles from "../app/styles/home.module.css";

export default function IngredientCard({ image, title }: CardProps) {
  return (
    <div>
      <div
        className={`bg-[#FFFFFF] border-[#22577A] flex flex-col items-center rounded-4xl border-2 gap-4 ${styles.ingredientCard}`}
      >
        <img className="w-18" src={image} />
        <p className="font-semibold text-[#22577A] text-2xl">{title}</p>
      </div>
    </div>
  );
}
