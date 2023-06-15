'use client';

import { SessionProvider } from 'next-auth/react';

export function SessionProviders({ children }) {
    return (
        <SessionProvider refetchOnWindowFocus={true} refetchInterval={5 * 60}>
            {children}
        </SessionProvider>
    );
}
