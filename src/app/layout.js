
import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/footer/Footer"
import { Inter, Nunito } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TravelMania",
  description: "A travel agency for travelers .",
};

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body >
        <Navbar />
        <main className={inter.className}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}


