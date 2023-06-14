'use client';

import { useSession, signOut, signIn } from 'next-auth/react';
import Button from './Button';

export default function SignInButton() {
    const { data: session, status } = useSession();

    // console.log(session);

    if (status === 'authenticated') {
        return (
            <div className='flex gap-4'>
                <Button onClick={() => signOut()}>Sign Out</Button>
            </div>
        );
    }

    return (
        <div>
            <Button onClick={() => signIn()}>Sign In</Button>
        </div>
    );
}
