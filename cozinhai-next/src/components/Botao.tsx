import Link from 'next/link';
import React from 'react';

interface botaoProps {
    texto: string,
    destino: string,
}

export default function Botao({ texto, destino }: botaoProps){
    return(
        <Link className="bg-gradient-to-t from-[#22577A] to-[#57CC99] text-white px-6 py-2 rounded-full shadow-md hover:brightness-110 transition" style={{ padding: '0.5rem' }} href={destino}>{texto}</Link>
    )
}