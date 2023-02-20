import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-[#001102] ">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
