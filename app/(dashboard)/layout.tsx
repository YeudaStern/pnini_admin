import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import LeftSidebar from "@/components/layout/LeftSidebar";
import Topbar from "@/components/layout/Topbar";
import { ToasterProvider } from "@/lib/ToasterProvider";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pnini - Admin Dashboard",
  description: "Admin dashboard to manage data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ToasterProvider />
            <div className="flex max-lg:flex-col dark:bg-stone-900/15">
              <LeftSidebar />
              <Topbar />
              <div className="flex-1">

                {children}

              </div>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider >
  );
}
