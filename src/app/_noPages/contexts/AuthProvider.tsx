'use client';

import { createContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface IAuthContext {
  address: string | null;
  setAddress: React.Dispatch<string | null>;
  isAuthenticated: boolean;
}

const AuthContextInitialValues: IAuthContext = {
  address: null,
  setAddress: () => {},
  isAuthenticated: false,
};

export const AuthContext = createContext(AuthContextInitialValues);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [address, setAddress] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setIsAuthenticated(!!address);
    if (address) router.push('/dashboard');
    if (address === null) router.push('/');
  }, [address]);

  const values = { address, setAddress, isAuthenticated };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
