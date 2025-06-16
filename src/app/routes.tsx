import React from 'react';
import {Navigate, Outlet, Route, Routes} from 'react-router-dom';
import {AuthGuard} from "../components/auth-guard";
import {Login} from "../pages/login";
import {Header} from "../components/header";
import {News} from "../pages/news";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AuthGuard privateFallback={<Login />}>
            <Header />
            <Outlet />
          </AuthGuard>
        }
      >
        <Route index element={<>main page</>} />
        <Route path="news" element={<News />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
