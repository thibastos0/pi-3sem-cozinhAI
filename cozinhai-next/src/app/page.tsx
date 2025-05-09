import Botao from "@/components/Botao";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-between px-8 py-4 bg-[#EDF2F4] padding-x" style={{ height: '9.063rem', padding: '1rem 5rem' }}>
        <div className="flex items-center space-x-4">
          <img src="/images/logo.svg" alt="Logo da CozinhAi" className="h-12 w-auto" />
          <h1 className="text-4xl font-bold bg-gradient-to-t from-[#22577A] to-[#57CC99] bg-clip-text text-transparent" style={{ fontFamily: 'DaCherry', cursor: 'default', marginLeft: '0.4rem' }}>
            CozinhAI
          </h1>
        </div>

        <Botao texto="Experimente agora!" destino="/home" />
      </div>

      <div className="relative w-full"> {/*div que contém a imagem da salada e o texto que a sobrepõe.*/}
        <div>
          <img alt="Bowl de salada com milho, tomate, ovos, e frango" src="/images/salada.svg" className="absolute inset-0 w-full h-full object-cover z-0" />
        </div>
        <div className="relative z-10 flex flex-col justify-center items-start h-full w-[454px] ml-[163px] py-8">
          <h1 className="bold" style={{ fontFamily: 'Alexandria', fontSize: "63.12px", fontWeight: "bold" }}>Lorem Ipsum!</h1>
          <p style={{ fontSize: "31.56px", fontWeight: "300" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been </p>
          <div className="py-10 flex justify-start">
            <Botao texto="Experimente agora!" destino="/home" fontSize="28.92px" />
          </div>
        </div>
      </div>

      <h2 style={{fontFamily: 'Alexandria', fontSize: "60.88px", fontWeight: "bold"}}>Seja seu próprio chefe!</h2>
    </>
  );
}
