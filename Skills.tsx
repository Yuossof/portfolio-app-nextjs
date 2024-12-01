'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { CodepenIcon as React, ForwardIcon as Nextjs, TypeIcon as Typescript, CodepenIcon as NodeJs, Database, GitGraphIcon as Git, Figma, Server } from 'lucide-react'

interface Skill {
  name: string
  icon: React.ReactNode
  description: string
}

const skills: Skill[] = [
  {
    name: "React",
    icon: <React className="h-8 w-8 text-primary" />,
    description: "Building interactive UIs with reusable components"
  },
  {
    name: "Next.js",
    icon: <Nextjs className="h-8 w-8 text-primary" />,
    description: "Creating fast, SEO-friendly React applications"
  },
  {
    name: "TypeScript",
    icon: <Typescript className="h-8 w-8 text-primary" />,
    description: "Developing scalable applications with type safety"
  },
  {
    name: "Node.js",
    icon: <NodeJs className="h-8 w-8 text-primary" />,
    description: "Building efficient backend services and APIs"
  },
  {
    name: "Databases",
    icon: <Database className="h-8 w-8 text-primary" />,
    description: "Designing and managing SQL and NoSQL databases"
  },
  {
    name: "Git",
    icon: <Git className="h-8 w-8 text-primary" />,
    description: "Version control and collaborative development"
  },
  {
    name: "UI/UX Design",
    icon: <Figma className="h-8 w-8 text-primary" />,
    description: "Creating intuitive and visually appealing interfaces"
  },
  {
    name: "DevOps",
    icon: <Server className="h-8 w-8 text-primary" />,
    description: "Implementing CI/CD pipelines and cloud deployment"
  }
]

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-primary">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {skill.icon}
                    <h3 className="text-lg font-semibold ml-3">{skill.name}</h3>
                  </div>
                  <p className="text-sm text-gray-600">{skill.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

