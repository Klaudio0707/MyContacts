import { useState } from "react";
import style from "./styles.module.css"



const NewContacts: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

const generaterID = () => {
    return Math.random().toString(36).substring(2, 7);
     
  };

  const handleSave = () => {
    const id = generaterID();
    const date = new Date().toLocaleDateString();
    const existingContacts = JSON.parse(localStorage.getItem("contacts") || "[]");
    const newContact = {id,date, name, email, phone };

    localStorage.setItem("contacts", JSON.stringify([...existingContacts, newContact]));

    setName("");
    setEmail("");
    setPhone("");
        // window.location.reload();
  };

  return (
    <article className={style.container_NewContact}>
      <h2 className={style.Title_NewContact}>Novo Contato</h2>
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
       <input
        type="number"
        placeholder="Telefone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={handleSave}>Salvar</button>
    </article>
  );
};

export default NewContacts;
