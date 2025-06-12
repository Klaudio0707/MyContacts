import styles from "./styles.module.css"
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
const CardContacts = () => {
  return (
    <section className={styles.container_CardContato}>
      <article className={styles.container_Contacts}>
        <article className={styles.container_TitleContato}>
        <h3>Matheus</h3>
        <p className={styles.id_Contato}>asdasf22</p>
        </article>
        <article className={styles.container_DataContato}>
          <p>Email</p>
          <p>telefone</p>
        </article>
      </article>
      <article className={styles.button_Edição}>
        <button className={styles.btn_Editar}>Editar <FaEdit size={15}/></button>
        <button className={styles.btn_Excluir}>Excluir <RiDeleteBin5Fill size={15}/></button>
      </article>
    </section>
  )
}

export default CardContacts