import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 border-b border-gray-100 transition-all duration-300 ${
        isScrolled ? "bg-white/95" : "bg-white/90"
      } backdrop-blur-sm`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-black text-black">FANCY</h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("work")}
                className="text-black hover:text-accent-orange transition-colors duration-200 font-medium"
              >
                Work
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-black hover:text-accent-orange transition-colors duration-200 font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-black hover:text-accent-orange transition-colors duration-200 font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-black hover:text-accent-orange transition-colors duration-200 font-medium"
              >
                Contact
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-black"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-lg">
            <div className="px-4 py-4 space-y-2">
              <button
                onClick={() => scrollToSection("work")}
                className="block w-full text-left px-3 py-2 text-black hover:text-accent-orange transition-colors duration-200 font-medium"
              >
                Work
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-3 py-2 text-black hover:text-accent-orange transition-colors duration-200 font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left px-3 py-2 text-black hover:text-accent-orange transition-colors duration-200 font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-3 py-2 text-black hover:text-accent-orange transition-colors duration-200 font-medium"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
