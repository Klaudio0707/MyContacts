
import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Contacts from './Pages/Contacts/Contacts';

const App: React.FC = () => {


  return (
    <>
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contacts" element={<Contacts/>} />
      </Routes>
    </Router>
    </>
  );
};

export default App
