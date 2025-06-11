import { Link, useNavigate } from "react-router";
import { auth, provider, signInWithPopup, signOut } from "../../services/firebaseConnection/firebaseConnection";
import styles from "./styles.module.css"
import { useEffect, useState } from "react";

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
    } catch (error) {
      console.error("Erro ao sair:", error);
    }
  };

useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser({
          name: user.displayName || "Usuário",
          email: user.email || "",
        });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);
  return (
    
  <header className={styles.header}>
      <h2>My<span>Contacts</span></h2>
      <section className={styles.content}>
        <nav className={styles.nav}>
          <Link to="/" className={styles.logo}>
            <h1>
              <span className={styles.efect}>Tarefas</span>
              <span>+</span>
            </h1>
          </Link>
          {user && (
            <Link to="/" className={styles.painel}>
              Meu Painel
            </Link>
          )}
        </nav>
        {user ? (
          <button className={styles.loginButton} onClick={handleSignOut}>
            Olá, {user.name}
          </button>
        ) : (
          <button className={styles.loginButton} onClick={handleSignIn}>
            Acessar
          </button>
        )}
      </section>
    </header>
  )
}

export default Header