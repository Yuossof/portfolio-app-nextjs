"use client"
import React from 'react'
import ProjectCard from '../projectsComponents/ProjectCard'
const Projects = () => {
    return (
        <section id="projects" className="w-full flex justify-center py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className=" px-4 md:px-6 ">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ProjectCard
                        imageUrl="/placeholder.svg?height=200&width=300"
                    />
                </div>
            </div>
        </section>
    )
}

export default Projects