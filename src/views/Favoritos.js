import { useContext } from "react";
import MyContext from "../my_context";

export default function Favoritos() {
  const { fotos, setFotos } = useContext(MyContext);

  

  const filtrarFavoritos = fotos.filter(function (fotos) {
    return fotos.liked === true;
  });

  {
    fotos.map((mostrarFavoritos, index) => {
      return (
        <div
          style={{ backgroundImage: `url(${mostrarFavoritos.src.medium})` }}
          key={index}
        ></div>
      );
    });
    
  }

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4"></div>
    </div>
  );
}
