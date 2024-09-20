'use client';


import { SessionProvider } from "next-auth/react";

export function AppProvider({ children, session }) {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  );
}
