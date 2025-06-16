import React from 'react';

export type AuthGuardProps = {
  privateFallback?: React.ReactNode;
  children?: React.ReactNode;
};

export const AuthGuard: React.FC<AuthGuardProps> = ({
  children,
  privateFallback,
}) => {
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return <>{privateFallback}</>;
  }

  return <>{children}</>;
};
