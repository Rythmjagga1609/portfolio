"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X, Home, Code, Briefcase, FolderOpen, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

// Links for the navigation
const navLinks = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'Skills', href: '#skills', icon: Code },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Projects', href: '#projects', icon: FolderOpen },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, setTheme } = useTheme();
  const headerRef = useRef<HTMLElement | null>(null); // Type headerRef as HTMLElement or null

  // Throttled scroll event listener to check active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = navLinks.map(link => link.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    const debouncedHandleScroll = () => {
      handleScroll();
    };

    window.addEventListener('scroll', debouncedHandleScroll);
    return () => window.removeEventListener('scroll', debouncedHandleScroll);
  }, []);

  // Handle clicks outside to close mobile menu
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {  // Type the event as MouseEvent
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) { // Type event.target as Node
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animation variants for mobile menu and links
  const mobileMenuVariants = {
    closed: { opacity: 0, height: 0, transition: { duration: 0.3, ease: "easeInOut" } },
    open: { opacity: 1, height: 'auto', transition: { duration: 0.3, ease: "easeInOut" } },
  };

  const linkVariants = {
    initial: { x: -20, opacity: 0 },
    animate: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.1, duration: 0.3 }
    }),
    exit: (i: number) => ({
      x: -20,
      opacity: 0,
      transition: { delay: i * 0.05, duration: 0.2 }
    }),
    hover: { 
      x: 5, 
      color: "var(--primary)",
      transition: { duration: 0.2 }
    }
  };

  const menuIconVariants = {
    closed: { rotate: 0 },
    open: { rotate: 90 }
  };

  return (
    <header
      ref={headerRef}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-md shadow-sm py-2'
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link 
            href="#home" 
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 hover:to-primary transition-all duration-300"
          >
            Rythm
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <motion.div
              key={link.name}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <Link
                href={link.href}
                className={cn(
                  "nav-link px-4 py-2 rounded-lg transition-colors duration-200 flex items-center",
                  activeSection === link.href.substring(1)
                    ? "text-primary font-medium"
                    : "text-foreground/70 hover:text-foreground hover:bg-primary/5"
                )}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}

          {/* Theme Toggle Button */}
          <motion.div
            whileHover={{ rotate: 15 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button
              variant="ghost"
              size="icon"
              className="ml-2 rounded-full hover:bg-primary/10"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <motion.div
            whileHover={{ rotate: 15 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-primary/10"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </motion.div>

          {/* Menu Icon */}
          <motion.div
            whileTap={{ scale: 0.9 }}
            animate={mobileMenuOpen ? "open" : "closed"}
            variants={menuIconVariants}
          >
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-primary/10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Menu"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={mobileMenuOpen ? 'close' : 'menu'}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </AnimatePresence>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden bg-card/95 backdrop-blur-md border-t border-border/10 shadow-lg"
          >
            <nav className="flex flex-col py-4 h-[100vh] overflow-y-auto">
              {navLinks.map((link, i) => {
                const Icon = link.icon;
                return (
                  <motion.div
                    key={link.name}
                    custom={i}
                    variants={linkVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    whileHover="hover"
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "w-full flex items-center gap-3 px-6 py-3 hover:bg-muted transition-colors",
                        activeSection === link.href.substring(1) ? "text-primary font-medium bg-muted" : ""
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Icon size={18} className="flex-shrink-0" />
                      <span>{link.name}</span>
                      {activeSection === link.href.substring(1) && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="w-1 h-6 bg-primary rounded-full ml-auto"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
