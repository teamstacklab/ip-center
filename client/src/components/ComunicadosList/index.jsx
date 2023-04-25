import React from "react";
import ComunicadoCard from "../ComunicadoCard"
import { ComunicatesController } from "../../controllers/ComunicatesController";
import "./CSS/mobile.css";
import "./CSS/desktop.css";
import { AxiosError } from "axios";

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
    <div className="comunicados__list--generated">

      { Object.values(comunicates).length > 0 ? comunicates.map(comunicado => {
        return <ComunicadosList {...comunicado} />;
      }): <p className="h5">Ainda não há nenhum comunicado!</p> }

    </div>
  );

}