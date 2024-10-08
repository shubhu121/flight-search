import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { CityProvider } from './context/context';
const neueMontreal = localFont({
  src: "./fonts/NeueMontreal-Regular.woff",
  variable: "--font-neue-montreal",
  weight: "100 900",
});
const NeueLight = localFont({
  src: "./fonts/NeueLight.woff",
  variable: "--font-neue-light",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "KIIT - Frontend Engineering Challenge",
  description: "Web app to search flights in between two cities ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CityProvider>
      <html lang='en'>
        <body
          className={`${neueMontreal.variable} ${NeueLight.variable} antialiased`}
        >
          <main>{children}</main>
        </body>
      </html>
    </CityProvider>
  );
}
