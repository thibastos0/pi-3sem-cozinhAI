import styles from "@/app/styles/home.module.css";
import Link from "next/link";

interface CardProps {
  placeholder: string;
  imgURL: string;
  searchUrl: string;
}

export default function SearchBar({ placeholder, imgURL, searchUrl }: CardProps) {
  return (
    <div
      className={`flex items-center gap-2 border-2 border-[#22577A] rounded-xl px-2 py-1 w-full max-w-xs sm:max-w-md ${styles.inputContainer}`}
    >
      <input
        className={`text-black w-full outline-none font-alexandria text-sm sm:text-base ${styles.input}`}
        type="text"
        placeholder={placeholder}
      />
      <Link href={searchUrl}>
        <img
          className={`w-4 sm:w-5 ${styles.lupaIcon}`}
          src={imgURL}
          alt="Buscar"
        />
      </Link>
    </div>
  );
}
