"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ChevronDown, Tag } from 'lucide-react';
import Image from 'next/image';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  githubLink: string;
  liveLink: string;
};

export default function Projects() {
  const categories = [
    "All",
    "Development",
    "Machine Learning",
    "Data Science",
    "Data Analysis"
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const [isMobile, setIsMobile] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  // Check if the view is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with Next.js, Node.js, and MongoDB.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
      category: "Development",
      tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      githubLink: "https://github.com",
      liveLink: "https://example.com",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A modern portfolio website built with Next.js and Three.js.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80",
      category: "Development",
      tags: ["Next.js", "Three.js", "Tailwind CSS"],
      githubLink: "https://github.com",
      liveLink: "https://example.com",
    },
    {
      id: 3,
      title: "Sentiment Analysis Tool",
      description: "A machine learning model for sentiment analysis of customer reviews.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Machine Learning",
      tags: ["Python", "NLTK", "Scikit-learn", "Flask"],
      githubLink: "https://github.com",
      liveLink: "https://example.com",
    },
    {
      id: 4,
      title: "Stock Price Prediction",
      description: "A time series forecasting model for stock price prediction.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Data Science",
      tags: ["Python", "TensorFlow", "Pandas", "Matplotlib"],
      githubLink: "https://github.com",
      liveLink: "https://example.com",
    },
    {
      id: 5,
      title: "Sales Dashboard",
      description: "An interactive dashboard for sales data visualization.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Data Analysis",
      tags: ["Tableau", "SQL", "Excel"],
      githubLink: "https://github.com",
      liveLink: "https://example.com",
    },
    {
      id: 6,
      title: "Customer Segmentation",
      description: "A clustering model for customer segmentation.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80",
      category: "Data Science",
      tags: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      githubLink: "https://github.com",
      liveLink: "https://example.com",
    },
  ];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  // Handler for category selection
  const handleCategorySelect = (category: string) => {
    setActiveCategory(category);
    setDropdownOpen(false);
  };

  // Animation variants
  const categoryVariants = {
    active: {
      scale: 1.05,
      backgroundColor: "var(--primary)",
      color: "white",
      transition: { duration: 0.3 }
    },
    inactive: {
      scale: 1,
      backgroundColor: "transparent",
      transition: { duration: 0.3 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.3 }
    }
  };

  const imageVariants = {
    hover: { 
      scale: 1.1,
      transition: { duration: 0.5 }
    },
    initial: { 
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  const tagVariants = {
    hover: {
      y: -2,
      backgroundColor: "var(--primary)",
      color: "white",
      transition: { duration: 0.2 }
    },
    initial: {
      y: 0,
      backgroundColor: "var(--muted)",
      transition: { duration: 0.2 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="projects" className="container mx-auto px-4 py-16">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-4">My Projects</h2>
        <p className="text-lg text-muted-foreground">
          A showcase of my recent work across different domains.
        </p>
      </motion.div>

      {/* Mobile Dropdown */}
      {isMobile ? (
        <motion.div 
          className="relative mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <button 
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-full flex items-center justify-between p-3 bg-muted rounded-lg"
          >
            <span>{activeCategory}</span>
            <ChevronDown className={`transform transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          
          <AnimatePresence>
            {dropdownOpen && (
              <motion.div 
                className="absolute z-10 w-full mt-1 bg-card rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                {categories.map((category, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleCategorySelect(category)}
                    className={`w-full p-3 text-left hover:bg-muted ${activeCategory === category ? 'bg-muted-foreground/10' : ''}`}
                    whileHover={{ x: 5 }}
                  >
                    {category}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ) : (
        /* Desktop Category Tabs */
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={categoryVariants}
              animate={activeCategory === category ? "active" : "inactive"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
            >
              <Button
                variant={activeCategory === category ? "default" : "outline"}
                className="rounded-full transition-all duration-300"
              >
                {category}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      )}

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <AnimatePresence mode="wait">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              whileHover="hover"
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              layout
            >
              <Card className="h-full flex flex-col overflow-hidden border border-border/50 transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <motion.div
                    variants={imageVariants}
                    initial="initial"
                    animate={hoveredProject === project.id ? "hover" : "initial"}
                    className="h-full w-full"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  
                  <div className="absolute top-2 right-2 px-2 py-1 text-xs font-medium bg-primary/80 text-white rounded-full">
                    {project.category}
                  </div>
                </div>
                
                <CardContent className="flex-grow p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        variants={tagVariants}
                        initial="initial"
                        animate={hoveredProject === project.id ? "hover" : "initial"}
                        className="px-2 py-1 text-xs bg-muted rounded-full transition-colors duration-300 flex items-center"
                        style={{ transition: `all 0.3s ease ${tagIndex * 0.1}s` }}
                      >
                        <Tag className="mr-1 h-3 w-3" />
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  <motion.h3 
                    className="text-xl font-bold mb-2"
                    animate={hoveredProject === project.id ? { color: "var(--primary)" } : { color: "inherit" }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
                
                <CardFooter className="p-6 pt-0 flex gap-2">
                  <motion.div
                    className="flex-1"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="w-full"
                    >
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  </motion.div>
                  
                  <motion.div
                    className="flex-1"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="sm"
                      asChild
                      className="w-full"
                    >
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  </motion.div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}