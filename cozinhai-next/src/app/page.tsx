import Botao from "@/components/Botao";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-between px-8 py-4 bg-[#EDF2F4] padding-x" style={{ padding: '1rem 5rem'  }}>
        <div className="flex items-center space-x-4">
          <img src="/images/logo.svg" alt="Logo da CozinhAi" className="h-12 w-auto" />
          <h1 className="text-4xl font-bold bg-gradient-to-t from-[#22577A] to-[#57CC99] bg-clip-text text-transparent" style={{ fontFamily: 'DaCherry' }}>
            CozinhAI
          </h1>
        </div>

        <Botao texto="Experimente agora!" destino="" />
      </div>

      <div>
        <h1 className="bold">Lorem Ipsum!</h1>
      </div>
    </>
  );
}
