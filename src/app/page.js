import Image from "next/image";
import Index from "./pages/Home/page";
import About from "./pages/About/page";
import Navbar from "./components/navbar";
import TechnicalSkills from "./pages/Skills/page";
import ContactPage from "./pages/Contact/page";
import Projects from "./pages/Projects/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Index />
      <About />
      <TechnicalSkills />
      <Projects/>
     <ContactPage />
    </div>
  );
}
