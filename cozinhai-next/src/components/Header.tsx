import styles from "../app/styles/home.module.css";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <div className="bg-[#EDF2F4] flex w-full">
      <header
        className={`flex flex-row items-center gap-7 justify-between w-full ${styles.header}`}
      >
        <button>
          <img className="" src="/images/menuHeader.svg" />
        </button>

        <SearchBar
          placeholder="Busque receitas"
          imgURL="/images/lupaIcon.svg"
        ></SearchBar>

        <button>
          <img className="w-7.5" src="/images/profileIcon.svg" alt="" />
        </button>
      </header>
    </div>
  );
}
