import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import Navbar from "./Components/navbar/navbar";x
import Footer from "./Components/Footer/Footer";
import { CursorFollower } from "./Components/Cursor Animation/cursor-follower";
import NavbarDemo from "./Components/Navbar2/MainNav";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  weight: 'variable',
  adjustFontFallback: false
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  weight: 'variable',
  adjustFontFallback: false
});

export const metadata = {
  title: "Saas Company Template",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <NavbarDemo/>
        <CursorFollower/>
      {/* <Navbar className="px-35" /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
