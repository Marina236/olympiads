import React from 'react';
import {useUnit} from "effector-react";
import {$authenticated} from "../user/model";

export type AuthGuardProps = {
  privateFallback?: React.ReactNode;
  children?: React.ReactNode;
};

export const AuthGuard: React.FC<AuthGuardProps> = ({
  children,
  privateFallback,
}) => {
  const isAuthenticated = useUnit($authenticated);

  if (!isAuthenticated) {
    return <>{privateFallback}</>;
  }

  return <>{children}</>;
};
