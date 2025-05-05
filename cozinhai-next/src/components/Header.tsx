import styles from "../app/styles/home.module.css";

export default function Header() {
  return (
    <div className="bg-[#EDF2F4] flex w-full">
      <header
        className={`flex flex-row items-center gap-7 justify-between w-full ${styles.header}`}
      >
        <button>
          <img className="" src="/images/menuHeader.svg" />
        </button>

        <div className={styles.inputContainer}>
          <input
            className={`border-[#22577A] rounded-xl text-black border-2 p-1 font-alexandria w-lg ${styles.input}`}
            type="text"
            placeholder="Buscar"
          />
          <button>
            <img
              className={styles.lupaIcon}
              src="/images/lupaIcon.svg"
              alt=""
            />
          </button>
        </div>

        <button>
          <img className="w-7.5" src="/images/profileIcon.svg" alt="" />
        </button>
      </header>
    </div>
  );
}
