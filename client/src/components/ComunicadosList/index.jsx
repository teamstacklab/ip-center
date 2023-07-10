import React from "react";
import "./CSS/mobile.css";
import "./CSS/desktop.css";

export default function ComunicadosList() {
  // --> Cria os estados
  const [comunicates, setComunicates] = React.useState([]);

  return (
    <div className="comunicados__list--generated">

      { Object.values(comunicates).length > 0 ? comunicates.map(comunicado => {
        return <ComunicadosList {...comunicado} />;
      }): <p className="h5">Ainda não há nenhum comunicado!</p> }

    </div>
  );

}