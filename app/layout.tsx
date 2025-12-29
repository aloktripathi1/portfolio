import './global.css';
import { SmoothScroll } from '@/components/ui/SmoothScroll';
import { NoiseOverlay } from '@/components/ui/NoiseOverlay';
import { ScrollGradient } from '@/components/ui/ScrollGradient';
import { ConsoleEasterEgg } from '@/components/ui/ConsoleEasterEgg';
import type { Metadata } from 'next';
import { Geist_Mono } from 'next/font/google';

const geistMono = Geist_Mono({
    subsets: ['latin'],
    variable: '--font-primary',
});

export const metadata: Metadata = {
    title: 'Alok K. Tripathi - Data Scientist',
    description: 'aspiring data scientist crafting intelligence from chaos',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={geistMono.variable}>
                <ConsoleEasterEgg />
                <SmoothScroll>
                    <NoiseOverlay />
                    <ScrollGradient />
                    {children}
                </SmoothScroll>
            </body>
        </html>
    );
}