import React from "react";
import Home, { HomeRoute } from "../pages/Home";
import Eventos, { EventosRoute } from "../pages/Eventos";
import Lojas, { LojasRoute, MinhasLojasRoute } from "../pages/Lojas";
import Loja from "../pages/Loja";
import CriarLoja, { CriarLojaRoute } from "../pages/CriarLoja";

import { Routes, Route } from 'react-router-dom';
import Login, { LoginRoute } from "../pages/Login";
import Register, { RegisterRoute } from "../pages/Register";
import Demandas, { DemandasRoute } from "../pages/Demandas";
import MinhasLojas from "../pages/MinhasLojas";

export const AppRoutes = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path={HomeRoute} element={<Home />} />
        <Route path={LojasRoute} element={<Lojas />} />
        <Route path={MinhasLojasRoute} element={<MinhasLojas />} />
        <Route path={`${LojasRoute}/:id`} element={<Loja />} />
        <Route path={EventosRoute} element={<Eventos />} />
        <Route path={CriarLojaRoute} element={<CriarLoja />} />
        <Route path={LoginRoute} element={<Login />} />
        <Route path={RegisterRoute} element={<Register />} />
        <Route path={DemandasRoute} element={<Demandas />} />
      </Routes>
    </React.Fragment>
  );
}