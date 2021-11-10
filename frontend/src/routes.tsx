import React from "react";
import { BrowserRouter } from "react-router-dom";
import { MainLayout } from "./modules/layout/containers";

const Routes = () => (
  <BrowserRouter>
    <MainLayout />
  </BrowserRouter>
);

export default Routes;
