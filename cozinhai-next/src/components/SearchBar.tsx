import styles from "@/app/styles/home.module.css";

interface CardProps {
  placeholder: string;
  imgURL: string;
}

export default function SearchBar({ placeholder, imgURL }: CardProps) {
  return (
    <div className={styles.inputContainer}>
      <input
        className={`border-[#22577A] rounded-xl text-black border-2 p-1 font-alexandria w-lg ${styles.input}`}
        type="text"
        placeholder={placeholder}
      />
      <button>
        <img className={`w-5 ${styles.lupaIcon}`} src={imgURL} alt="" />
      </button>
    </div>
  );
}
