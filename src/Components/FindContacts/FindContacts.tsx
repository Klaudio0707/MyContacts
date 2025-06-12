import { useRef } from "react";
import styles from "./styles.module.css"
import { MdOutlineContentPasteSearch } from "react-icons/md";



const FindContacts:React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleIconClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <section className={styles.container_Input}>
      <input type="text"  ref={inputRef} placeholder="Pesquisar Contato" className={styles.input_Find}/>
      <button className={styles.search_Btn} onClick={handleIconClick}   aria-label="Pesquisar Contato">
      <MdOutlineContentPasteSearch className={styles.search_Icone}  size={35}/>
      </button>
    </section>
  )
}

export default FindContacts