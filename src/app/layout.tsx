import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";
import ZohoBot from "./ZohoBot";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
// If loading a variable font, you don't need to specify the font weight
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--poppins",
});

// const poppinsBold = Poppins({
//   subsets: ["latin"],
//   display: "swap",
//   weight: "700",
//   variable: "--poppinsBold",
// });
export const metadata: Metadata = {
  title: "the 1 source",
  description: "the 1 source site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.className}`}>
      <body>
        <ZohoBot />
        {children}
      </body>
    </html>
  );
}
