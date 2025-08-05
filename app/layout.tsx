import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SubNavbar from "@/components/SubNavbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Welcome to Vipul Motors",
  description: "Welcome to Vipul Motors – your trusted Maruti Suzuki dealership for new cars, servicing, finance, insurance, and more.",
  icons: {
    icon: "/Vipul-Motors-Favicon.svg",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body className={`${rubik.variable} font-sans antialiased min-h-screen flex flex-col`}>
        {/* <body className={`${rubik.className} font-sans antialiased min-h-screen flex flex-col`}> */}
        <div className="flex flex-col flex-grow w-full">
          <div className="fixed top-0 left-0 w-full z-50">
            <div className="hidden sm:block bg-white shadow">
              <SubNavbar />
            </div>
            <div className="bg-white">
              <Navbar />
            </div>
          </div>

          {/* React Hot Toast Toaster */}
          <Toaster
            position="top-center"
            toastOptions={{
              duration: 5000,
              style: {
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
              }
            }}
          />

          {/* Pushes content below fixed navbar */}
          <main className="pt-[72px] sm:pt-[108px] flex-grow">
            {children}
          </main>

          {/* Footer stays at the bottom */}
          <Footer />
        </div>
      </body>

    </html >
  );
}
