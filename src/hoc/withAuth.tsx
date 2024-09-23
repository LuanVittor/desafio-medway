"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const withAuth = (WrappedComponent: React.FC) => {
  const AuthenticatedComponent = (props: any) => {
    const router = useRouter();
    const token = localStorage.getItem('auth-token');

    useEffect(() => {
      if (!token) {
        router.push('/');
      }
    }, [router, token]);

    return token ? <WrappedComponent {...props} /> : null;
  };

  return AuthenticatedComponent;
};

export default withAuth;
