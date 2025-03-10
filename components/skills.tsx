"use client";

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type Skill = {
  name: string;
  category: string;
  color: string;
};

export default function Skills() {
  const skills: Skill[] = [
    // Programming Languages
    { name: "Python", category: "Programming Languages", color: "bg-blue-500" },
    { name: "Java", category: "Programming Languages", color: "bg-orange-600" },
    { name: "C++", category: "Programming Languages", color: "bg-blue-700" },
    { name: "JavaScript", category: "Programming Languages", color: "bg-yellow-500" },
    { name: "TypeScript", category: "Programming Languages", color: "bg-blue-600" },
    
    // Frontend Technologies
    { name: "HTML", category: "Frontend Technologies", color: "bg-orange-500" },
    { name: "CSS", category: "Frontend Technologies", color: "bg-blue-500" },
    { name: "JavaScript", category: "Frontend Technologies", color: "bg-yellow-500" },
    { name: "Tailwind CSS", category: "Frontend Technologies", color: "bg-cyan-500" },
    { name: "Bootstrap", category: "Frontend Technologies", color: "bg-purple-600" },
    { name: "ReactJS", category: "Frontend Technologies", color: "bg-blue-400" },
    { name: "Next.js", category: "Frontend Technologies", color: "bg-black" },
    
    // Backend Technologies
    { name: "Node.js", category: "Backend Technologies", color: "bg-green-600" },
    { name: "Express.js", category: "Backend Technologies", color: "bg-gray-600" },
    { name: "Spring Boot", category: "Backend Technologies", color: "bg-green-500" },
    
    // API Development
    { name: "RESTful APIs", category: "API Development", color: "bg-indigo-600" },
    { name: "GraphQL", category: "API Development", color: "bg-pink-600" },
    { name: "JSON Web Tokens (JWT)", category: "API Development", color: "bg-purple-500" },
    { name: "OAuth", category: "API Development", color: "bg-red-500" },
    
    // Databases
    { name: "MongoDB", category: "Databases", color: "bg-green-500" },
    { name: "SQL (MySQL, PostgreSQL)", category: "Databases", color: "bg-blue-600" },
    
    // Data Manipulation & Libraries
    { name: "Pandas", category: "Data Manipulation & Libraries", color: "bg-blue-500" },
    { name: "NumPy", category: "Data Manipulation & Libraries", color: "bg-cyan-600" },
    
    // Data Visualization
    { name: "Matplotlib", category: "Data Visualization", color: "bg-blue-500" },
    { name: "Seaborn", category: "Data Visualization", color: "bg-teal-500" },
    { name: "Plotly", category: "Data Visualization", color: "bg-indigo-500" },
    { name: "Tableau", category: "Data Visualization", color: "bg-blue-600" },
    { name: "Power BI", category: "Data Visualization", color: "bg-yellow-600" },
    
    // Machine Learning Libraries
    { name: "Scikit-learn", category: "Machine Learning Libraries", color: "bg-orange-500" },
    { name: "XGBoost / LightGBM", category: "Machine Learning Libraries", color: "bg-green-600" },
    { name: "TensorFlow", category: "Machine Learning Libraries", color: "bg-orange-600" },
    { name: "Keras", category: "Machine Learning Libraries", color: "bg-red-500" },
    { name: "PyTorch", category: "Machine Learning Libraries", color: "bg-orange-500" },
    
    // Natural Language Processing (NLP)
    { name: "NLTK", category: "Natural Language Processing (NLP)", color: "bg-blue-500" },
    { name: "spaCy", category: "Natural Language Processing (NLP)", color: "bg-teal-600" },
    { name: "Transformers (BERT, GPT)", category: "Natural Language Processing (NLP)", color: "bg-purple-600" },
    
    // Tools
    { name: "Git / GitHub", category: "Tools", color: "bg-gray-700" },
    { name: "Excel", category: "Tools", color: "bg-green-600" },
    { name: "Linux", category: "Tools", color: "bg-yellow-700" },
    { name: "Postman", category: "Tools", color: "bg-orange-500" },
    { name: "Firebase", category: "Tools", color: "bg-yellow-600" },
  ];

  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A comprehensive list of my technical skills and expertise across various domains.
        </p>
      </motion.div>

      <div className="space-y-10">
        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-2xl font-semibold mb-4 border-l-4 border-primary pl-3"
            >
              {category}
            </motion.h3>
            
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {skills
                .filter(skill => skill.category === category)
                .map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={item}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium text-white shadow-md transition-transform hover:scale-105",
                      skill.color
                    )}
                  >
                    {skill.name}
                  </motion.div>
                ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}