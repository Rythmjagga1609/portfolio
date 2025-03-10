import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Youtube } from 'lucide-react';
import Image from 'next/image';
import Profile from '../assets/profile.jpeg'; // Import the profile image correctly

export default function Hero() {
  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: 'https://github.com', label: 'GitHub', color: 'bg-black text-white' },
    { icon: <Linkedin className="h-5 w-5" />, href: 'https://linkedin.com', label: 'LinkedIn', color: 'bg-blue-600 text-white' },
    { icon: <Twitter className="h-5 w-5" />, href: 'https://twitter.com', label: 'Twitter', color: 'bg-blue-500 text-white' },
    { icon: <Youtube className="h-5 w-5" />, href: 'https://youtube.com', label: 'YouTube', color: 'bg-red-600 text-white' },
  ];

  return (
    <div className="container mx-auto px-4 py-16 md:py-20 lg:py-24">
      <div className="flex flex-col-reverse md:flex-row items-center gap-8 max-w-5xl mx-auto">
        <motion.div
          className="w-full md:w-3/5"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="space-y-5">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Hello, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">Rythm</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              Fullstack developer with expertise in Machine Learning & Data Science
            </p>
          
            <div className="flex flex-wrap gap-4 pt-2">
              <Button size="default" className="rounded-full">Contact Me</Button>
              <Button size="default" variant="outline" className="rounded-full">Download CV</Button>
            </div>
            
            <div className="flex items-center gap-4 pt-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full border transition-colors ${social.color} 
                              ${index === 0 ? 'border-black dark:border-white' : 'border-border'} 
                              hover:scale-110`}
                  aria-label={social.label}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
        
        <motion.div
          className="mb-8 md:mb-0 md:w-2/5 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-black dark:to-black rounded-lg shadow-lg border-0 overflow-hidden">
              
              {/* Profile Image with Floating and Scaling Effects */}
              <motion.div
                className="w-full h-full flex justify-center items-center relative"
                initial={{ y: 0, scale: 1 }}
                animate={{
                  y: [0, -15, 0], // Float effect: moves up and down
                  scale: [1, 1.05, 1], // Subtle scaling effect
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'loop',
                  ease: 'easeInOut',
                }}
              >
                {/* Profile Image */}
                <Image
                  src={Profile}
                  alt="Profile Image"
                  layout="intrinsic"
                  width={300}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
                
                {/* Particles Effect */}
                <motion.div
                  className="absolute top-0 left-0 w-full h-full pointer-events-none"
                  animate={{
                    scale: [0, 1, 0], // Particles grow and fade out
                    opacity: [0, 0.3, 0], // Fade out after growing
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'easeOut',
                    delay: 1.5,
                  }}
                  style={{
                    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.4) 10%, rgba(255, 255, 255, 0) 60%)',
                    filter: 'blur(4px)', // Blur particles without altering brightness
                  }}
                />
              </motion.div>

            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
