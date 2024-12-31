"use client"
import { useEffect, useState } from 'react'
import { Card, CardContent } from '../ui/card'
import axios, { AxiosError } from 'axios'
import { motion } from 'framer-motion'
import SkillsLoadingSkeleton from './skills-loading-skeleton/SkillsLoadingSkeleton'

interface SkillTypes {
  id: string,
  name: string,
  description?: string,
  icon?: string
}

interface ErrorResponse {
  message: string;
}

const Skills = () => {
  const [data, setData] = useState<SkillTypes[]>([])
  const [isLoading, setIsloading] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>("")

  useEffect(() => {
    const getSkills = async () => {
      try {
        setIsloading(true)
        const res = await axios.get("/api/admin/skills")
        const skills = res.data
        setIsloading(false)
        setData(skills)
        console.log(skills)
      } catch (error) {
        const axiosError = error as AxiosError<ErrorResponse>
        setErrorMessage(axiosError.response?.data?.message || "something went wrong")
      }
    }

    getSkills()
  }, [])



  return (
    <section id="skills" className="py-20 bg-slate-900 z-30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-slate-200">My Skills {errorMessage}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {isLoading && [0, 1, 2, 3, 4, 5, 6, 7].map((item, i) => (
            <SkillsLoadingSkeleton key={i} />
          ))
          }
          {!isLoading && data.map((skill, index) => (
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