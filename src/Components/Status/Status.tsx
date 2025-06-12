import styles from "./styles.module.css"
import { useState } from "react";
import NewContacts from "../NewContacts/NewContacts";



const Status = () => {
    const [showNewContacts, setShowNewContacts] = useState(false);

  return (
    <section className={styles.container}>
    <section className={styles.container_Status}>
      <p className={styles.status_Tarefas}><span className={styles.count_Tarefas}>3</span> Contatos</p>
      <button onClick={() => setShowNewContacts((prev: unknown) => !prev)} className={styles.status_BtnNovaTarefa}>
        {showNewContacts ? "Ocultar" :  "Novo Contato"}
        </button>
    </section>
        {showNewContacts && <NewContacts />}
    </section>
  )
}

export default Status