'use client';

import { SessionProvider } from 'next-auth/react';

export function SessionProviders({ children, session }) {
    return (
        <SessionProvider session={session} refetchOnWindowFocus refetchInterval={5 * 60}>
            {children}
        </SessionProvider>
    );
}
