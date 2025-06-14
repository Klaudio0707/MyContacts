import styles from "./styles.module.css"
import { useEffect, useState } from "react";
import NewContacts from "../NewContacts/NewContacts";



function useInterval(callback: () => void, delay: number) {
  useEffect(() => {
    const interval = setInterval(callback, delay);
    return () => clearInterval(interval); 
  }, [callback, delay]);
}

const Status = () => {
  const [showNewContacts, setShowNewContacts] = useState(false);
  const [contactCount, setContactCount] = useState(0);


  const checkContacts = () => {
    const existingContact = JSON.parse(localStorage.getItem("contacts") || "[]");
    setContactCount(existingContact.length);
  };

 
  useInterval(checkContacts, 2000);

 
  useEffect(() => {
    checkContacts();
  }, []);
 
  return (
    <section className={styles.container}>
    <section className={styles.container_Status}>
      <p className={styles.status_Tarefas}><span className={styles.count_Tarefas}>{contactCount}</span> Contatos</p>
      <button onClick={() => setShowNewContacts((prev: unknown) => !prev)} className={styles.status_BtnNovaTarefa}>
        {showNewContacts ? "Ocultar" :  "Novo Contato"}
        </button>
    </section>
        {showNewContacts && <NewContacts />}
    </section>
  )
}

export default Status