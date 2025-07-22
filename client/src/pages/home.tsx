import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Portfolio from "@/components/portfolio";
import About from "@/components/about";
import Services from "@/components/services";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Portfolio />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
