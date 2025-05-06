import styles from '../app/styles/home.module.css'
import Botao from './Botao';

type CardProps = {
    image: any;
    title: string;
}

export default function RecomendacaoCard({image, title}: CardProps) {
    return(
    <div className={` bg-[#FFFFFF] border-[#22577A] border-2 rounded-4xl flex items-center justify-center w-1/4 ${styles.card}`}>
        <div className='flex flex-col gap-2'>
            <div className={`${styles.imgContainer}`}>
                <img src={image} className='rounded-[26]' />
            </div>
            <h2 className="font-semibold text-[#22577A] text-[22px]">{title}</h2>
            <Botao texto='Ver Receita' destino='*' />
        </div>
    </div>
    )
}