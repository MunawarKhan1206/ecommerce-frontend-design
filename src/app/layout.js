import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "E-commerce Web",
  description: "Generated by create next app",
};
import 'font-awesome/css/font-awesome.min.css';
import { Analytics } from "@vercel/analytics/react"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body     >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
// 