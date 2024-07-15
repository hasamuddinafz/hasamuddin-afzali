import { Poppins } from "next/font/google";
import "../globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={poppins.className}>
        <ToastContainer/>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
