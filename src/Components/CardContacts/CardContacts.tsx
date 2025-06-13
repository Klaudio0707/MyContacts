import styles from "./styles.module.css"
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { useEffect, useState } from "react";


interface Contact {
    id:string;
    name: string;
    email: string;
    phone: number;
    date:string;
}

const CardContacts: React.FC = () => {
    const [contacts, setContacts] = useState<Contact[]>([]);
    useEffect(() => {
       const storedContacts = JSON.parse(localStorage.getItem("contacts") || "[]");
       setContacts(storedContacts); 
    },[])
        const handleDelete = (email: string, phone:number ) => {
            const updateContacts = contacts.filter((contact) => contact.email !== email || contact. phone !== phone)
            setContacts(updateContacts);
            localStorage.setItem("contacts", JSON.stringify(updateContacts));
            
        }
  return (
     <section className={styles.container_CardContato}>
      {contacts.map((contact) => (
        <article key={contact.id} className={styles.container_Contacts}>
          <div className={styles.container_Info}>
            <div className={styles.container_TitleContato}>
              <h3>{contact.name}</h3>
              <span className={styles.id_Contato}>{contact.id}</span>
            </div>
            <div className={styles.container_DataContato}>
              <p>E-mail: {contact.email}</p>
              <p>Telefone: {contact.phone}</p>
              <p>Registrado em: {contact.date}</p>
            </div>
          </div>
          <div className={styles.container_Buttons}>
            <button className={styles.btn_Editar}>
              Editar <FaEdit size={15} />
            </button>
            <button
              className={styles.btn_Excluir}
              onClick={() => handleDelete(contact.email, contact.phone)}
            >
              Excluir <RiDeleteBin5Fill size={15} />
            </button>
          </div>
        </article>
      ))}
    </section>
  )
}

export default CardContacts