"use client"
import  { useEffect, useState } from 'react'
import { Card, CardContent } from '../ui/card'
import axios from 'axios'
import { motion } from 'framer-motion'

interface SkillTypes {
  id: string,
  name: string,
  description?: string,
  icon?: string
}
const Skills = () => {
    const [data, setData] = useState<SkillTypes[]>([])
    const [isLoading, setIsloading] = useState<boolean>(false)

    useEffect(() => {
        const getSkills = async () => {
            try {
              setIsloading(true)
                const res = await axios.get("http://localhost:3000/api/admin/skills")
                const skills = res.data
                setIsloading(false)
                setData(skills)
                console.log(skills)
            } catch (error) {
                console.log(error)
            }
        }

        getSkills()
    }, [])



    return (
        <section id="skills" className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-200">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${isLoading ? "opacity-40" : ""}`}
              >
                <Card className="h-full hover:shadow-md transition-shadow duration-300 shadow-lg bg-slate-800 border-2 border-gray-700 ">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3 ">
                      {skill.icon}
                      <h3 className="text-xl text-slate-100 font-semibold">{skill.name}</h3>
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