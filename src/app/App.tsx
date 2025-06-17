import React, {useEffect} from 'react';
import {AppRoutes} from "./routes";
import {BrowserRouter} from "react-router-dom";
import { Provider } from "../components/ui/provider"
import {setProfile} from "../components/user/model";

export const App = () => {

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            setProfile(JSON.parse(user));
        }
    }, []);

  return (
    <Provider>
      <BrowserRouter >
        <AppRoutes />
      </BrowserRouter >
    </Provider>
  );
}