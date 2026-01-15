import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import SidebarNav from "@/components/SidebarNav";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Senowell Systems",
  description: "Higher Temperatures Greater Accuracy Faster Delivery  Expect more from the leading industry experts in hight temperature thermocouples  Some Of Our Customer Industrial Temperature Sensor and Custom Thermocouple Manufacturing Our experienced technical staff can help select the right materials and specifications based on your high-temperature process requirements.",
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
        <Header />
        <main className="flex w-full md:w-11/12 md:mx-auto flex-col md:flex-row">
          <SidebarNav />
          <div className="flex-1">
            {children}
            <ContactUs />
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
