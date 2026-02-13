import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Vivek | Developer Portfolio",
  description: "Portfolio of Vivek - Python & Full Stack Developer",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
