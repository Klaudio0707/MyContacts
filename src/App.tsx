import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Contacts from './Pages/Contacts/Contacts';
// import Footer from './Components/Footer/Footer';


const App: React.FC = () => {


  return (
    <>
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contacts" element={<Contacts/>} />
      </Routes>
      {/* <Footer/> */}
    </Router>
    </>
  );
};

export default App
