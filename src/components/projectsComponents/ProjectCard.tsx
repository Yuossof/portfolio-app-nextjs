'use client'

import React, { useEffect, useState } from 'react'
import Image from "next/image"
import { Button } from '@/components/ui/button'
import axios, { AxiosError } from 'axios'
import { motion } from 'framer-motion'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Globe } from 'lucide-react'
import Link from 'next/link'
import LoadingSkeleton from './loading-skeleton/LoadingSkeleton'

interface ProjectDTO {
    id: string,
    name: string,
    description: string,
    demoUrl: string,
    githubUrl: string,
    tags: [
        {
            tagName: string,
            id: string
        }
    ],
    projectsImages: [
        { imageUrl: string }
    ]
}

interface ErrorResponse {
    message: string;
}


const ProjectCard = () => {
    const [data, setData] = useState<ProjectDTO[]>([])
    const [errorMessage, setErrorMessage] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const getProjects = async () => {
            try {
                setIsLoading(true)
                const res = await axios.get("/api/admin/projects")
                const projects = res.data
                setIsLoading(false)
                setData(projects)
            } catch (error) {
                const axiosError = error as AxiosError<ErrorResponse>
                setErrorMessage(axiosError.response?.data?.message || "An error occurred while fetching projects.")
            }
        }
        getProjects()
    }, [])

    return (
        <section id="projects" className="py-20 w-full flex justify-center bg-gray-900">
            <div className="container px-4 w-full">
                {errorMessage && <h1 className="text-red-500 text-center mb-4">{errorMessage}</h1>}
                <h2 className="text-3xl font-bold mb-12 text-center text-slate-200">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {isLoading &&
                        [0, 1, 2, 3].map((item, i)=> (
                            <LoadingSkeleton key={i} />
                        ))
                    }
                    {!isLoading && data.map((project, index) => (
                        <motion.div
                            className='z-10'
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="overflow-hidden z-20 group rounded-lg border-2 border-gray-700 bg-gray-900 shadow-md h-full flex flex-col">
                                <CardContent className="p-0 flex-grow">
                                    <div className="relative border-b-2 border-gray-700 overflow-hidden h-48">
                                        <Image
                                            src={project.projectsImages[0]?.imageUrl || "/placeholder.svg"}
                                            alt={project.name}
                                            layout="fill"
                                            objectFit="cover"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <Link href={`/projects/${project.id}`}><h3 className="font-semibold text-lg mb-2 text-slate-200">{project.name}</h3></Link>
                                        <p className="text-sm text-gray-300 mb-4 line-clamp-3 ml-1">{project.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag) => (
                                                <Badge key={tag.id} variant="secondary" className="text-xs hover:!bg-gray-600 bg-gray-700 text-gray-200">
                                                    {tag.tagName}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter className="mt-auto w-full">
                                    <div className='w-full flex items-center justify-between gap-4'>
                                        <Button className='w-3/4  text-slate-200 border-2 hover:border-gray-700 hover:bg-slate-900 border-gray-800' size="sm" variant="default" asChild>
                                            <a href={project.demoUrl || "#"} target="_blank" rel="noopener noreferrer">
                                                <Globe className="mr-2 h-4 w-4" />
                                                Live Preview
                                            </a>
                                        </Button>
                                        <Button size="sm" className='w-1/4 bg-[#0b0f22] hover:bg-[#020617e1]  border-2 border-gray-800 text-white' asChild>
                                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                                <Github className="h-4 w-4" />
                                            </a>
                                        </Button>
                                    </div>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProjectCard

