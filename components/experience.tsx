"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

type Experience = {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
};

export default function Experience() {
  const experiences: Experience[] = [
    {
      id: 1,
      role: "Machine Learning Intern ",
      company: "Guru Gobind Singh Indraprastha University",
      location: "Delhi , India",
      period: "June 2024- October 2024",
      description: [
        "Developed and implemented machine learning projects focusing on Software Defined Networks (SDN) under the guidance of Dr. Amritpal Singh.",
        "Gained proficiency in machine learning concepts and mathematical foundations, applying them to real-world problems.",

      ]
    },
    // {
    //   id: 2,
    //   role: "Machine Learning Engineer",
    //   company: "AI Solutions Ltd.",
    //   location: "Remote",
    //   period: "Mar 2021 - Dec 2022",
    //   description: [
    //     "Developed and deployed machine learning models for customer segmentation and recommendation systems.",
    //     "Created data pipelines for processing and analyzing large datasets.",
    //     "Collaborated with cross-functional teams to integrate ML models into production systems.",
    //     "Improved prediction accuracy by 25% through feature engineering and model optimization."
    //   ]
    // },
    // {
    //   id: 3,
    //   role: "Data Scientist",
    //   company: "DataCorp Analytics",
    //   location: "New York, NY",
    //   period: "Jun 2019 - Feb 2021",
    //   description: [
    //     "Conducted exploratory data analysis and created visualizations to communicate insights to stakeholders.",
    //     "Built predictive models for sales forecasting and customer churn prediction.",
    //     "Developed interactive dashboards using Tableau for executive reporting.",
    //     "Automated reporting processes that saved 10+ hours of manual work per week."
    //   ]
    // },
    {
      id: 4,
      role: "Frontend Developer Intern",
      company: "WebTech Solutions",
      location: "Boston, MA",
      period: "Jan 2019 - May 2019",
      description: [
        "Developed responsive user interfaces using React and CSS frameworks.",
        "Collaborated with designers to implement pixel-perfect designs.",
        "Participated in agile development processes including daily stand-ups and sprint planning.",
        "Contributed to the company's component library."
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          My professional journey and the roles I've taken on throughout my career.
        </p>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-border transform -translate-x-1/2 hidden md:block"></div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 hidden md:block"></div>
                
                <div className="md:w-1/2 md:px-10">
                  <Card className="border border-border/40 bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-primary" />
                        {exp.role}
                      </CardTitle>
                      <CardDescription className="text-base font-medium">
                        {exp.company}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <MapPin className="mr-1 h-4 w-4" />
                          {exp.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="mr-1 h-4 w-4" />
                          {exp.period}
                        </div>
                      </div>
                      
                      <ul className="space-y-2 list-disc pl-5">
                        {exp.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}