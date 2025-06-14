import { useEffect, useState } from "react";
import styles from "./styles.module.css";


const slides = [
  {
    id: 1,
    title: "Bem-vindo ao MyContact",
    description:
      "Organize seus contatos de forma fácil e eficiente. Armazene informações importantes em um só lugar.",
    image: "public/organizaçaodedados.jpg",

  },
  {
    id: 2,
    title: "Gerencie com Simplicidade",
    description:
      "Edite, exclua ou adicione contatos de forma rápida. Tudo que você precisa na palma da mão.",
    image: "public/dadosrapidez.jfif", 
  },
  {
    id: 3,
    title: "Seguro e Confiável",
    description:
      "Seus dados armazenados com segurança. Use MyContact para proteger suas informações.",
    image: "public/proteçãodedados.jfif", 
  },
];

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 30000); 

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);

  return (
    <div className={styles.home}>
      <div className={styles.slide}>
        <img
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
          className={styles.image}
        />
        <h1 className={styles.title}>{slides[currentSlide].title}</h1>
        <p className={styles.description}>{slides[currentSlide].description}</p>
      </div>
    </div>
  );
};

export default Home;
