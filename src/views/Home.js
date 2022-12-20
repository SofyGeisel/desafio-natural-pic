import { useContext } from "react";
import Galeria from "../components/Galeria";
import MyContext from "../my_context";


export default function Home() {

  const {fotos, setFotos} = useContext(MyContext)

  return (
    <div id="Home">
      <h1>Natural Pic</h1>
    

      <Galeria fotos={fotos} setFotos={setFotos}/>
    </div>
  );
}
