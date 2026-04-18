import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/shared/lib/utils";
import { TooltipProvider } from "@/shared/components/ui/tooltip";
import { QueryProvider } from "@/shared/components/providers/QueryProvider";
import { Navbar } from "@/shared/components/layout/navbar/Navbar";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/shared/components/providers/ThemeProvider";
import AuthInitializer from "@/shared/components/AuthInitializer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MoCommerce",
  description: "Your one-stop shop for all your needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
      )}
    >
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <TooltipProvider>
            <QueryProvider>
              <AuthInitializer>
                <Navbar />
                <main className="pt-16 flex-1 container mx-auto">{children}</main>
                <Toaster
                  position="bottom-right"
                  toastOptions={{
                    style: {
                      backgroundColor: "var(--secondary)",
                      color: "var(--secondary-foreground)",
                      minWidth: "200px",
                      fontSize: "0.8rem",
                    },
                  }}
                />
              </AuthInitializer>
            </QueryProvider>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
