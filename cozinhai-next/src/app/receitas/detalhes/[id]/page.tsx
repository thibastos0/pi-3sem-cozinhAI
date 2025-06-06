"use client"

import { notFound } from 'next/navigation';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';


export default async function ReceitaPage() {
  const params = useParams()
  const idReceita = params.id
  const chaveApi = "" //ligar no .env
  const fetchUrl = `https://api.spoonacular.com/recipes/${idReceita}/information?apiKey=${chaveApi}`

  let data
  try {
    const response = await fetch(fetchUrl)

    if (!response.ok) {
      throw new Error(`Erro ao buscar as receitas`);
    }

    data = await response.json()
  } catch (error) {
    console.error("Erro ao carregar detalhes da receita:", error)
    return (
      <>
        <p>Erro, por favor tente novamente</p>
        <Link href="/home" />
      </>
    )
  }

  if (data){
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />

      <main className="flex flex-col items-center px-6 py-12 gap-8">
        <img
          src="/images/fullLogo.svg"
          alt="Logo Cozinhaí"
          className="w-64 mb-6"
        />

        <h1 className="text-[#22577A] font-bold text-3xl text-center">🍽️ {data.title}</h1>

        <Image
          src={data.image}
          alt={data.title}
          width={300}
          height={200}
          className="rounded-2xl border-2 border-[#22577A]"
        />

        <div className="text-[#22577A] text-lg font-medium w-full max-w-2xl flex flex-col gap-3">
          <p><strong>Serve:</strong> {data.servings}</p>
          <p><strong>Modo de preparo:</strong> {data.instructions}</p>
          <p><strong>Tempo de preparo:</strong> {data.readyInMinutes} minutos</p>
        </div>

        <div className="w-full max-w-2xl">
          <h3 className="text-[#22577A] font-bold text-xl mt-6 mb-2">Ingredientes:</h3>
          <ul className="list-disc list-inside text-[#22577A] text-lg font-medium">
            {data.ingredient.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h3 className="text-[#22577A] font-bold text-xl mt-6 mb-2">Modo de preparo:</h3>
          <p className="text-[#22577A] text-lg font-medium whitespace-pre-line">
            {receita.preparo}
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
}