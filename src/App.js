import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import MyContext from "./my_context";
import { useState, useEffect, useContext } from "react";

export default function App() {
  //3) Asignar como valor del Provider un estado creado con el hook UseState
  const [fotos, setFotos] = useState([]);
  const estadoGlobal = { fotos, setFotos };

  return (
    <div className="App">
      {/*2) Usar el contexto creado como un componente para envolver toda la aplicación */}
      <MyContext.Provider value={estadoGlobal}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} fotos={fotos} setFotos={setFotos}/>
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}
