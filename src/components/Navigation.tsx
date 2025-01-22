import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all ${
      isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <span className="text-xl font-bold">Portfolio</span>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            <Button variant="ghost" onClick={() => scrollTo('about')}>About</Button>
            <Button variant="ghost" onClick={() => scrollTo('projects')}>Projects</Button>
            <Button variant="ghost" onClick={() => scrollTo('contact')}>Contact</Button>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-b-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Button 
                variant="ghost" 
                className="w-full text-left"
                onClick={() => scrollTo('about')}
              >
                About
              </Button>
              <Button 
                variant="ghost" 
                className="w-full text-left"
                onClick={() => scrollTo('projects')}
              >
                Projects
              </Button>
              <Button 
                variant="ghost" 
                className="w-full text-left"
                onClick={() => scrollTo('contact')}
              >
                Contact
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};