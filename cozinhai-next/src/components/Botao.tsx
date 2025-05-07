import Link from "next/link";
import React from "react";
import styles from "../app/styles/home.module.css";

interface botaoProps {
  texto: string;
  destino: string;
}

export default function Botao({ texto, destino }: botaoProps) {
  return (
    <Link
      className="bg-gradient-to-t from-[#22577A] to-[#57CC99] px-6 py-2 rounded-full shadow-md hover:brightness-110 transition"
      style={{ padding: "0.5rem" }}
      href={destino}
    >
      <div
        className={`text-white flex flex-row justify-between gap-2 ${styles.buttonContent}`}
      >
        <p>{texto}</p>
        <p>{">"}</p>
      </div>
    </Link>
  );
}
