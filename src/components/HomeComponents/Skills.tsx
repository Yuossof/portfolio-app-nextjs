"use client"
import  { useEffect, useState } from 'react'
import { Card, CardContent } from '../ui/card'
import { Trash } from 'lucide-react'
import axios from 'axios'
import { motion } from 'framer-motion'
import { CodepenIcon as React, ForwardIcon as Nextjs, TypeIcon as Typescript, CodepenIcon as NodeJs, Database, GitGraphIcon as Git, Figma, Server } from 'lucide-react'


const Skills = ({ admin, id }: { admin: boolean, id: string }) => {
    const [data, setData] = useState([])
    const [activeItemId, setActiveItemId] = useState("")
    const [isLoading, setIsloading] = useState<boolean>(false)

    useEffect(() => {
        const getSkills = async () => {
            try {
                const res = await axios.get("http://localhost:3000/api/admin/skills")
                const skills = res.data
                setData(skills)
                console.log(skills)
            } catch (error) {
                console.log(error)
            }
        }

        getSkills()
    }, [])

    // const deleteSkill = async (skillId: string) => {
    //     try {
    //         setIsloading(true)
    //         await axios.delete(`http://localhost:3000/api/admin/skills/${skillId}`)
    //         setIsloading(false)
    //         window.location.reload()
    //     } catch (error) {
    //         setIsloading(false)
    //         console.log(error)
    //     } finally {
    //         setIsloading(false)
    //     }
    // }

    const skills= [
        {
          name: "React",
          icon: <React className="h-8 w-8 text-white" />,
          description: "Building interactive UIs with reusable components"
        },
        {
          name: "Next.js",
          icon: <Nextjs className="h-8 w-8 text-white" />,
          description: "Creating fast, SEO-friendly React applications"
        },
        {
          name: "TypeScript",
          icon: <Typescript className="h-8 w-8 text-white" />,
          description: "Developing scalable applications with type safety"
        },
        {
          name: "Node.js",
          icon: <NodeJs className="h-8 w-8 text-white" />,
          description: "Building efficient backend services and APIs"
        },
        {
          name: "Databases",
          icon: <Database className="h-8 w-8 text-white" />,
          description: "Designing and managing SQL and NoSQL databases"
        },
        {
          name: "Git",
          icon: <Git className="h-8 w-8 text-white" />,
          description: "Version control and collaborative development"
        },
        {
          name: "UI/UX Design",
          icon: <Figma className="h-8 w-8 text-white" />,
          description: "Creating intuitive and visually appealing interfaces"
        },
        {
          name: "DevOps",
          icon: <Server className="h-8 w-8 text-white" />,
          description: "Implementing CI/CD pipelines and cloud deployment"
        }
      ]

    return (
        <section id="skills" className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-200">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-md transition-shadow duration-300 shadow-lg bg-slate-800 border-2 border-gray-700 ">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4 ">
                      {skill.icon}
                      <h3 className="text-lg text-slate-100 font-semibold ml-3">{skill.name}</h3>
                    </div>
                    <p className="text-sm text-slate-200">{skill.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )
}

export default Skills