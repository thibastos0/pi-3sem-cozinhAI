import Botao from "@/components/Botao";
import Footer from "@/components/Footer";

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
        <div className="relative z-10 flex flex-col justify-center items-start h-full w-[28.375rem] ml-[10.188rem] py-8">
          <h1 className="bold" style={{ fontFamily: 'Alexandria', fontSize: "3.945rem", fontWeight: "bold" }}>Sem ideias para o jantar?</h1>
          <p style={{ fontSize: "1.973rem", fontWeight: "300" }}>Selecione o que tem na geladeira e receba sugestões de receitas deliciosas, feitas sob medida para você.</p>
          <div className="py-10 flex justify-start">
            <Botao texto="Experimente agora!" destino="/home" fontSize="28.92px" />
          </div>
        </div>
      </div>

      <h2 className="mt-[67.52] mb-[105] flex justify-center" style={{fontFamily: 'Alexandria', fontSize: "60.88px", fontWeight: "bold"}}>Seja seu próprio chefe!</h2>
      
      <div className="flex items-center mb-[5rem]"> {/* Div que contém a imagem das pessoas cozinhando e o texto que fica lado a lado com ele */}
    <img className="max-w-[40%]" src="/images/cozinheiros.svg" alt="Duas pessoas cozinhando juntas."></img>
      <p className="flex ml-[7.625rem] max-w-[41.87rem]" style={{fontFamily: "Alexandria", fontWeight: "300", fontSize: "38.72px"}}>Menos desperdício e mais sabor no seu dia a dia. Use o que já está em casa e descubra novas receitas criativas para variar no cardápio.</p>
      </div>
    <Footer />
    </>
  );
}
