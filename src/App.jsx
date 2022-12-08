import { Route, Routes } from 'react-router-dom';
import  Home  from './Routes/Home';
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Contact from './Routes/Contact';
import Detail from './Routes/Detail';
import Favs from './Routes/Favs';
import { DentistProvider } from './Context/DentistContext';


function App() {
  return (
    <DentistProvider>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dentist/:id"  element={<Detail/>}/>
      <Route path="/contacto"  element = {<Contact />} />
      <Route path="/favs"  element={<Favs />} />
    </Routes>
    <Footer />
  </DentistProvider>
   
  );
}

export default App;
