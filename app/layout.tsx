import { ThemeProvider } from '@/providers/themeProvider';
import type { Metadata } from "next";
import { Inter } from  "next/font/google";
import "./globals.css";
import Sidebar from '@/components/Sidebar';
import React from 'react';


const inter = Inter({ subsets: ["latin"]});
export const metadata: Metadata = {
  title: "Clone YT Music",
  description: "Clone YOutube Music",
}


export default async function RootLayout({
  children
}: Readonly<{ children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <Sidebar>{children}</Sidebar>
        </ThemeProvider>
      </body>
    </html>
  )
}


