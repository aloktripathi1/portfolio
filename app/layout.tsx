import './global.css';
import { SmoothScroll } from '@/components/ui/SmoothScroll';
import { NoiseOverlay } from '@/components/ui/NoiseOverlay';
import { ScrollGradient } from '@/components/ui/ScrollGradient';
import { ConsoleEasterEgg } from '@/components/ui/ConsoleEasterEgg';
import type { Metadata } from 'next';

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
            <body>
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