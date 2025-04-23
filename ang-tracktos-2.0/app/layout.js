import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Ang Tracktos 2.0",
  description: "Finance Management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {/* header */}
        <Header />
        {/* body */}
        <main className="min-h-screen">{children}</main>
        {/* footer */}
        <footer className="bg-blue-50 py-12">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>
              Made with 💙 by{" "}
              <span className="font-bold text-blue-700">_yohpooh</span>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
