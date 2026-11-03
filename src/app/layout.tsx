import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0B0D10",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Ajathan R | Software Engineer & Backend Developer",
  description:
    "Portfolio of Ajathan R — Software Engineer specializing in Golang backend development, scalable distributed architectures, reliable APIs, and database engineering.",
  keywords: [
    "Ajathan R",
    "Software Engineer",
    "Backend Developer",
    "Golang Developer",
    "Go",
    "Distributed Systems",
    "API Design",
    "PostgreSQL",
    "Docker",
    "TypeScript",
    "React",
  ],
  authors: [{ name: "Ajathan R" }],
  creator: "Ajathan R",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ajathan.dev",
    title: "Ajathan R | Software Engineer & Backend Developer",
    description:
      "Specializing in Golang backend development, scalable distributed architectures, and reliable APIs.",
    siteName: "AJATHAN.DEV",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajathan R | Software Engineer & Backend Developer",
    description:
      "Specializing in Golang backend development, scalable distributed architectures, and reliable APIs.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <head>
        <meta name="color-scheme" content="dark" />
      </head>
      <body className="min-h-screen bg-[#0B0D10] text-[#F5F5F5] antialiased selection:bg-[#B6F36B] selection:text-[#0B0D10] font-sans">
        {children}
      </body>
    </html>
  );
}
