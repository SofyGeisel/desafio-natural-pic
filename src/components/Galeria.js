import "../assets/css/galeria.css";
import Heart from "./Heart";
import { useEffect, useContext } from "react";
import axios from "axios";
import MyContext from "../my_context";

export default function Home() {
  //4) Hacer uso del hook UseContext para acceder al estado global desde los componentes que lo necesiten
  const { fotos, setFotos } = useContext(MyContext);

  useEffect(() => {
    const obtenerFotos = async () => {
      const url = "./fotos.json";
      const result = await axios.get(url);
      setFotos(result.data.photos);
    };

    obtenerFotos();
  }, []);

  //Función de búsqueda
  const addFavoritos = (id) => {
    const fotoIndex = fotos.findIndex((f) => f.id === id);
    fotos[fotoIndex].liked = !fotos[fotoIndex].liked;
    setFotos([...fotos]);
  };

  return (
    <div className="galeria grid-columns-4">
      {fotos.map((infoapi, index) => {
        return (
          <div
            onClick={() => addFavoritos(infoapi.id)}
            className="foto"
            style={{ backgroundImage: `url(${infoapi.src.medium})` }}
            key={index}
            alt={fotos.alt}
          >
            <Heart filled={infoapi.liked} />
            <p> {infoapi.alt} </p>
          </div>
        );
      })}
    </div>
  );
}
