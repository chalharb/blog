import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/app/_components/theme-provider";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "./_components/nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Logan Harber | Sitecore Architect",
  description: "Sitecore Architect @ HCA Healthcare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="antialiased max-w-[900] mx-4 mt-8 lg:mx-auto">
            <Navbar />
            <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
              {children}
            </main>
          </div>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
