import { Link, useNavigate } from "react-router-dom";
import { auth, provider, signInWithPopup, signOut } from "../../services/firebaseConnection/firebaseConnection";
import {  useEffect, useState } from "react";
import styles from "./styles.module.css";

interface User {
  name: string;
  email: string;
}

const Header: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
 

      navigate("/Contacts")
      console.error("Teste -logi");
      setUser({
        name: user.displayName || "Usuário",
        email: user.email || "",
      });
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
      navigate("/");
      console.log("signOut - Teste")
    } catch (error) {
      console.log("TEste - HandlesingnOut")
      console.error("Erro ao sair:", error);
    }
  };

  useEffect(() => {
    const inscrito = auth.onAuthStateChanged((user) => {
         console.log("onAuthStateChanged chamado. Usuário:", user); 
      if (user) {
        setUser({
          name: user.displayName || "Usuário",
          email: user.email || "",
        });
      } else {
        setUser(null);
        navigate("/");
      }
    });

    return () => inscrito();
  }, [navigate]);

  return (
    <header className={styles.container_Header} >
     
      <section className={styles.container_Logo}>
          <Link to="/Contacts" className={styles.logo}style={{ textDecoration: "none", color: "inherit" }}>
           <h2 className={styles.header_Titulo}>
             My<span className={styles.header_Titulo2}>Contacts</span>
           </h2>
          </Link>
       
        </section>
        <section className={styles.container_Btn}>
          
        {user ?  (
            <button className={styles.loginButton} onClick={handleSignOut}>
            Olá, {user.name} {user.email} 
          </button>
        ) : (
            <button className={styles.loginButton} onClick={handleSignIn}>
            Acessar
          </button>
        )}
         
        </section>
    </header>
  );
};

export default Header;