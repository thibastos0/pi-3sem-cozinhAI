import { CardProps } from "./RecomendacaoCard";
import styles from "../app/styles/home.module.css";

export default function IngredientCard({ image, title }: CardProps) {
  return (
    <div className="w-full sm:w-auto">
      <div className={`bg-white border-[#22577A] flex flex-col items-center rounded-4xl border-2 gap-4 p-4 ${styles.ingredientCard}`}>
        <img className="w-16 sm:w-18" src={image} />
        <p className="font-semibold text-[#22577A] text-lg sm:text-2xl text-center">{title}</p>
      </div>
    </div>
  );
}
