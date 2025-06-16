import React from 'react';
import {Navigate, Outlet, Route, Routes} from 'react-router-dom';
import {AuthGuard} from "../components/auth-guard";
import {Login} from "../pages/login";
import {Layout} from "../components/layout";
import {News} from "../pages/news/News";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AuthGuard privateFallback={<Login />}>
            <Layout>
              <Outlet />
            </Layout>
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
