"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const withAuth = (WrappedComponent: React.FC) => {
  const AuthenticatedComponent = (props: any) => {
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem('auth-token');

      if (!token) {
        router.push('/');
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };

  return AuthenticatedComponent;
};

export default withAuth;
