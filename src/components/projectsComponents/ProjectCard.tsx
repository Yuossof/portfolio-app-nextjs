"use client"
import React from 'react'
import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"
interface ProjectCardProps {
    title: string
    description: string
    imageUrl: string
    projectUrl: string
}



const ProjectCard = ({ title, description, imageUrl, projectUrl }: ProjectCardProps) => {
    return (
        <div className='lg-[300px] md:w-[320px] sm:w-[360px] w-[330px] flex flex-col rounded-sm overflow-hidden border-2'>
            <div className='h-[195px]'>
                <Image
                    src={imageUrl}
                    alt={title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                />
            </div>
            <div className='h-[195px] flex flex-col justify-between items-start'>
                <div className='pl-4 pt-6 flex flex-col gap-2'>
                    <h1 className='text-gray-700 text-xl'>{title}</h1>
                    <p className='text-sm text-muted-foreground'>{description}</p>
                </div>
                <Button className='ml-3 mb-3'>
                    <Link href={projectUrl}>View Project</Link>
                </Button>
            </div>
        </div>
    )
}

export default ProjectCard