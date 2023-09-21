import Header from "@/components/layouts/Header";
import { GlobalProvider } from "./GlobalProvider";
import "./globals.css";
import Footer from "@/components/Home/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <GlobalProvider>
          <Header />
          {children}
          <Footer/>
        </GlobalProvider>
      </body>
    </html>
  );
}
