import styles from "../app/styles/home.module.css";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <div className="bg-[#EDF2F4] w-full">
      <header className={`flex items-center justify-between w-full p-4 gap-4 flex-wrap sm:flex-nowrap ${styles.header}`}>
        <button>
          <img className="w-6 sm:w-7 md:w-8" src="/images/menuHeader.svg" />
        </button>

        <SearchBar
          placeholder="Busque receitas"
          imgURL="/images/lupaIcon.svg"
          searchUrl={`https://api.spoonacular.com/recipes/complexSearch?query=${"W.I.P."}&apiKey=${"W.I.P."}`}
        />

        <button>
          <img className="w-6 sm:w-7 md:w-7.5" src="/images/profileIcon.svg" alt="" />
        </button>
      </header>
    </div>
  );
}
