import Link from "next/link";
import SearchBar from "./SearchBar";
import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-[#EDF2F4] w-full flex items-center justify-center fixed top-0 z-10">
      <header
        className={`flex flex-row items-center justify-around w-full p-4 gap-2 flex-nowrap`}
      >
        <Link href="/home">
          <Image src="/images/homeIcon.svg" alt="Home" width={20} height={20} />
        </Link>

        <SearchBar
          placeholder="Busque receitas"
          imgURL="/images/lupaIcon.svg"
          searchUrl={`https://api.spoonacular.com/recipes/complexSearch?query=${"W.I.P."}&apiKey=${"W.I.P."}`}
        />

        <Link href="#">
          <img
            className="w-6 sm:w-7 md:w-7.5"
            src="/images/profileIcon.svg"
            alt=""
          />
        </Link>
      </header>
    </div>
  );
}
