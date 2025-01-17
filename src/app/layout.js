import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
import 'react-calendar/dist/Calendar.css';
import './globals.css';

import { Poppins, Inter } from 'next/font/google';
import { Providers } from '@/components/Providers';
import { SessionProviders } from '@/components/SessionProviders';

const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['400', '500', '700'],
});

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});

export const metadata = {
    title: 'FLYId',
    description: 'Enjoy your flight with us',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en' className={`${poppins.variable} ${inter.variable}`}>
            <body suppressHydrationWarning={true}>
                <SessionProviders>
                    <Providers>{children}</Providers>
                </SessionProviders>
            </body>
        </html>
    );
}
