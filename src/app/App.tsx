import React from 'react';
import {AppRoutes} from "./routes";
import {BrowserRouter} from "react-router-dom";
import { Provider } from "../components/ui/provider"

export const App = () => {
  return (
    <Provider>
      <BrowserRouter >
        <AppRoutes />
      </BrowserRouter >
    </Provider>
  );
}