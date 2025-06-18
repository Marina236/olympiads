import React from 'react';
import {Navigate, Outlet, Route, Routes} from 'react-router-dom';
import {AuthGuard} from "../components/auth-guard";
import {LoginForm} from "../pages/login";
import {Layout} from "../components/layout";
import {News} from "../pages/news/News";
import {useUnit} from "effector-react";
import {$profile} from "../components/user/model";
import {Card} from "../pages/card";
import {ClassRating} from "../pages/class-rating";
import {ClassRatingItem} from "../pages/class-rating-item";

export const AppRoutes = () => {
  const profile = useUnit($profile);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <AuthGuard privateFallback={<LoginForm />}>
            <Layout>
              <Outlet />
            </Layout>
          </AuthGuard>
        }
      >
          {profile?.role === 'teacher' && <Route path="class-rating" element={<ClassRating />} />}
          {profile?.role === 'teacher' && <Route path="class-rating/:id" element={<ClassRatingItem />} />}
          {profile?.role === 'teacher' && <Route path="class-rating/:id/child/:childId" element={<Card />} />}
          {profile?.role === 'teacher' && <Route index element={<Navigate to="/class-rating" />} />}

          {profile?.role === 'student' && <Route path="my" element={<Card />} />}
          {profile?.role === 'student' && <Route path="class-rating" element={<ClassRatingItem />} />}
          {profile?.role === 'student' && <Route index element={<Navigate to="/my" />} />}

          {profile?.role === 'parent' && <Route path="my-child" element={<Card />} />}
          {profile?.role === 'parent' && <Route path="class-rating" element={<ClassRatingItem />} />}
          {profile?.role === 'parent' && <Route index element={<Navigate to="/my-child" />} />}

         <Route path="news" element={<News />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
