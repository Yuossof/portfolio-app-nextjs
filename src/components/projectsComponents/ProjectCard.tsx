"use client"
import React, { useEffect } from 'react'
import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"
import axios from 'axios'
import { useState } from 'react'
interface ProjectCardProps {
  
    imageUrl: string

}

interface ProjectDTO {
    id: string,
    name: string,
    description: string
}


const ProjectCard = ({imageUrl}: ProjectCardProps) => {
    const [data, setData] = useState<ProjectDTO[]>([])
    const [errorMessage, setErrorMessage] = useState("")
    useEffect(() => {
        const getProjects = async () => {
            try {
                const res = await axios.get("http://localhost:3000/api/admin/projects")
                const projects = res.data
                setData(projects)
            } catch (error) {
                setErrorMessage(error.response?.data.message)
            }
        }
        getProjects()
    }, [])
    return (
        <>
            {data.map((project) => (
                <div key={project.id} className='lg-[300px] md:w-[320px] sm:w-[360px] w-[330px] flex flex-col rounded-sm overflow-hidden border-2'>
                    <div className='h-[195px]'>
                        <Image
                            src={imageUrl}
                            alt="no image"
                            width={300}
                            height={200}
                            className="w-full h-48 object-cover"
                        />
                    </div>
                    <div className='h-[195px] flex flex-col justify-between items-start'>
                        <div className='pl-4 pt-6 flex flex-col gap-2'>
                            <h1 className='text-gray-700 text-xl'>{project.name}</h1>
                            <p className='text-sm text-muted-foreground'>{project.description}</p>
                        </div>
                        <Button className='ml-3 mb-3'>
                            <Link href={`/project/${project.id}`}>View Project</Link>
                        </Button>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ProjectCard