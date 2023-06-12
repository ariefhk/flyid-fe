
import './globals.css';
import { Poppins, Inter } from 'next/font/google';

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
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={`${poppins.variable} ${inter.variable}`}>{children}</body>
        </html>
    );
}
