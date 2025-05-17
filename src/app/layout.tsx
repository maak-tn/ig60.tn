import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer";

export const metadata: Metadata = {
    title: "IG60 - By MAAK CORP",
    description: "Online platform to create and manage your own store",
    metadataBase: new URL('https://ig60.maak-corp.tn'),
    authors: [{ name: 'MAAK CORP' }],
    keywords: [
        'organize',
        'maak',
        'corp',
        'tn',
    ],
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://ig60.maak-corp.tn',
        siteName: 'IG60 - By MAAK CORP',
        title: 'IG60 - By MAAK CORP',
        description: 'Online platform to create and manage your own store',
        images: [
            {
                url: 'https://ig60.maak-corp.tn/og-image.svg',
                width: 1200,
                height: 630,
                alt: 'IG60 - By MAAK CORP',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'IG60 - By MAAK CORP',
        description: 'Online platform to create and manage your own store',
        images: ['https://ig60.maak-corp.tn/twitter-image.svg'],
    },
    icons: {
        icon: [
            {
                media: '(prefers-color-scheme: dark)',
                url: '/logo_white.png',
                type: 'image/png',
            },
            {
                media: '(prefers-color-scheme: light)',
                url: '/logo_dark.png',
                type: 'image/png',
            },
        ],
        apple: [
            { url: '/icon-192x192.svg' },
        ],
        shortcut: ['/icon-512x512.svg'],
    },
    manifest: '/manifest.json',
    alternates: {
        canonical: 'https://ig60.maak-corp.tn'
    },
    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 5,
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
            </head>
            <body className="antialiased text-black">
                {children}
                <Footer />
            </body>
        </html>
    );
}
