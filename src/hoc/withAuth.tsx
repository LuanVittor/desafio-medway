"use client";

import Loading from "@/components/Loading";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const withAuth = (Component: React.FC) => {
  const Auth = (props: any) => {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
      if (status === "unauthenticated") {
        signIn();
      }
    }, [status, router]);

    if (status === "loading") {
      return <Loading />;
    }

    if (session) {
      return <Component {...props} />;
    }

    return null;
  };

  return Auth;
};

export default withAuth;
