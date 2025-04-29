import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-between px-8 py-4 bg-[#EDF2F4]">
        <div className="flex items-center space-x-4">
          <img src="/images/logo.png" alt="Logo da CozinhAi" className="h-12 w-auto" />
          <h1 className="text-4xl font-bold" style={{ fontFamily: 'DaCherry' }}>
            CozinhAI
          </h1>
        </div>

        <button className="bg-gradient-to-r from-green-400 to-teal-500 text-white px-6 py-2 rounded-full shadow-md hover:brightness-110 transition">
          Experimente agora!
        </button>
      </div>

    </>
  );
}
