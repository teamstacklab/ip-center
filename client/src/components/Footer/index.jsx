import React from "react";

// Router
import { ContainerFooter, ContainerMap, SectionFooter, Separetor, Sloga } from "./Style";
import MenuFooter from "../MenuFooter";
import NavFooter from "../NavFooter";
import InforFooter from "../InforFooter";


const Footer = () => {
  return (
    <>
      <ContainerFooter>
        <MenuFooter />
        <NavFooter />
        <Separetor />
        <SectionFooter>
          <InforFooter />
          <ContainerMap>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d989.5623520380976!2d-40.137169970773385!3d-7.212364269181048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x79f5ace6a6c6549%3A0xdb7a397a650e8f34!2sR.%20Santo%20Ant%C3%B4nio%2C%20346%20-%20Araripe%2C%20CE%2C%2063170-000!5e0!3m2!1spt-BR!2sbr!4v1679333064727!5m2!1spt-BR!2sbr" width="100%" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </ContainerMap>
          <Sloga>Shopping Ipê Center, o shopping da sua família!</Sloga>
        </SectionFooter>
      </ContainerFooter>
    </>
  );
};

export default Footer;