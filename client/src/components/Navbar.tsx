import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Experience", to: "experience" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <ScrollLink
          to="hero"
          smooth={true}
          duration={500}
          className="cursor-pointer flex items-center gap-2 group"
        >
          <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
            <Code2 className="w-6 h-6 text-primary" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight">
            Syed<span className="text-primary">Tabeeb</span>
          </span>
        </ScrollLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <ScrollLink
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-80}
              className="text-sm font-medium text-muted-foreground hover:text-primary cursor-pointer transition-colors"
            >
              {item.name}
            </ScrollLink>
          ))}
          <Button 
            variant="default" 
            size="sm"
            onClick={() => window.open("/resume", "_blank")}
            className="ml-4 font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30"
          >
            Resume
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <div className="flex flex-col p-4 space-y-4">
              {navItems.map((item) => (
                <ScrollLink
                  key={item.name}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="text-base font-medium text-muted-foreground hover:text-primary py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </ScrollLink>
              ))}
              <Button 
                className="w-full mt-4"
                onClick={() => window.open("/resume", "_blank")}
              >
                Download Resume
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
