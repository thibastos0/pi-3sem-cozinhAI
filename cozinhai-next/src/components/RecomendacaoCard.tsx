import styles from "../app/styles/home.module.css";
import Botao from "./Botao";
import Image from "next/image";

export type CardProps = {
    image?: string;
    title: string;
    slug: string;
};

export default function RecomendacaoCard({ image, title, slug }: CardProps) {
    return (
        <div className={`bg-white border-[#22577A] border-2 rounded-3xl flex items-center justify-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 ${styles.card}`}>
            <div className="flex flex-col gap-2 w-full">
                <Image
                    src={image || "/placeholder.png"}
                    alt={title}
                    className="rounded-[22px] w-full object-cover"
                    width={400}
                    height={250}
                    style={{ objectFit: "cover" }}
                />
                <Image
                    src={image || "/placeholder.png"}
                    alt={title}
                    className="rounded-[22px] w-full object-cover"
                    width={400}
                    height={250}
                    style={{ objectFit: "cover" }}
                />
            </div>
            <h2 className="font-semibold text-[#22577A] text-lg md:text-[22px] min-h-17">{title}</h2>
            <Botao texto="Ver Receita" destino={`/receita/${slug}`} />
        </div>
    );
}
