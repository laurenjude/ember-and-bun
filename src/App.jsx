import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AIBanner from "./components/AIBanner";
import Menu from "./components/Menu";
import About from "./components/About";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import VoiceCallWidget from "./components/VoiceCallWidget";

export default function App() {
  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <Hero />
      <AIBanner />
      <Menu />
      <About />
      <CTA />
      <Footer />
      <VoiceCallWidget />
    </div>
  );
}
