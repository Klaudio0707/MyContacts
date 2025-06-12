import styles from "./styles.module.css"


const FindContacts = () => {
  return (
    <section className={styles.container_Input}>
      <input type="text" placeholder="Pesquise um Contato" className={styles.input_Find}/>
    </section>
  )
}

export default FindContacts