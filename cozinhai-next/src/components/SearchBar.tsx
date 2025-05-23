import styles from "@/app/styles/home.module.css";
import Link from "next/link";

interface CardProps {
  placeholder: string;
  imgURL: string;
  ref: string
}

export default function SearchBar({ placeholder, imgURL, ref }: CardProps) {
  return (
    <div className={styles.inputContainer}>
      <input
        className={`border-[#22577A] rounded-xl text-black border-2 p-1 font-alexandria w-lg ${styles.input}`}
        type="text"
        placeholder={placeholder}
      />
      <Link href={ref}>
        <img className={`w-5 ${styles.lupaIcon}`} src={imgURL} alt="" />
      </Link>
    </div>
  );
}
