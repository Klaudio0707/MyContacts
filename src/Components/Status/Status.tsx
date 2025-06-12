import styles from "./styles.module.css"

const Status = () => {
  return (
    <section className={styles.container_Status}>
      <p className={styles.status_Tarefas}><span className={styles.count_Tarefas}>3</span> Contatos</p>
      <button className={styles.status_BtnNovaTarefa}>Novo Contato</button>
    </section>
  )
}

export default Status