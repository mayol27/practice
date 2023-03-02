import { Inter } from "next/font/google";
import Home from "./home";
import Logo from "@/components/Logo";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function index() {
  return (
    <>
      <Logo />
      <Home />
      <Footer />
    </>
  );
}
