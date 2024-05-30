'use client';

import { useContext, useEffect } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import { useRouter } from 'next/router';

const Main: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main
      style={{
        padding: '0 20px 80px 20px',
        maxWidth: '1200px',
        minHeight: 'calc(100vh - 180px)',
        margin: '0 auto',
      }}
    >
      {children}
    </main>
  );
};

export default Main;
