import styles from "./styles.module.css"
import CardContacts from "../../Components/CardContacts/CardContacts"
import Status from "../../Components/Status/Status"
import FindContacts from "../../Components/FindContacts/FindContacts"

function Contacts() {
  return (
    <main className={styles.container}>
      <article className={styles.container_Search}>
        <FindContacts/>
      </article>
          <article className={styles.container_Status}>
            <Status/>
          </article>
      <article className={styles.container_Contatcts}>
          <CardContacts/>
      </article>
    </main>
  )
}

export default Contacts