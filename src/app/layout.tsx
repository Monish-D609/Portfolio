import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next";
import { Bricolage_Grotesque, JetBrains_Mono, Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import SpotifyWidget from "@/components/SpotifyWidget";
import Script from "next/script";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500"],
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const SITE_URL = "https://www.monishd.me";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Monish D Portfolio",
  description: "Interactive portfolio with an AI-powered avatar that answers questions about me, my skills, and my experience",
  keywords: [
    "Monish D", 
    "Portfolio", 
    "Developer", 
    "AI", 
    "Interactive", 
    "GenAI",
    "Machine Learning",
    "Data Science",
    "Next.js",
    "React"
  ],
  authors: [
    {
      name: "Monish D",
      url: SITE_URL,
    },
  ],
  creator: "Monish D",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: "Monish D Portfolio",
    description: "Interactive portfolio with an AI-powered avatar that answers questions about me",
    siteName: "Monish D Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Monish D Portfolio",
    description: "Interactive portfolio with an AI-powered avatar that answers questions about me",
    creator: "@monish_d",
  },
  icons: {
    icon: [
      {
        url: "/logo-monish.svg",
        sizes: "any",
      }
    ],
    shortcut: "/logo-monish.svg?v=2",
    apple: "/apple-touch-icon.svg?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/logo-monish.svg" sizes="any" />
        {/* Satoshi font from Fontshare */}
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,600,700,900&display=swap"
        />
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-QTH2CN2YRQ"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window['dataLayer'] = window['dataLayer'] || [];
              function gtag(){window['dataLayer'].push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-QTH2CN2YRQ');
            `,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={cn(
          "min-h-screen bg-white text-[#121212] dark:bg-black dark:text-[#EDEDED] font-sans antialiased transition-colors duration-500 ease-in-out",
          bricolage.variable,
          jetbrainsMono.variable,
          inter.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <main className="flex min-h-screen flex-col">
            {children}
          </main>
          <SpotifyWidget />
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}