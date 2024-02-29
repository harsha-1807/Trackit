import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { UserProvider } from '@auth0/nextjs-auth0/client';
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
export const metadata: Metadata = {
  title: "Track It",
  description:
    "Track product prices effortlessly and save money on your online shopping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserProvider>  
        <body className={inter.className}>
            <main className="max-w-10xl mx-auto">
                
                  <Navbar />
                  {children}
                
            </main>
        </body>
      </UserProvider>
      
    </html>
  );
}
