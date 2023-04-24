import React from "react";
import ComunicadoCard from "../ComunicadoCard"
import { ComunicatesController } from "../../controllers/ComunicatesController";
import "./CSS/mobile.css";
import "./CSS/desktop.css";

export default function ComunicadosList() {
  // --> Puxa os Controllers
  const comunicatesController = new ComunicatesController();

  // --> Cria os estados
  const [comunicates, setComunicates] = React.useState([]);

  // --> Seta todos os <Comunicados>
  React.useEffect(() => {
    comunicatesController.getAll()
      .then((res) => setComunicates(res.data))
      .catch((err) => console.log(err));
  }, []);


  return (
    <div className="comunicados">
      {comunicates.map(comunicate => {
        return <ComunicadoCard {...comunicate} />
      })}
    </div>
  );

}